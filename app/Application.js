Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: 'ext/src',
        'Ext.ux': 'ext/src/ux',
        'Movierent.util': 'app/util'
    }
});

Ext.define('Movierent.Application', {
    name: 'Movierent',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.form.Panel',
        'Ext.form.Label',
        'Movierent.util.Util',
        'Ext.menu.Menu',
        'Ext.layout.container.Accordion',
        'Movierent.store.security.Users',
        'Movierent.store.security.Permissions',
        'Ext.form.FieldSet',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.form.field.File',
        'Ext.form.CheckboxGroup',
        'Ext.form.Panel',
        'Ext.form.Label'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Main',
        'Login',
        'TranslationManager',
        'Menu',
        'security.Groups',
        'security.Users'
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
