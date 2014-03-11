Ext.define('PHPExtJS.model.Employees', {
extend: 'Ext.data.Model',
fields: [
        {name: 'id', type: 'string'},
            {name: 'birth_date', type: 'string'},
            {name: 'first_name', type: 'string'},
            {name: 'last_name', type: 'string'},
            {name: 'gender', type: 'string'},
            {name: 'hire_date', type: 'string'},
    ]
});