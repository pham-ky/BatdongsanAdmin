import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-slibar',
  templateUrl: './slibar.component.html',
  styleUrls: ['./slibar.component.css']
})
export class SlibarComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.loadScripts();
  }
  
}