import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './features/calendar/calendar/calendar.component';
import { LoginMainComponent } from './features/login/pages/login-main/login-main.component';
import { LoginRegisterComponent } from './features/login/pages/login-register/login-register.component';
import { TodoHomeComponent } from './features/todo/pages/todo-home/todo-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: TodoHomeComponent},
  {path: 'profile', component: LoginMainComponent},
  {path: 'register', component: LoginRegisterComponent},
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
