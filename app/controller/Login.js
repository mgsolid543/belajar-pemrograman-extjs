Ext.define('Movierent.controller.Login', {
    extend: 'Ext.app.Controller',

    requires: [
        'Movierent.util.MD5',
        'Movierent.util.Alert',
        'Movierent.util.Util',
        'Movierent.util.SessionMonitor',
        'Movierent.view.MyViewport'
    ],

    views: [
        'Login',
        'Header',
        'authentication.CapsLockTooltip'
    ],

    refs: [
        {
            ref: 'capslockTooltip',
            selector: 'capslocktooltip'
        }
    ],

    init: function (application) {
        this.control({
            "button#submit": {
                click: this.onButtonClickSubmit
            },
            "button#cancel": {
                click: this.onButtonClickCancel
            },
            "textfield": {
                specialkey: this.onTextfieldSpecialKey
            },
            "textfield[name=password]": {
                keypress: this.onTextfieldKeyPress
            },
            "appheader button#logout": {
                click: this.onButtonClickLogout
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
                        Ext.create('Movierent.view.MyViewport');
                        Movierent.util.SessionMonitor.start();
                    } else {
                        console.log('Login gagal');
                        Movierent.util.Util.showErrorMsg(result.msg);
                    }
                },
                failure: function (conn, response, options, eOpts) {
                    Ext.get(login.getEl().unmask());
                    Movierent.util.Util.showErrorMsg(result.msg);
                }
            });
        }
    },

    onButtonClickCancel: function (button, e, options) {
        // button.up('form').getForm().reset();
        button.up('window').down('form').getForm().reset();
    },

    onTextfieldSpecialKey: function (field, e, options) {
        if (e.getKey()==e.ENTER) {
            var submitBtn = field.up('form').down('button#submit');
            submitBtn.fireEvent('click', submitBtn, e, options);
        }
    },

    onTextfieldKeyPress: function (field, e, options) {
        var charCode = e.getCharCode();

        if ((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)) {

            if (this.getCapslockTooltip() === undefined) {
                Ext.widget('capslocktooltip');
            }

            this.getCapslockTooltip().show();

        } else {

            if (this.getCapslockTooltip() !== undefined) {
                this.getCapslockTooltip().hide();
            }
        }
    },

    onButtonClickLogout: function(button, e, options) {
        console.log('logout process');
        Ext.Ajax.request({
            url: 'php/logout.php',
            
            success: function (conn, response, options, eOpts) {
                var result = Movierent.util.Util.decodeJSON(conn.responseText);

                if (!result) {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                }

                if (result.success) {
                    button.up('mainviewport').destroy();
                    window.location.reload();
                } else {
                    Movierent.util.Util.showErrorMsg(result.msg);
                }
            },
            failure: function (conn, response, options, eOpts) {
                Movierent.util.Util.showErrorMsg(conn.responseText);
            }
        });
    }

});
