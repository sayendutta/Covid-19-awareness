import { AuthGuard} from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { 
    path: 'members', 
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  //{ path: 'payment', loadChildren: './public/payment/payment.module#PaymentPageModule' },
  { path: 'forgotpassword', loadChildren: './public/forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
  { path: 'home', loadChildren: './public/home/home.module#HomePageModule' },
  { path: 'slides', loadChildren: './public/slides/slides.module#SlidesPageModule' },
  //{ path: 'slider', loadChildren: './public/slider/slider.module#SliderPageModule' },
  //{ path: 'tabs', loadChildren: './public/tabs/tabs.module#TabsPageModule' },
 // { path: 'mainmenu', loadChildren: './public/mainmenu/mainmenu.module#MainmenuPageModule' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }