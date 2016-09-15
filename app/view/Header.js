Ext.define('Movierent.view.Header',{
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.appheader',

    height: 30,
    ui: 'footer',
    style: 'border-bottom: 4px solid #4c72a4',

    items: [
        {
            xtype: 'label',
            html: '<div id="titleHeader">Nga-Rental<span style="font-size: 12px;"> Ext Js</span></div>'
        },
        {
            xtype: 'tbfill'
        },
        {
            xtype: 'tbseparator'
        },
        {
            xtype: 'button',
            text: 'Logout',
            itemId: 'logout',
            iconCls: 'logout'
        }
    ]
});