import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-logincomponent',
  // templateUrl: './logincomponent.component.html',
  template: `
  {{profileForm.value | json}}
  <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <input #user formControlName='username'type="text"/><br/>
  <input #user1 formControlName='username'type="text"/><br/>
  <input #password formControlName='password' type="password"/>
  <br/>
  <button type="submit" [disabled]="!profileForm.valid">Submit</button>
  </form>
  `,
  styleUrls: ['./logincomponent.component.sass']
})
export class LogincomponentComponent implements OnInit {
  profileForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  } ) ;
  constructor() {}
  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
