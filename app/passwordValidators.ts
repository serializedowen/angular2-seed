import {Control, ControlGroup} from 'angular2/common'

export class PasswordValidators{
    static minimumLength(control: Control){


        if (control.value.length < 5){
            return { minimumLength: true }
        } else{
            return null;
        }
    }

    static passwordsShouldMatch(group: ControlGroup){
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
    }
}