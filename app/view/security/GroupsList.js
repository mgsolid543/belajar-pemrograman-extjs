Ext.define('Movierent.view.security.GroupsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.groupslist',

    title: 'Groups',
    frame: true,

    store: 'security.Groups',

    columns: [{
        xtype: 'gridcolumn',
        dataIndex: 'name',
        flex: 1,
        text: 'Name'
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            itemId: 'addgroup',
            iconCls: 'add',
            text: 'Add'
        }, {
            xtype: 'button',
            itemId: 'deletegroup',
            iconCls: 'delete',
            text: 'Delete'
        }]
    }]
});