import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-logincomponent',
  // templateUrl: './logincomponent.component.html',
  template: `
  <form [formGroup]="registerForm"  (ngSubmit)="onSubmit()">
  {{registerForm.value|json}}
  <br/>
  <input type="text"  formControlName="userName"/>
  <br/>
  <input type="password"  formControlName="passWord"/>
  </form>
  `,
  styleUrls: ['./logincomponent.component.sass']
})



export class LogincomponentComponent implements OnInit {
  registerForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl('')
  });
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}
