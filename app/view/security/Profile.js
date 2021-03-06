Ext.define('Movierent.view.security.Profile', {
    extend: 'Ext.window.Window',
    alias: 'widget.profile',

    height: 260,
    width: 550,
    modal: true,

    requires: ['Movierent.util.Util'],

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'User',

    items: [{
        xtype: 'form',
        bodyPadding: 5,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },

        items: [{
            xtype: 'fieldset',
            flex: 2,
            title: 'User Information',
            defaults: {
                afterLabelTextTpl: Movierent.util.Util.required,
                anchor: '100%',
                xtype: 'textfield',
                allowBlank: false,
                labelWidth: 60
            },
            items: [{
                xtype: 'hiddenfield',
                fieldLabel: 'Label',
                name: 'id'
            }, {
                fieldLabel: 'Username',
                name: 'username'
            }, {
                fieldLabel: 'Name',
                maxLength: 100,
                name: 'name'
            }, {
                fieldLabel: 'Email',
                maxLength: 100,
                name: 'email',
                vtype: 'email',
                msgTarget: 'side'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Group',
                name: 'group_id',
                displayField: 'name',
                valueField: 'id',
                queryMode: 'local',
                store: 'security.Groups'
            }, {
                xtype: 'filefield',
                fieldLabel: 'Picture',
                name: 'picture',
                allowBlank: true,
                afterLabelTextTpl: ''
            }]
        }, {
            xtype: 'fieldset',
            title: 'Picture',
            width: 170,

            items: [{
                xtype: 'image',
                height: 150,
                width: 150,
                src: ''
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
            itemId: 'cancel',
            iconCls: 'cancel'
        },
                {
                    xtype: 'button',
                    text: 'Save',
                    itemId: 'save',
                    iconCls: 'save'
                }
            ]
        }
    ]
});