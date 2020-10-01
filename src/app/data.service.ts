import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public http: HttpClient) {}
  // <-- Variable Section --> //
  public baseUrl = environment.baseUrl;
  public isLoading = false;
  public isLoadingObs: Subject<any> = new Subject();

  // <-- function section --> //
  public getOverView = (): Observable<any[]> => {
    return this.http.get<any[]>(this.baseUrl + '/employees');
  };
}
