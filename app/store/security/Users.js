Ext.define('Movierent.store.security.Users', {
    extend: 'Ext.data.Store',

    requires: [
        'Movierent.model.security.User'
    ],

    model: 'Movierent.model.security.User',

    proxy: {
        type: 'ajax',
        url: 'php/security/users.php',

        reader: {
            type: 'json',
            root: 'data'
        }
    }
});