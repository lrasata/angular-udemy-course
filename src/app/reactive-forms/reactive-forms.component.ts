import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  projectStatusOptions = ['Stable', 'Critical', 'Finished'];
  forbiddenprojectNames = ['Test', 'Toto'];
  signupProjectForm = new FormGroup({
    'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)],
        this.asyncInvalidProjectName),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'projectStatus': new FormControl('Stable'),
  });;

  constructor() { }

  onSubmit() {
    console.log(this.signupProjectForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} | null {
    if (this.forbiddenprojectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  asyncInvalidProjectName(control: AbstractControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000);
    })
    return promise;
  }

}
