import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss'],
})
export class CostComponent implements OnInit {
  constructor() {}
  public time: any;
  element: HTMLElement;
  ngOnInit(): void {}
  timer() {
    this.element = document.getElementById('input_starttime') as HTMLElement;
    console.log(this.element);
    debugger;
    this.element.click();
    if (this.element) {
    }
  }
}
