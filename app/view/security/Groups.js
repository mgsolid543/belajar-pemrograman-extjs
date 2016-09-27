Ext.define('Movierent.view.security.Groups', {
    extend: 'Ext.container.Container',
    alias: 'widget.groups',

    requires: [
        'Movierent.view.security.GroupsList',
        'Movierent.view.security.GroupPermissions',
        'Movierent.view.security.GroupsEdit'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'groupslist',
        flex: 1
    }, {
        xtype: 'groupsedit',
        flex: 2
    }]
});