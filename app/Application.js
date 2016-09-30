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
        'Ext.menu.Menu',
        'Ext.form.Panel',
        'Ext.layout.container.Accordion',
        'Ext.form.Label',
        'Movierent.store.security.Permissions',
        'Movierent.store.security.Users',
        'Movierent.util.Util',
        'Ext.data.proxy.Ajax',
        'Ext.form.FieldSet',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.form.field.File',
        'Ext.grid.plugin.CellEditing',
        'Ext.ux.grid.FiltersFeature',
        'Ext.grid.column.Date',
        'Ext.grid.column.Action',
        // 'Ext.chart.series.Pie',
        // 'Ext.chart.series.Column',
        // 'Ext.chart.axis.Numeric',
        // 'Ext.chart.axis.Category',
        // 'Movierent.view.film.FilmWindow',
        'Ext.form.CheckboxGroup'
        // 'Movierent.view.film.SearchCategory',
        // 'Movierent.view.film.SearchActor'
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
        'security.Users',
        'staticData.AbstractController'
    ],

    stores: [
         'security.Permissions'
    ],

    splashscreen: {},

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
