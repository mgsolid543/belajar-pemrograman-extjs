Ext.define('Movierent.store.staticData.Actors', {
    extend: 'Movierent.store.staticData.Abstract',

    requires: [
        'Movierent.model.staticData.Actor',
        'Movierent.proxy.StaticData'
    ],

    model: 'Movierent.model.staticData.Actor',

    autoLoad: true,

    storeId: 'actors',

    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'Actor'
        }
    }
});