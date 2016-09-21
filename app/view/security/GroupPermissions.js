Ext.define('Movierent.view.security.GroupPermissions', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.grouppermissions',

    requires: ['Movierent.store.security.Permissions'],

    title: 'Group Permissions',
    roortVisible: false,
    useArrows: true,
    frame: false,
    viewConfig: {
        markDirty: false
    },
    store: Ext.create('Movierent.store.security.Permissions')
});