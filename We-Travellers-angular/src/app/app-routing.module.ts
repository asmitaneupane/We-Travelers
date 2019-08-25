import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CabRegisterComponent } from './cab-register/cab-register.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlaceToVisitComponent } from './place-to-visit/place-to-visit.component';
import { GuidesComponent } from './guides/guides.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path: 'place-to-visit',
    component: PlaceToVisitComponent

  },
  {
    path: 'guides',
    component:GuidesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cab-register',
    component: CabRegisterComponent
  },
  {
    path: 'cab-booking',
    component: CabBookingComponent
  },
  // { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
