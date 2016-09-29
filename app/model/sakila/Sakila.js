
Ext.define('Movierent.model.sakila.Sakila', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'lastupdate',
            type: 'date',
            dateFormat: 'Y-m-j H:i:s'
        }
    ]
});