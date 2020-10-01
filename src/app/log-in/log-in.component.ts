import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  sigin() {
    this.router.navigate(['/hr/OverView']);
  }
}
