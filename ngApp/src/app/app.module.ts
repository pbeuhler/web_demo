import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CounterService } from './counter.service';
import { AuthGuard } from './auth.guard';
import { MaterialModule } from './material/material.module';
import {TokenInterceptorService } from './token-interceptor.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LoginComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NoopAnimationsModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    CounterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
