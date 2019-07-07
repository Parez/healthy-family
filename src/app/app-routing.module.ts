import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {AppLayoutComponent} from './components/app-layout/app-layout.component';

const redirectUnauthorizedToLogin = redirectUnauthorizedTo(['login']);
const redirectLoggedInToProfile = redirectLoggedInTo(['app']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './modules/auth/auth.module#AuthModule',
    ...canActivate(redirectLoggedInToProfile)
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    ...canActivate(redirectUnauthorizedToLogin),
    children: [
      {
        path: '',
        redirectTo: 'me',
        pathMatch: 'full'
      },
      {
        path: 'me',
        loadChildren: './modules/my-page/my-page.module#MyPageModule',
      },
      {
        path: 'family',
        loadChildren: './modules/family/family.module#FamilyModule'
      },
      {
        path: 'booking/:userId',
        loadChildren: './modules/booking/booking.module#BookingModule',
      },
      {
        path: 'profile',
        loadChildren: './modules/profile/profile.module#ProfileModule'
      },
      {
        path: 'help',
        loadChildren: './modules/help/help.module#HelpModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
