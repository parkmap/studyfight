Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'userName',
        fieldLabel: 'User Name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
         if (!value) {
           errorFunction("Please write your user name");
           return false;
         } else {
           return true;
         }
       }
    }]
});
