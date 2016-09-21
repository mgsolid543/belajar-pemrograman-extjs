Ext.define('Movierent.view.security.GroupsEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.groupsedit',

    requires: [
        'Movierent.util.Util',
        'Movierent.view.security.GroupPermissions',
        'Movierent.view.security.UsersList'
    ],

    layout: {
        type: 'vbox',
        align: 'scretch'
    },

    bodyPadding: 10,
    title: 'Edit Selected Group',

    items: [{
        xtype: 'fieldset',
        height: 100,
        title: 'Group Information',
        defaults: {
            afterLabelTextTpl: Movierent.util.Util.required,
            anchor: '100%',
            xtype: 'textfield',
            allowBlank: false,
            msgTarget: 'under'
        },
        items: [{
            xtype: 'hiddenfield',
            fieldLabel: 'Label',
            name: 'id'
        }, {
            fieldLabel: 'Group Name',
            name: 'name',
            maxLength: 45,
            minLength: 3
        }]
    }, {
        xtype: 'grouppermissions',
        flex: 2
    }, {
        xtype: 'userslist',
        emptyText: 'No users in this group.',
        title: 'Users in this Group',
        hideGroup: true,
        flex: 1
    }],
    dockedItems: [{
        xtype: 'toolbar',
        flex: 1,
        dock: 'bottom',
        layout: {
            pack: 'end',
            type: 'hbox'
        },
        items: [{
            xtype: 'button',
            text: 'Cancel',
            itemId: 'cancel',
            iconCls: 'cancel'
        }, {
            xtype: 'button',
            text: 'Save',
            itemId: 'save',
            iconCls: 'save'
        }]
    }]
});