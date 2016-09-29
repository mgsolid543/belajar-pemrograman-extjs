Ext.define('Movierent.store.staticData.Languages', {
    extend: 'Movierent.store.staticData.Abstract',

    requires: [
        'Movierent.model.staticData.Language',
        'Movierent.proxy.StaticData'
    ],

    model: 'Movierent.model.staticData.Language',

    storeId: 'languages',

    autoLoad: true,

    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'Language'
        }
    }
});