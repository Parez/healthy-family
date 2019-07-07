import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookingComponent} from './booking.component';
import {StepOneComponent} from './steps/step-one/step-one.component';
import {StepTwoComponent} from './steps/step-two/step-two.component';
import {CompleteComponent} from './steps/complete/complete.component';
import {StepThreeComponent} from './steps/step-three/step-three.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'step1'},
      {
        path: 'step1',
        component: StepOneComponent
      },
      {
        path: 'step2',
        component: StepTwoComponent
      },
      {
        path: 'step3',
        component: StepThreeComponent
      },
      {
        path: 'complete',
        component: CompleteComponent
      }
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
