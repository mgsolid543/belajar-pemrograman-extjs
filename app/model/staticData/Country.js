Ext.define('Movierent.model.staticData.Country', {
    extend: 'Movierent.model.sakila.Sakila',

    idProperty: 'country_id',

    fields: [
        { name: 'country_id' },
        { name: 'country', defaultValue: 'New Country*'}
    ]
});