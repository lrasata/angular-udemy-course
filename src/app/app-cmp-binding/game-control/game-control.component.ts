import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  interval: any;
  oddNumberList : number[] = [];
  evenNumberList : number[] = [];


  
  constructor() { }

  ngOnInit(): void {
  }

  startCounting(): void {
      this.interval = setInterval(() => {
        this.counter += 1;
        if (this.counter % 2 == 0) {
          this.evenNumberList.push(this.counter);
        } else {
          this.oddNumberList.push(this.counter);
        }
    }, 1000);
  }

  stopCounting(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
