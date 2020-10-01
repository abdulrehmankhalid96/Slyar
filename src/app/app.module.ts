import { BrowserModule } from '@angular/platform-browser';

import { MDBSpinningPreloader } from '../../projects/ng-uikit-pro-standard/src/lib/pro/mdb-pro.module';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastService } from '../../projects/ng-uikit-pro-standard/src/lib/pro/alerts';
import { MDBBootstrapModulesPro } from '../../projects/ng-uikit-pro-standard/src/lib/mdb.module';
import { LogInComponent } from './log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './share/share.module';
import { InterceptorProviders } from './intercept.interceptor';

@NgModule({
  declarations: [AppComponent, LogInComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ShareModule,
  ],
  providers: [MDBSpinningPreloader, ToastService, InterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
