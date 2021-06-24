import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { StatisticalService } from '../../lib/statistical.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { BaseComponent } from 'src/app/lib/base-component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-statistical-nap',
  templateUrl: './statistical-nap.component.html',
  styleUrls: ['./statistical-nap.component.css']
})
export class StatisticalNapComponent extends BaseComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  a: any; 
  b: any; 
  c: any; 
  d: any; 
  e: any; 

  totalMoney: any;

  month0: any;
  month1: any;
  month2: any;
  month3: any;
  month4: any;
  key: any;
  value: any;
  statistical: any;
  thang: any;
  constructor(private _statistical: StatisticalService, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._statistical.GetNap().subscribe((res) => {

      this.value = Object.values(res);

      this.a = this.value[0][0];
      this.b = this.value[0][1];
      this.c = this.value[0][2];
      this.d = this.value[0][3];
      this.e = this.value[0][4];

      this.totalMoney = this.value[1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
      this.chartOptions = {
        series: [
          {
            name: "Số tiền được nạp",
            data: [this.a, this.b, this.c, this.d, this.e]
          },
        ],
        chart: {
          height: 450,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {

          type: "datetime",

          categories: [
            this.month4,
            this.month3,
            this.month2,
            this.month1,
            this.month0
          ]
        },
        tooltip: {
          x: {
            format: "MM/yyyy"
          }
        }
      };

    })

    var d = new Date();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear()
    var months = new Array("Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec");

    this.thang = [curr_month + 1] + "-" + curr_year;
    switch (curr_month) {
      case 0:
        this.month4 = months[curr_month + 8] + "-" + (curr_year - 1);
        this.month3 = months[curr_month + 9] + "-" + (curr_year - 1);
        this.month2 = months[curr_month + 10] + "-" + (curr_year - 1);
        this.month1 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 1:
        this.month4 = months[curr_month + 9] + "-" + (curr_year - 1);
        this.month3 = months[curr_month + 10] + "-" + (curr_year - 1);
        this.month2 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 2:
        this.month4 = months[curr_month + 10] + "-" + (curr_year - 1);
        this.month3 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 3:
        this.month4 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 4:
        this.month4 = months[curr_month - 3] + "-" + curr_year;
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 5:
        this.month4 = months[curr_month - 3] + "-" + curr_year;
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 6:
        this.month4 = months[curr_month - 3] + "-" + curr_year;
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 7:
        this.month4 = months[curr_month - 3] + "-" + curr_year;
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 8:
        this.month4 = months[curr_month - 3] + "-" + curr_year;
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 9:
        this.month4 = months[curr_month - 3] + "-" + curr_year;
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 10:
        this.month4 = months[curr_month - 3] + "-" + curr_year;
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;
      case 11:
        this.month4 = months[curr_month - 3] + "-" + curr_year;
        this.month3 = months[curr_month - 2] + "-" + curr_year;
        this.month2 = months[curr_month - 1] + "-" + curr_year;
        this.month1 = months[curr_month] + "-" + curr_year;
        this.month0 = months[curr_month + 1] + "-" + curr_year;
        break;

      default:
        break;
    }
  }
  ngAfterViewInit() {
    this.loadScripts();
  }
}