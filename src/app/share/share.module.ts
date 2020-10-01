import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ToastModule, ToastService } from '/projects/ng-uikit-pro-standard/src/lib/pro/alerts';
// import { MDBBootstrapModulesPro } from '../../projects/ng-uikit-pro-standard/src/lib/mdb.module';
import { ShareRoutingModule } from './share-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MDBBootstrapModulesPro } from 'projects/ng-uikit-pro-standard/src/public_api';
import { LoaderComponent } from './loader/loader.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AddEmolpyeeModalComponent } from './add-emolpyee-modal/add-emolpyee-modal.component';
@NgModule({
  declarations: [LayoutComponent, LoaderComponent, AddEmolpyeeModalComponent],
  imports: [CommonModule, ShareRoutingModule, MDBBootstrapModulesPro, NgxLoadingModule.forRoot({})],

  exports: [LayoutComponent, LoaderComponent, AddEmolpyeeModalComponent],
})
export class ShareModule {}
