import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInComponent } from './sign_in/sign-in.component';
import { LogInComponent } from './log_in/log-in.component';
import { ExplorePageComponent } from './explore_page/explore-page.component';

@NgModule({
  declarations: [
    AppComponent
  , HomepageComponent, SignInComponent, SignInComponent, LogInComponent, ExplorePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
