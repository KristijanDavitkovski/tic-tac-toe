import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: '<h1  style="margin-top: 35px;margin-left: 35px;"> {{ value}} </h1>',
  styles: ['']
})
export class SquareComponent  {

@Input() value: 'X' | 'O';

}
