Ext.define('Movierent.controller.staticData.AbstractController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Movierent.util.Util'
    ],

    stores: [
        'staticData.Actors',
        'staticData.Categories',
        'staticData.Cities',
        'staticData.Countries',
        'staticData.Languages'
    ],

    views: [
        'staticData.AbstractGrid',
        'staticData.Actors',
        'staticData.Categories',
        'staticData.Cities',
        'staticData.Countries',
        'staticData.Languages'
    ],

    init: function (application) {
        this.control({
            "staticdatagrid": {
                render: this.render,
                edit: this.onEdit
            },
            "staticdatagrid button#add": {
                click: this.onButtonClickAdd
            },
            "staticdatagrid button#save": {
                click: this.onButtonClickSave
            },
            "staticdatagrid button#cancel": {
                click: this.onButtonClickCancel
            },
            "staticdatagrid button#clearFilter": {
                click: this.onButtonClickClearFilter
            },
            "staticdatagrid actioncolumn": {
                itemclick: this.handleActionColumn
            }
        });

        this.listen({
            store: {
                '#staticDataAbstract': {
                    write: this.onStoreSync
                }
            }
        });

        if (!Ext.getStore('countries')) {
            Ext.create('Movierent.store.staticData.Countries');
        }

        if (!Ext.getStore('languages')) {
            Ext.create('Movierent.store.staticData.Languages').load();
        }

        if (!Ext.getStore('actors')) {
            Ext.create('Movierent.store.staticData.Actors');
        }

        if (!Ext.getStore('categories')) {
            Ext.create('Movierent.store.staticData.Categories');
        }
    },

    onStoreSync: function(store, operation, options){
        Movierent.util.Alert.msg('Success!', 'Your changes have been saved.');
    },

    render: function (component, options) {
        component.getStore().load();
    },

    onEdit: function (editor, context, options) {
        context.record.set('last_update', new Date());
    },

    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('staticdatagrid');
        var store = grid.getStore();
        var modelName = store.getProxy().getModel().modelName;
        var cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
            last_update: new Date()
        }));

        cellEditing.startEditByPosition({row: 0, column: 1});
    },

    onButtonClickSave: function (button, e, options) {
        button.up('staticdatagrid').getStore().sync();
    },

    onButtonClickCancel: function (button, e, options) {
        button.up('staticdatagrid').getStore().reload();
    },

    onButtonClickClearFilter: function (button, e, options) {
        button.up('staticdatagrid').filters.clearFilters();
    },

    handleActionColumn: function (column, action, view, rowIndex, colIndex, item, e) {
        var store = view.up('staticdatagrid').getStore();
        var rec = store.getAt(rowIndex);

        if (action == 'delete') {
            store.remove(rec);
            Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
        }
    }
});