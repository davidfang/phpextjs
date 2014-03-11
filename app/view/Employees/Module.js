Ext.define('PHPExtJS.view.Employees.Module', {
    extend: 'Ext.ux.desktop.Module',
	
    requires: [
        'PHPExtJS.view.Employees._form',
        'PHPExtJS.view.Employees._grid',    
    ],
    
    init : function(){
        this.launcher = {
            text: 'Employees',
            iconCls:'bogus'
        }
    },
    
    employees : function(src){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('employees');
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        if(!win){
            win = desktop.createWindow({
                id: 'employees',
                title:'Employees',
                width: '800',
                height: '600',
                border: false,
                iconCls: 'bogus',
                animCollapse:false,
                constrainHeader:true, 
                hideMode: 'offsets',
                layout: {
                        type: 'fit',
                        align: 'stretch'  // Child items are stretched to full width
                },
                items:[{
                        id: 'onEmployeesGrid',
                        xtype: 'employeesForm'
                }]
            });
        }
        win.show();
        return win;
    },
            
});

