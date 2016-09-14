Ext.define('Movierent.controller.Login', {
    extend: 'Ext.app.Controller',

    views: [
        'Login'
    ],

    init: function (application) {
        this.control({
            "button#submit": {
                click: this.onButtonClickSubmit
            },
            "button#cancel": {
                click: this.onButtonClickCancel
            }
        });

        Ext.apply(Ext.form.field.VTypes, {
            //  vtype validation function
            customPass: function (val, field) {
                return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
            },
            // vtype Text property: The error text to display when the validation function returns false
            customPassText: 'Not a valid password.  Length must be at least 6 characters and maximum of 20 Password must contain one digit, one letter lowercase, one letter uppercase, onse special symbol @#$% and between 6 and 20 characters.',
        });
    },

    onButtonClickSubmit: function (button, e, options) {
        console.log('login submit');
        var formPanel = button.up('window').down('form'),
            login   = button.up('login'),
            user    = formPanel.down('textfield[name=user]').getValue();
            pass    = formPanel.down('textfield[name=password]').getValue();

        if (formPanel.getForm().isValid()) {
            pass = Movierent.util.MD5.encode(pass);
            console.log('User: ' + user);
            console.log('Pass: ' + pass);
            Ext.get(login.getEl()).mask("Sedang proses otentikasi... Mohon tunggu...", 'loading');

            Ext.Ajax.request({
                url: 'php/login.php',
                params: {
                    user: user,
                    password: pass
                },
                success: function (conn, response, options, eOpts) {
                    Ext.get(login.getEl().unmask());
                    var result = Movierent.util.Util.decodeJSON(conn.responseText);
                    if (result.success) {
                        console.log('Login sukses');
                        Movierent.util.Alert.msg('Sukses!', 'User berhasil login dan terotentikasi.');
                        login.close();
                    } else {
                        console.log('Login gagal');
                        Movierent.util.Util.showErrorMsg(conn.responseText);
                    }
                },
                failure: function (conn, response, options, eOpts) {
                    Ext.get(login.getEl().unmask());
                    Movierent.util.Util.showErrorMsg(conn.responseText);
                }
            });
        }
    },

    onButtonClickCancel: function (button, e, options) {
        console.log('login cancel');
        // button.up('form').getForm().reset();
        button.up('window').down('form').getForm().reset();
    }
});
