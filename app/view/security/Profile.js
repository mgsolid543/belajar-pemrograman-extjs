Ext.define('Movierent.view.security.Profile', {
    extend: 'Ext.window.Window',
    alias: 'widget.profile',

    height: 260,
    width: 550,

    requires: ['Movierent.util.Util'],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    title: 'Users',
    items: [{}]
});