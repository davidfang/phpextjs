Ext.define('PHPExtJS.controller.EmployeesController', {
    extend: 'Ext.app.Controller',
    stores: [
        'Employees',
    ],
    models: ['Employees'],
    
    views: ['Employees._grid'],
    
    refs: [
        {
        ref: 'employeesForm',
            selector: 'panel'
        },
        {
        ref: 'employeesGrid',
            selector: 'grid',
        }
    ],
    
    init: function() {

        this.control({
            'employeesGrid dataview': {
                itemdblclick: this.actionDbClick
            },
            'employeesGrid button[action=delete]': {
                click: this.actionDelete
            },
            'employeesForm button[action=save]': {
                click: this.actionSave
            },
            'employeesForm button[action=cancel]': {
                click: this.actionCancel
            },
            'employeesGrid button[action=search]': {
                click: this.actionSearch
            },
            'employeesForm button[action=reset]': {
                click: this.actionReset
            }
        });

    },

    actionDbClick: function(dataview, record, item, index, e, options){
        var formEmployees = Ext.create('PHPExtJS.view.Employees._form');

        if (record) {

            formEmployees.down('form').loadRecord(record);

        }    
    },

    actionUpdate: function(dataview, record) { //function(grid, record) {
        var formEmployees = Ext.create('PHPExtJS.view.Employees._form');

        if (record) {

            formEmployees.down('form').loadRecord(record);

        }
    },

    actionCreate: function(button, e, options) {
        this.actionUpdate();
    },

    actionSave: function(button) {

        var win = button.up('window'),
        form = win.down('form'),
        record = form.getRecord(),
        values = form.getValues(false, false, false, true);

        var isNewRecord = false;
        
                if (values.id !='') {
            record.set(values); //saving line
        } else {
            record = Ext.create('PHPExtJS.model.Employees');
            record.set(values);
            this.getEmployeesStore().add(record);
            isNewRecord = true;
        }

        win.close();
        //this.getEmployeesStore().sync(); use this code for autoSync : false

    },
    actionDelete: function(button) {

        var grid = this.getEmployeesGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getEmployeesStore();

        store.remove(record);
        //this.getEmployeesStore().sync();

        this.getEmployeesStore().load();
    },
    actionReset: function(button, e, options) {
        var win = button.up('window'),
        form = win.down('form');
        form.getForm().reset();
    },

    actionCancel: function(button, e, options) {

        var win = button.up('window'),
        form = win.down('form');
        form.getForm().reset();
        win.close();

    },
    actionSearch: function(button) {

        var win = button.up('window'),
        form = win.down('textfield'),
        grid = win.down('grid'),
        values = form.getSubmitValue();

        grid.getStore().load({params: {q: values}});

    },
});