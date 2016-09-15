Ext.define('Movierent.view.Translation',{
    extend: 'Ext.button.Split',
    alias: 'widget.translation',

    menu: Ext.create('Ext.menu.Menu',{
        items: [
            {
                xtype: 'menuitem',
                iconCls: 'id',
                text: 'Bhs. Indonesia'
            }, {
                xtype: 'menuitem',
                iconCls: 'en',
                text: 'English'
            }
        ]
    })
});