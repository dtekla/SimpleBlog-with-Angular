import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PageComponent} from "./page/page.component";
import {TermsComponent} from "./terms/terms.component";


const routes:Routes = [
  {path: 'contact', loadChildren: () => import ('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'page', component: PageComponent},
  {path: 'terms-conditions', component: TermsComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
