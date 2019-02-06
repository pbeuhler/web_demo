import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
// import { AuthorizerGuard } from './authorizer.guard';
import { CounterComponent } from './counter/counter.component'

const routes: Routes = [  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  // { path: 'dashboard', canActivate: [AuthorizerGuard], component: DashboardComponent },
  { path: 'counter', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
