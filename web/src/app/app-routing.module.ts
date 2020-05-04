import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage, AuthGuard } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', loadChildren: './main/main.module#MainPageModule' },
  { path: 'login', component: LoginPage, data: { title: 'Bejelentkezés' } },
  { path: 'login/:routeTo', component: LoginPage, data: { title: 'Bejelentkezés' } },
  { path: 'device-add', loadChildren: './device/add/device-add.module#DeviceAddPageModule', canActivateChild: [AuthGuard] },
  { path: 'device-details', loadChildren: './device/details/device-details.module#DeviceDetailsPageModule', canActivateChild: [AuthGuard] },
  { path: 'patient-add', loadChildren: './patient/add/patient-add.module#PatientAddPageModule', canActivateChild: [AuthGuard] },
  { path: 'patient-details', loadChildren: './patient/details/patient-details.module#PatientDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'settings', loadChildren: './settings/page/settings.module#SettingsPageModule', canActivateChild: [AuthGuard] },
  {
    path: 'personal-info', loadChildren: './profile/page/profile.module#ProfilePageModule',
    canActivateChild: [AuthGuard]
  },
  { path: 'ch-email', loadChildren: './profile/lazies/lazy-ch-email.module#LazyCHEmailModule', canActivateChild: [AuthGuard] },
  { path: 'ch-password', loadChildren: './profile/lazies/lazy-ch-password.module#LazyCHPasswordModule', canActivateChild: [AuthGuard] },
  {
    path: '**',
    redirectTo: 'main'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
