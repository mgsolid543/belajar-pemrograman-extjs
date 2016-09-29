Ext.define('Movierent.model.staticData.Language', {
    extend: 'Movierent.model.sakila.Sakila',

    idProperty: 'language_id',

    fields: [
        { name: 'language_id' },
        { name: 'name', defaultValue: 'New Language*'}
    ]
});