import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.scss'],
})
export class EmpProfileComponent implements OnInit {
  constructor() {}
  @ViewChild('stepper', { static: false }) stepController: any;
  ngOnInit(): void {}
  public save = () => {
    window.scroll(0, 0);
    this.stepController.next();
    // this.stepController.resetAll();

    let y = document.getElementById('hidebtn');
    if (y) {
      y.click();
    }
  };
}
