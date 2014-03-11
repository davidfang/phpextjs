Ext.define('PHPExtJS.view.Employees._form', {
    //extend: 'Ext.form.Panel', //use this code for panel form
    extend: 'Ext.window.Window',
    alias: 'widget.employeesForm',
    requires: ['Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.ux.DataTip',
        'Ext.data.*'
    ],
    title: 'PHPExtJS - Form Employees',
    layout: 'fit',
    autoShow: true,
    width: 600,
    height: 400,
    iconCls: 'bogus',
    initComponent: function() {

        this.items = [
            {
                xtype: 'form',
                bodyPadding: '10 10 0 10',
                border: false,
                style: 'background-color: #fff;',
                autoScroll: true,
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side',
                    labelWidth: 200,
                },
                items: [
                    {
                        xtype: 'fieldset',
                        title: '<b>EMPLOYEES</b>',
                        collapsible: false,
                        layout: 'anchor',
                        items: [
                             
                            {
                                xtype: 'textfield',
                                fieldLabel: 'ID',
                                name: 'id',
                                 
                                hidden:true,
                                                                
                            },
                             
                            {
                                xtype: 'textfield',
                                fieldLabel: 'BIRTH_DATE',
                                name: 'birth_date',
                                                                
                            },
                             
                            {
                                xtype: 'textfield',
                                fieldLabel: 'FIRST_NAME',
                                name: 'first_name',
                                                                
                            },
                             
                            {
                                xtype: 'textfield',
                                fieldLabel: 'LAST_NAME',
                                name: 'last_name',
                                                                
                            },
                             
                            {
                                xtype: 'textfield',
                                fieldLabel: 'GENDER',
                                name: 'gender',
                                                                
                            },
                             
                            {
                                xtype: 'textfield',
                                fieldLabel: 'HIRE_DATE',
                                name: 'hire_date',
                                                                
                            },
                                                     
                        ],
                    }],
            }];

        this.dockedItems = [{
                xtype: 'toolbar',
                dock: 'bottom',
                id: 'buttons',
                ui: 'footer',
                items: ['->', {
                        iconCls: 'icon-save',
                        text: 'Save',
                        action: 'save'
                    }, {
                        iconCls: 'icon-reset',
                        text: 'Cancel',
                        action: 'cancel'
                    },]
            }];

        this.callParent(arguments);


    }
});


