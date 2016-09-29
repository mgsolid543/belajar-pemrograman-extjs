Ext.define('Movierent.model.staticData.City', {
    extend: 'Movierent.model.sakila.Sakila',

    idProperty: 'city_id',

    fields: [
        { name: 'city_id' },
        { name: 'city' , defaultValue: 'New City*'},
        { name: 'country_id' }
    ]
});