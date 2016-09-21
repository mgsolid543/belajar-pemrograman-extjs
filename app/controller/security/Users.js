Ext.define('Movierent.controller.security.Users', {
    extend: 'Ext.app.Controller',

    requires: [
        'Movierent.util.Util'
    ],

    views: [
        'security.Users',
        'security.Profile'
    ],

    stores: [
        'security.Groups'
    ],

    refs: [{
        ref: 'usersList',
        selector: 'userslist',
    }, {
        ref: 'userPicture',
        selector: 'profile image'
    }],
    
    init: function (application) {
        this.control({
            "userslist": {
                render: this.onRender
            }
        });

        if (!Ext.getStore('groups')) {
            Ext.create('Movierent.store.security.Groups');
        }
    },

    onRender: function (component, options) {
        component.getStore().load();
    }
});