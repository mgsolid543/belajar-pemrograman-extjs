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
            var groupStore = Ext.getStore('groups');
            var group = groupStore.findRecord('id', value);
            return group != null ? group.get('name') : value;
        }
    }]
});