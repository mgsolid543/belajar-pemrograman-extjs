Ext.define('Movierent.controller.security.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'security.Users'
    ],
    
    init: function (application) {
        this.control({
            "userslist": {
                render: this.onRender
            }
        });
    },

    onRender: function (component, options) {
        component.getStore().load();
    }
});