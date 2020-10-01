import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, public service: DataService) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.service.isLoading = true;
      this.service.isLoadingObs.next(this.service.isLoading);
    }
    if (event instanceof NavigationEnd) {
      this.service.isLoading = false;
      this.service.isLoadingObs.next(this.service.isLoading);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.service.isLoading = false;
      this.service.isLoadingObs.next(this.service.isLoading);
    }
    if (event instanceof NavigationError) {
      this.service.isLoading = false;
      this.service.isLoadingObs.next(this.service.isLoading);
    }
  }
}
