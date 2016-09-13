Ext.define('Movierent.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',

    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title : 'Login',
    closeAction: 'hide',
    closable: false,

    items: [
        {
            xtype: 'form',
            frame: false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: "User"
                },
                {
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: "Password"
                }
            ]
        }
    ]
});