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
  constructor(private _statistical: StatisticalService) { }

  ngOnInit(): void {
    this.x = 10;
    this._statistical
    .GetView(this.x)
    .pipe(first())
    .subscribe((res)=>{
      this.post = res;
      console.log(res);
      
    })
  }

}
