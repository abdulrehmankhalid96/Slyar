import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { OverViewComponent } from './over-view/over-view.component';
import { ShareModule } from '../share/share.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { CostComponent } from './cost/cost.component';
import { SettingComponent } from './setting/setting.component';

// MDB Angular Pro
import {
  ModalModule,
  StepperModule,
  WavesModule,
  InputsModule,
  ButtonsModule,
  DatepickerModule,
  CardsModule,
} from 'ng-uikit-pro-standard';
import { TimePickerModule } from 'ng-uikit-pro-standard';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { TimeSheetFormComponent } from './time-sheet-form/time-sheet-form.component';
import { EmployCostFormComponent } from './employ-cost-form/employ-cost-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbdDropdownBasic } from './dropdown-basic';
@NgModule({
  declarations: [
    OverViewComponent,
    AddEmployeeComponent,
    TimeSheetComponent,
    CostComponent,
    SettingComponent,
    EmpProfileComponent,
    TimeSheetFormComponent,
    EmployCostFormComponent,
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    ShareModule,
    ButtonsModule,
    InputsModule,
    WavesModule,
    StepperModule,
    ModalModule.forRoot(),
    DatepickerModule,
    CardsModule,
    TimePickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  schemas: [NO_ERRORS_SCHEMA],
})
export class HrModule {}
