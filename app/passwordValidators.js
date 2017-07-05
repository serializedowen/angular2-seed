System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.minimumLength = function (control) {
                    if (control.value.length < 5) {
                        return { minimumLength: true };
                    }
                    else {
                        return null;
                    }
                };
                PasswordValidators.passwordsShouldMatch = function (group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmPassword = group.find('confirmPassword').value;
                    // If either of these fields is empty, the validation 
                    // will be bypassed. We expect the required validator to be 
                    // applied first. 
                    if (newPassword == '' || confirmPassword == '')
                        return null;
                    if (newPassword != confirmPassword)
                        return { passwordsShouldMatch: true };
                    return null;
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map