Ext.define('Movierent.model.menu.Item',{
    extend: 'Ext.data.Model',

    uses: [
        'Movierent.model.menu.Root'
    ],

    idProperty: 'id',

    fields: [
        {
            name: 'text'
        }, {
            name: 'iconCls'
        }, {
            name: 'className'
        }, {
            name: 'id'
        }, {
            name: 'parent_id'
        }
    ],

    belongsTo: {
        model: 'Movierent.model.menu.Root',
        foreignKey: 'parent_id'
    }
});