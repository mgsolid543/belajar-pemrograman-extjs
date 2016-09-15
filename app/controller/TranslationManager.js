Ext.define('Movierent.controller.TranslationManager',{
    extend: 'Ext.app.Controller',

    views: [
        'Translation'
    ],

    refs: [
        {
            ref: 'translation',
            selector: 'translation'
        }
    ],

    onMenuItemClick: function (item, e, options) {
        var menu = this.getTranslation();

        menu.setIconCls(item.iconCls);
        menu.setText(item.text);

        localStorage.setItem("user-lang", item.iconCls);
        window.location.reload();
    },

    onSplitbuttonBeforeRender: function(abstractcomponent, options) {
        var lang = localStorage ? (localStorage.getItem('user-lang') || 'id') : 'id';
        abstractcomponent.iconCls = lang;

        if (lang == 'id') {
            abstractcomponent.text = 'Bhs. Indonesia';
        } else if (lang == 'en') {
            abstractcomponent.text = 'English';
        }
    },
    
    init: function (application) {
        this.control({
            "translation menuitem": {
                click: this.onMenuItemClick
            },
            "translation": {
                beforerender: this.onSplitbuttonBeforeRender
            }
        });
    }
});
