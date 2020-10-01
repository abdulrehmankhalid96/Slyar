import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-emolpyee-modal',
  templateUrl: './add-emolpyee-modal.component.html',
  styleUrls: ['./add-emolpyee-modal.component.scss'],
})
export class AddEmolpyeeModalComponent implements OnInit {
  constructor() {}
  @ViewChild('basicModal', { static: false }) public modalHuck: any;
  @ViewChild('stepper', { static: false }) stepController: any;
  ngOnInit(): void {}

  public showModal = () => {
    this.modalHuck.show();
    let x = document.getElementById('firstfield');
    if (x) {
      console.log(x);
      x.focus();
    }
  };
  public save = () => {
    this.stepController.resetAll();

    let y = document.getElementById('hidebtn');
    if (y) {
      y.click();
    }
  };
}
