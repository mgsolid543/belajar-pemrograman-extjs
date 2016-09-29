Ext.define('Movierent.model.staticData.Category', {
    extend: 'Movierent.model.sakila.Sakila',

    dProperty: 'category_id',

    fields: [
        { name: 'category_id' },
        { name: 'name', defaultValue: 'New Category*'}
    ]
});