import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { FamilyListComponent } from './components/family-list/family-list.component';
import { FamilyListItemComponent } from './components/family-list-item/family-list-item.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './services/auth.service';
import {FamilyService} from './services/family.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    FamilyListComponent,
    FamilyListItemComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    FamilyService,
    AuthService,
    AngularFireAuthGuard,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
