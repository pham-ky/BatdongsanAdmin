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
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    StatisticalPostComponent,
    StatisticalNapComponent,
    StatisticalViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgApexchartsModule,
    HttpClientModule,
    RouterModule.forChild(mainRoute),
  ]
})
export class MainModule { }
