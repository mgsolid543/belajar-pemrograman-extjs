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
    }
});