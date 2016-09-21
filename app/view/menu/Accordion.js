Ext.define('Movierent.view.menu.Accordion',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainmenu',

    width: 300,
    layout: {
        type: 'accordion',
        pack: 'start'
    },
    multi: true,
    collapsible: false,
    hideCollpaseTool: false,
    iconCls: 'sitemap',
    title: 'Menu'
});