Ext.define('Movierent.Application', {
    name: 'Movierent',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.form.Panel',
        'Ext.form.Label',
        'Movierent.util.Util',
        'Ext.menu.Menu'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Login',
        'TranslationManager'
    ],

    stores: [
        // TODO: add stores here
    ],

    init: function () {
        // splashscreen = Ext.getBody().mask('Sedang memuat aplikasi...', 'splashscreen');
        //
        // splashscreen.addCls('splashscreen');
        //
        // Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        //     cls: 'x-splash-icon'
        // });
    },
    
    launch: function() {
        Ext.tip.QuickTipManager.init();

        // var task = new Ext.util.DelayedTask(function () {
        //
        //     //Fade out the body mask
        //     splashscreen.fadeOut({
        //         duration: 1000,
        //         remove:true
        //     });
        //
        //     splashscreen.next().fadeOut({
        //         duration: 1000,
        //         remove: true,
        //         listeners: {
        //             afteranimate: function(el, startTime, eOpts ){
                        Ext.widget('login');
        //             }
        //         }
        //     });
        //
        //     console.log('buka halaman');
        // });
        // task.delay(2000);
    }
});
