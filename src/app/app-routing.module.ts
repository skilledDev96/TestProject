import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailingComponent } from './mailing/mailing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mailing', component: MailingComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //WildCard must go last
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
