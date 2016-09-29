Ext.define('Movierent.store.staticData.Countries', {
    extend: 'Movierent.store.staticData.Abstract',

    requires: [
        'Movierent.model.staticData.Country',
        'Movierent.proxy.StaticData'
    ],

    model: 'Movierent.model.staticData.Country',

    autoLoad: true,

    storeId: 'countries',

    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'Country'
        }
    }
});