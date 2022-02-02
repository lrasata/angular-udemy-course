import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css']
})
export class TdFormsComponent {
    @ViewChild('tdforms', { static: false }) signupForm: NgForm | undefined;
    emailDefault = 'emailaddress@test.com';
    defaultSub = 'basic';
    passwordDefault = 'mypassword';
    submitted = false;
    user = {
        email : '',
        subscription : '',
        password: ''
    };

    onSubmit(): void {
        this.submitted = true;
        this.user.email = this.signupForm?.value.userData.email;
        this.user.subscription = this.signupForm?.value.userData.subscriptions;
        this.user.password = this.signupForm?.value.userData.password;

    }

}