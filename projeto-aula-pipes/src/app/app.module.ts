import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './features/products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { TodoHomeComponent } from './features/todo/todo-home/todo-home.component';
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
registerLocaleData(localePt); 

@NgModule({
  declarations: [
    AppComponent,
    TodoHomeComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    LoginModule
  ],
  providers: [
    {
       provide: LOCALE_ID, 
       useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
