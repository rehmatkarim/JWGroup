import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderTopComponent } from './header-top/header-top.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  { path: '', component: HeaderTopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
