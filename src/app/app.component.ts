import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from './lib/base-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit{
  title = 'BatdongsanAdmin';
  constructor(injector: Injector){
    super(injector);
  }
  ngOnInit(){

  }

  ngAfterViewInit() {
    this.loadScripts();
  }
}
