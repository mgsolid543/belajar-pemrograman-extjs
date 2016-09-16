Ext.define('Movierent.view.MainPanel',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',

    activetab: 0,

    items: [
        {
            xtype: 'panel',
            closable: false,
            iconCls: 'home',
            title: 'Home'
        }
    ]
});
