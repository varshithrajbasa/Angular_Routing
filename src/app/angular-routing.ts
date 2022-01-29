import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EditComponent } from './edit/edit.component';
import { HelloComponent } from './hello.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'home', component: HelloComponent },
  { path: 'profile', component: ProfileComponent,
    children: [
      {
        path: 'edit', 
        component: EditComponent,
      },
      {
        path: 'settings', 
        component: SettingsComponent,
      }
    ],
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }