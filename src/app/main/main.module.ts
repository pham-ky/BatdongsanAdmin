import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { StatisticalPostComponent } from './statistical-post/statistical-post.component';
import { StatisticalNapComponent } from './statistical-nap/statistical-nap.component';
import { StatisticalViewComponent } from './statistical-view/statistical-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {EditorModule} from 'primeng/editor';
import { NaptienComponent } from './naptien/naptien.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { NewsComponent } from './news/news.component';
export const mainRoute: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo:'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'statistical-post',
        component: StatisticalPostComponent,
      },
      {
        path: 'statistical-nap',
        component: StatisticalNapComponent,
      },
      {
        path: 'statistical-view',
        component: StatisticalViewComponent,
      },
      {
        path: 'naptien',
        component: NaptienComponent,
      },
      {
        path: 'post/:id',
        component: PostComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    StatisticalPostComponent,
    StatisticalNapComponent,
    StatisticalViewComponent,
    NaptienComponent,
    PostComponent,
    UserComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgApexchartsModule,
    HttpClientModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DialogModule,
    EditorModule,
    RouterModule.forChild(mainRoute),
  ]
})
export class MainModule { }
