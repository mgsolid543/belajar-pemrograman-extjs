Ext.define('Movierent.store.Menu',{
    extend: 'Ext.data.Store',

    requires: [
        'Movierent.model.menu.Root'
    ],

    model: 'Movierent.model.menu.Root',

    proxy: {
        type: 'ajax',
        url: 'php/menu.php',

        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
