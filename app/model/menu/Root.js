Ext.define('Movierent.model.menu.Root', {
    extend: 'Ext.data.Model',

    uses: [
        'Movierent.model.menu.Item'
    ],

    idProperty: 'id',

    fields: [
        {
            name: 'text'
        }, {
            name: 'iconCls'
        }, {
            name: 'id'
        }
    ],

    hasMany: {
        model: 'Movierent.model.menu.Item',
        foreignKey: 'parent_id',
        name: 'items'
    }
});