import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/lib/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  constructor(private _user: UserService, private router: Router) { }

  ngOnInit(): void {
    this._user.admin$.subscribe((res)=> {
      this.user = res;
      
    })
  }

  logout(){
    this._user.logout();
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 1000);
  }
}