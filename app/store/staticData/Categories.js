Ext.define('Movierent.store.staticData.Categories', {
    extend: 'Movierent.store.staticData.Abstract',

    requires: [
        'Movierent.model.staticData.Category',
        'Movierent.proxy.StaticData'
    ],

    model: 'Movierent.model.staticData.Category',

    autoLoad: true,

    storeId: 'categories',

    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'Category'
        }
    }
});