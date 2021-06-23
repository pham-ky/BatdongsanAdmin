import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlibarComponent } from './slibar/slibar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SlibarComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    SlibarComponent,
    NavbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
