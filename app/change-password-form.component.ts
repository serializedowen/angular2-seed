import {FormBuilder, Validators, ControlGroup, Control} from 'angular2/common'
import {Component} from 'angular2/core';
import {PasswordValidators} from './passwordValidators';

@Component ({
    selector: 'password-form',
    templateUrl: 'app/change-password-form.compomnent.html'
})



export class ChangePasswordFormComponent{
    passwordForm: ControlGroup;

    constructor(fb: FormBuilder){
        this.passwordForm = fb.group({
            oldPassword: ['aer', Validators.required],
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required]},
            { validator: PasswordValidators.passwordsShouldMatch });
    }


    changePassword(){
        var oldPass = this.passwordForm.find('oldPassword');

        if (oldPass.value != 12345){
            oldPass.setErrors({WrongPassword: true});
        }
    }
}