import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { StatisticalService } from '../../lib/statistical.service';

@Component({
  selector: 'app-statistical-view',
  templateUrl: './statistical-view.component.html',
  styleUrls: ['./statistical-view.component.css']
})
export class StatisticalViewComponent implements OnInit {

  post: any;
  x: any;
  top: Number[]|any;
  page: any;
  constructor(private _statistical: StatisticalService) {
    this.top=[5,10,20,50]
   }

  ngOnInit(): void {
    this.page=1;
    this.x = 10;
    this._statistical
    .GetView(this.x)
    .pipe(first())
    .subscribe((res)=>{
      this.post = res;
    })
  }
  select(){
    this._statistical.postlist('/View', { page: this.page, total: this.x})
      .subscribe(res => {
        this.post = res.data;
      })
  }
  loadPage(page:any){
    this._statistical.postlist('/View', { page: this.page, total: this.x})
      .subscribe(res => {
        this.post = res.data;
      })

  }

}
