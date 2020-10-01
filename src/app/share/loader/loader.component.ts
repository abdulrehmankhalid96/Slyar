import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.load();
  }
  public loading = this.service.isLoading;
  public load() {
    this.loading = this.service.isLoading;
    this.service.isLoadingObs.subscribe((res) => {
      this.loading = res;
    });
  }
}
