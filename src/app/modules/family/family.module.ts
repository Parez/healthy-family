import { NgModule } from '@angular/core';
import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [FamilyComponent],
  imports: [
    SharedModule,
    FamilyRoutingModule
  ]
})
export class FamilyModule { }
