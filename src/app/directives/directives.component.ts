import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showDetails = false;
  log: number[] = [];
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetails(): void {
    this.showDetails = !this.showDetails;
    this.count +=1;
    this.log.push(this.count);
  }

}
