import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptorFn } from './interceptors/http.interceptor'; 
import { ProgressBarService } from './services/progress-bar.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([httpInterceptorFn])
    ),
    ProgressBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
