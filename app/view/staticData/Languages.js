Ext.define('Movierent.view.staticData.Languages', {
    extend: 'Movierent.view.staticData.AbstractGrid',
    alias: 'widget.languagesgrid',

    store: 'staticData.Languages',

    columns: [{
        text: 'Language Id',
        width: 100,
        dataIndex: 'language_id',
        filter: {
            type: 'numeric'
        }
    }, {
        text: 'Language Name',
        flex: 1,
        dataIndex: 'name',
        editor: {
            allowBlank: false,
            maxLength: 45
        },
        filter: {
            type: 'string'
        }
    }]
});