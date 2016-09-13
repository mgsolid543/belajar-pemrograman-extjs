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
            customPassText: 'Not a valid password.  Length must be at least 6 characters and maximum of 20Password must contain one digit, one letter lowercase, one letter uppercase, onse special symbol @#$% and between 6 and 20 characters.',
        });
    },

    onButtonClickSubmit: function (button, e, options) {
        console.log('login submit');
    },

    onButtonClickCancel: function (button, e, options) {
        console.log('login cancel');
        // button.up('form').getForm().reset();
        Ext.getCmp('formLogin').getForm().reset();
    }

});
