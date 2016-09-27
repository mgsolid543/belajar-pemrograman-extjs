Ext.define('Movierent.view.security.FormAddGroup', {
    extend: 'Ext.window.Window',
    alias: 'widget.formaddgroup',

    height: 260,
    width: 550,
    modal: true,

    requires: ['Movierent.util.Util'],

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Group',

    items: [{
        xtype: 'form',
        bodyPadding: 5,
        layout: {
            type: 'fit'
        },

        items: [{
            xtype: 'fieldset',
            flex: 2,
            title: 'Group Information',
            defaults: {
                afterLabelTextTpl: Movierent.util.Util.required,
                anchor: '100%',
                xtype: 'textfield',
                allowBlank: false,
                labelWidth: 100
            },
            items: [{
                xtype: 'hiddenfield',
                fieldLabel: 'Label',
                name: 'id'
            }, {
                fieldLabel: 'Group Name',
                name: 'name'
            }]
        }]
    }],
    dockedItems: [{
        xtype: 'toolbar',
        flex: 1,
        dock: 'bottom',
        ui: 'footer',
        layout: {
            pack: 'end',
            type: 'hbox'
        },

        items: [{
            xtype: 'button',
            text: 'Cancel',
            itemId: 'cancelformaddgroup',
            iconCls: 'cancel'
        },
            {
                xtype: 'button',
                text: 'Save',
                itemId: 'saveformaddgroup',
                iconCls: 'save'
            }
        ]
    }
    ]
});