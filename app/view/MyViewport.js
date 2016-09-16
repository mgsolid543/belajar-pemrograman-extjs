Ext.define('Movierent.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    requires: [
        'Ext.layout.container.Border',
        'Movierent.view.Header'
    ],

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'mainmenu',
            width: 185,
            collapsible: true,
            region: 'west',
            // style: 'background-color: #8FB488;'
        }, {
            xtype: 'appheader',
            region: 'north'
        }, {
            xtype: 'mainpanel',
            region: 'center'
        }, {
            xtype: 'container',
            region: 'south',
            height: 30,
            style: 'border-top: 1px solid #4c72a4;',
            html: '<div id="titleHeader"><center><span style="font-size: 10px">mgsolid543</span></center></div>'
        }
    ]
});