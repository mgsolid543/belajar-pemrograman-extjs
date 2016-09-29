Ext.define('Movierent.model.staticData.Actor', {
    extend: 'Movierent.model.sakila.Sakila',

    idProperty: 'actor_id',

    fields: [
        { name: 'actor_id' },
        { name: 'first_name', defaultValue: 'First Name*'},
        { name: 'last_name' , defaultValue: 'Last Name*'}
    ]
});