import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {TaskModule} from "./task/task.module";
import {TokenInterceptor} from "./auth/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        TaskModule
    ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS, //interceptor
          useClass: TokenInterceptor, //classe TokenInterceptor vai ser utilizada com interceptor da aplicação
          multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
