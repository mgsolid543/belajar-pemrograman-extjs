Ext.define('Movierent.view.security.Users', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.users',

    requires: [
        'Movierent.view.security.UsersList'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'userslist'
    }]
});