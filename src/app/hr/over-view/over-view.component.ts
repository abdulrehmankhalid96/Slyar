import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { AddEmolpyeeModalComponent } from 'src/app/share/add-emolpyee-modal/add-emolpyee-modal.component';
@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss'],
})
export class OverViewComponent implements OnInit {
  constructor(public service: DataService, public router: Router) {}
  @ViewChild(AddEmolpyeeModalComponent) addEmployee: AddEmolpyeeModalComponent;
  ngOnInit(): void {
    this.getList();
  }
  // <-- Variable section --> //
  public listData: any;
  public pagerList: any = [5, 20, 50, 100];
  public loading = true;

  // <-- Function section --> //

  public getList = () => {
    this.loading = true;
    this.service.getOverView().subscribe((res: any) => {
      this.listData = res;
      this.loading = false;
      console.log(res);
    });
  };

  public toRouter(link: any) {
    this.router.navigate([link]);
  }
}
