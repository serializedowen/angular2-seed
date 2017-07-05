System.register(['angular2/common', 'angular2/core', './passwordValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, passwordValidators_1;
    var ChangePasswordFormComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            }],
        execute: function() {
            ChangePasswordFormComponent = (function () {
                function ChangePasswordFormComponent(fb) {
                    this.passwordForm = fb.group({
                        oldPassword: ['aer', common_1.Validators.required],
                        newPassword: ['', common_1.Validators.required],
                        confirmPassword: ['', common_1.Validators.required] }, { validator: passwordValidators_1.PasswordValidators.passwordsShouldMatch });
                }
                ChangePasswordFormComponent.prototype.changePassword = function () {
                    var oldPass = this.passwordForm.find('oldPassword');
                    if (oldPass.value != 12345) {
                        oldPass.setErrors({ WrongPassword: true });
                    }
                };
                ChangePasswordFormComponent = __decorate([
                    core_1.Component({
                        selector: 'password-form',
                        templateUrl: 'app/change-password-form.compomnent.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePasswordFormComponent);
                return ChangePasswordFormComponent;
            }());
            exports_1("ChangePasswordFormComponent", ChangePasswordFormComponent);
        }
    }
});
//# sourceMappingURL=change-password-form.component.js.map