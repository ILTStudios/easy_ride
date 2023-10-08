import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogInComponent } from './log_in/log-in.component';
import { SignInComponent } from './sign_in/sign-in.component';
import { ExplorePageComponent } from './explore_page/explore-page.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: LogInComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'explore', 
    component: ExplorePageComponent, 
    canActivate:[AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }