import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MyPageRoutingModule} from './my-page-routing.module';
import {MyPageComponent} from './my-page.component';

@NgModule({
  declarations: [MyPageComponent],
  imports: [
    SharedModule,
    MyPageRoutingModule
  ]
})
export class MyPageModule { }
