Ext.define('Movierent.store.security.Groups', {
    extend: 'Ext.data.Store',

    requires: [
        'Movierent.model.security.Group'
    ],

    model: 'Movierent.model.security.Group',

    storeId: 'groups',

    proxy: {
        type: 'ajax',
        url: 'php/security/group.php',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});