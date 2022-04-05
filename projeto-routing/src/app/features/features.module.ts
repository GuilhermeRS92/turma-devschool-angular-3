import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './login/pages/login-main/login-main.component';
import { LoginRegisterComponent } from './login/pages/login-register/login-register.component';
import { TodoHomeComponent } from './todo/pages/todo-home/todo-home.component';
import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { TodoComponent } from './todo/components/todo/todo.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginMainComponent,
    LoginRegisterComponent,
    TodoHomeComponent,
    TodoListComponent,
    TodoComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
})
export class FeaturesModule { }
