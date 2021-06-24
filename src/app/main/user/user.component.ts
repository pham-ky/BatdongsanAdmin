import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/lib/user.service';

declare let alertify: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loai: any;
  user: any;
  TK: any;
  MK: any;
  constructor(private _user: UserService) {
    this.loai = ['User', 'Admin']
  }

  selectedLoai: any;
  ngOnInit(): void {
    this.selectedLoai = 'User';
    this._user
      .Getloai(this.selectedLoai)
      .pipe(first())
      .subscribe(res => {
        this.user = res;
      })
  }

  GET() {
    this._user
      .Getloai(this.selectedLoai)
      .pipe(first())
      .subscribe(res => {
        this.user = res;
      })
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  addAdmin() {
    var adm = {
      TaiKhoan: this.TK,
      MatKhau: this.MK
    }
    this._user
      .add(adm)
      .pipe(first())
      .subscribe({
        next: (res) => {
          if (res > 0) {
            alertify.success("Thêm thành công!");
            this.display = false;
            this._user
              .Getloai(this.selectedLoai)
              .pipe(first())
              .subscribe(res => {
                this.user = res;
              })
          }
        },
        error: (err) => {
          console.log(err);
          alertify.error("Đã có lỗi");
        },
      });
  }

  change(id: any) {
    this._user
      .Change(id)
      .pipe(first())
      .subscribe({
        next: (res) => {
          if (res > 0) {
            alertify.success("Thay đổi thành công!");
            this._user
              .Getloai(this.selectedLoai)
              .pipe(first())
              .subscribe(res => {
                this.user = res;
              })
          }
        },
        error: (err) => {
          console.log(err);
          alertify.error("Đã có lỗi");
        },
      });
  }
}
