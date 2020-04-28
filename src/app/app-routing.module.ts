import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './component/users/users.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { PlaceholderComponent } from './component/placeholder/placeholder.component';
import { AuthGuard } from './guards/auth/auth.guard';


const appRoutes: Routes = [
  {path:'home',component:HomeComponent },
  {path:'blog',component:BlogComponent, canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent},
  {path:'users',component:UsersComponent, 
   canActivateChild:[AuthGuard],
  children:[ //http://localhost:4200//users/1
    {path:':userid', component:UserDetailsComponent}
   // {path:'', component:PlaceholderComponent}
  ]},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
 providers:[AuthGuard],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
