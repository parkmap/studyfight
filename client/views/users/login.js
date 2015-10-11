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

// bonus: get some additional profile info from facebook and cache on the user document
// Accounts.onCreateUser(function(options,user) {
//   check(options, Object);
//   check(user, Object);
//
//   options.profile.email = user.services.facebook.email;
//   options.profile.userName = user.services.facebook.id;
//   options.profile.facebookId = user.services.facebook.id;
//
//   user.profile = options.profile;
//
//   return user;
// });

// Template._loginButtonsLoggedInDropdown.events({
//     'click #login-buttons-edit-profile': function(event) {
//         // Router.go('profileEdit');
//     }
// });
