Ext.define('Movierent.Application', {
    name: 'Movierent',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],

    init: function () {
        splashscreen = Ext.getBody().mask('Sedang memuat aplikasi...', 'splashscreen');
    },
    
    launch: function() {
        console.log('launch');
    }
});
