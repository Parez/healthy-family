import { NgModule } from '@angular/core';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { StepOneComponent } from './steps/step-one/step-one.component';
import { StepTwoComponent } from './steps/step-two/step-two.component';
import { StepThreeComponent } from './steps/step-three/step-three.component';
import { CompleteComponent } from './steps/complete/complete.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    BookingComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    CompleteComponent
  ],
  imports: [
    SharedModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
