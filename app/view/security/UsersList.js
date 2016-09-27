//var storeUser = Ext.create('Movierent.store.security.Users');
Ext.define('Movierent.view.security.UsersList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userslist',

    frame: true,
    store: Ext.create('Movierent.store.security.Users'),
    columns: [{
        width: 150,
        dataIndex: 'username',
        text: 'Username'
    },  {
        width: 200,
        dataIndex: 'name',
        flex: 1,
        text: 'Name'
    }, {
        width: 250,
        dataIndex: 'email',
        text: 'Email'
    }, {
        width: 150,
        dataIndex: 'group_id',
        text: 'Group',
        renderer: function (value, metaData, record) {
            var groupsStore = Ext.getStore('groups');
            if (!Ext.getStore('groups')) {
                // var groupsStore = Ext.getStore('groups');
                groupsStore = Ext.create('Movierent.store.security.Groups');
                groupsStore.load();
            }
            var group = groupsStore.findRecord('id', value);
            return group != null ? group.get('name') : value;
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        flex: 1,
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Add',
            itemId: 'add',
            iconCls: 'add'
        }, {
            xtype: 'button',
            text: 'Edit',
            itemId: 'edit',
            iconCls: 'edit'
        }, {
            xtype: 'button',
            text: 'Delete',
            itemId: 'delete',
            iconCls: 'delete'
        }]
    }]
});