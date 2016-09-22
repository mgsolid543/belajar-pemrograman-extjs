Ext.define('Movierent.controller.security.Users', {
    extend: 'Ext.app.Controller',

    requires: [
        'Movierent.util.Util'
    ],

    views: [
        'security.Users',
        'security.Profile'
    ],

    stores: [
        'security.Groups'
    ],

    refs: [{
        ref: 'usersList',
        selector: 'userslist',
    }, {
        ref: 'userPicture',
        selector: 'profile image'
    }],
    
    init: function (application) {
        this.control({
            "userslist": {
                render: this.onRender
            },
            "userslist button#add": {
                click: this.onButtonClickAdd
            },
            "userslist button#edit": {
                click: this.onButtonClickEdit
            },
            "userslist button#delete": {
                click: this.onButtonClickDelete
            },
            "profile button#cancel": {
                click: this.onButtonClickCancel
            }
        });
        if (!Ext.getStore('groups')) {
            Ext.create('Movierent.store.security.Groups');
        }
    },

    onRender: function (component, options) {
        component.getStore().load();
    },

    onButtonClickAdd: function (button, e, options) {
        var win = Ext.create('Movierent.view.security.Profile');
        win.setTitle('Add new user');
        win.show();
    },

    onButtonClickEdit: function(button, e, options) {
        var grid = this.getUsersList();
        console.log('edit');
        var record = grid.getSelectionModel().getSelection();

        if (record[0]) {
            var editWindow = Ext.create('Movierent.view.security.Profile');
            editWindow.down('form').loadRecord(record[0]);
            if (record[0].get('picture')) {
                var img = editWindow.down('image');
                img.setSrc('resources/profileImages/'+ record[0].get('picture'));
            }
            editWindow.setTitle(record[0].get('name'));
            editWindow.show();
        }
    },

    onButtonClickDelete: function(button, e, options) {
        var grid = this.getUsersList();
        record = grid.getSelectionModel().getSelection();
        store = grid.getStore();

        if (store.getCount() >= 2 && record[0]) {
            Ext.Msg.show({
                title: 'Delete?',
                msg: 'Are you sure you want to delete?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(buttonId) {
                    if (buttonId == 'yes') {
                        Ext.Ajax.request({
                            url: 'php/security/deleteUser.php',
                            params: {
                                id: record[0].get('id')
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Movierent.util.Util.decodeJSON(conn.responseText);
                                if (result.success) {
                                    Movierent.util.Alert.msg('Success!', 'User deleted.');
                                    store.load();
                                } else {
                                    Movierent.util.Util.showErrorMsg(conn.responseText);
                                }
                            },
                            failure: function (conn, response, options, eOpts) {
                                Movierent.util.Util.showErrorMsg(conn.responseText);
                            }
                        });
                    }
                }
            });
        } else if (store.getCount() == 1) {
            Ext.Msg.show({
                title: 'Warning',
                msg: 'You cannot delete all users from the application',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    onButtonClickCancel: function (button, e, options) {
        button.up('window').close();
    }
});