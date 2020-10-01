import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CostComponent } from './cost/cost.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { OverViewComponent } from './over-view/over-view.component';
import { SettingComponent } from './setting/setting.component';
import { TimeSheetFormComponent } from './time-sheet-form/time-sheet-form.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

const routes: Routes = [
  {
    path: 'OverView',
    component: OverViewComponent,
  },
  {
    path: 'AddEmploye',
    component: AddEmployeeComponent,
  },
  {
    path: 'TimeSheet',
    component: TimeSheetComponent,
  },
  {
    path: 'Cost&fin',
    component: CostComponent,
  },
  {
    path: 'EmpProfile',
    component: EmpProfileComponent,
  },
  {
    path: 'Setting',
    component: SettingComponent,
  },
  {
    path: 'timeSheetForm',
    component: TimeSheetFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
