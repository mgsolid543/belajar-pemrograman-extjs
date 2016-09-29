Ext.define('Movierent.store.staticData.Cities', {
    extend: 'Movierent.store.staticData.Abstract',

    requires: [
        'Movierent.model.staticData.City',
        'Movierent.proxy.StaticData'
    ],

    model: 'Movierent.model.staticData.City',

    groupField: 'country_id',

    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'City'
        }
    }
});