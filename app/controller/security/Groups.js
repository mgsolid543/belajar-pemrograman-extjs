Ext.define('Movierent.controller.security.Groups', {
    extend: 'Ext.app.Controller',

    requires: [
        'Movierent.util.Util'
    ],

    views: [
        'security.Groups',
        'security.GroupsList',
        'security.GroupsEdit',
        'security.GroupPermissions'
    ],

    stores: [
        'security.Groups'
    ],

    refs: [{
        ref: 'groupsEdit',
        selector: 'groupsedit'
    }, {
        ref: 'groupPermissions',
        selector: 'grouppermissions'
    }, {
        ref: 'groupsList',
        selector: 'groupslist'
    }],
    
    init: function (application) {
        this.control({
            "groupslist": {
                viewready: this.onViewReady
            }
        });
    },

    onViewReady: function (component, options) {
        component.getStore().load(function(records, operation, success) {
            if (records.length > 0) {
                component.getSelectionModel().select(0);
            }
        });
    },



});