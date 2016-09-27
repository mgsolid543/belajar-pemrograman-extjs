Ext.define('Movierent.view.security.GroupsEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.groupsedit',

    requires: [
        'Movierent.util.Util',
        'Movierent.view.security.GroupPermissions',
        'Movierent.view.security.UsersList'
    ],

    layout: {
        align: 'stretch',
        type: 'vbox'
    },

    bodyPadding: 10,
    title: 'Edit Selected Group',

    items: [{
        xtype: 'fieldset',
        height: 50,
        title: 'Group Information',
        defaults: {
            afterLabelTextTpl: Movierent.util.Util.required,
            anchor: '100%',
            xtype: 'textfield',
            allowBlank: false,
            msgTarget: 'side'
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
        flex: 1
    }, {
        xtype: 'userslist',
        emptyText: 'No users in this group.',
        title: 'Users in this Group',
        hideGroup: true,
        flex: 2
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
            itemId: 'cancelgroupedit',
            iconCls: 'cancel'
        }, {
            xtype: 'button',
            text: 'Save',
            itemId: 'savegroupedit',
            iconCls: 'save'
        }]
    }]
});