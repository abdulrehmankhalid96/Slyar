import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmolpyeeModalComponent } from './add-emolpyee-modal/add-emolpyee-modal.component';

const routes: Routes = [
  {
    path: 'Modal',
    component: AddEmolpyeeModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareRoutingModule {}
