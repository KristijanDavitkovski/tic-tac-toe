import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  broj: number;
  sec: number;
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    this.broj = 9;
    this.sec = 5;
  }
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx:number){
    if(!this.squares[idx]){
      this.squares.splice(idx,1,this.player);
      this.xIsNext = !this.xIsNext;
      this.broj = this.broj-1;
      console.log(this.broj);
    }
    this.winner = this.calculateWinner();
    if(this.winner||this.broj==0){setTimeout(()=>{
      this.newGame();
    },this.sec*1000);}
  }
  calculateWinner(){
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    for(let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(
        this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[a] == this.squares[c]
      ){
      console.log(this.squares[a]);
      return this.squares[a];
      }
    }
    return null;
  }
}
