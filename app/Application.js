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

        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },
    
    launch: function() {
        var task = new Ext.util.DelayedTask(function () {

            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });

            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true
            });

            console.log('buka halaman');
        });
        task.delay(2000);
    }
});
