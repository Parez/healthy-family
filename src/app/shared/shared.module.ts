import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VisitItemComponent } from './components/visit-item/visit-item.component';

@NgModule({
  declarations: [VisitItemComponent],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
