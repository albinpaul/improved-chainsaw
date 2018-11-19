import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-logincomponent',
  // templateUrl: './logincomponent.component.html',
  template: `
  <span *ngFor="let hero of Heros;index as i" >{{i%5 == 0}} {{hero}}
  </span>
  <br *ngIf="i%5 == 4"/>
  `,
  styleUrls: ['./logincomponent.component.sass']
})



export class LogincomponentComponent implements OnInit {
  Heros: string[] = [];
  constructor() { }
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  ngOnInit() {
    for ( let i = 1 ; i <= 25 ; i++ ) {
      this.Heros.push(i.toString());
    }
    this.Heros = this.shuffle(this.Heros);
  }
}
