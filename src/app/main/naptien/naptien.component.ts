import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../lib/user.service';
import { NaptienService } from '../../lib/naptien.service'

declare let alertify: any;
@Component({
  selector: 'app-naptien',
  templateUrl: './naptien.component.html',
  styleUrls: ['./naptien.component.css']
})
export class NaptienComponent implements OnInit {

  user: any;
  selectedId: any;
  inVal: any;
  hinhthuc: any;
  selectedHT: any;
  list: any;
  page: any;
  total: any;
  constructor(private _user: UserService,
    private _nap: NaptienService) {
    this.hinhthuc = ['Trực tiếp', 'Chuyển khoản']
  }

  ngOnInit(): void {

    this._user
      .getAll()
      .pipe(first())
      .subscribe(res => {
        this.user = res;
      })
    this.page = 1;
    this._nap.postlist('/ViewNap', { page: this.page })
      .subscribe(res => {
        this.list = res.data;
        for( var i = 0; i< this.list.length; i++){
          this.list[i].soTienNap = this.list[i].soTienNap.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
        this.total = res.totalItems
      })

      


  }
  loadPage(page: any) {
    this._nap.postlist('/ViewNap', { page: this.page })
      .subscribe(res => {
        this.list = res.data;
        for( var i = 0; i< this.list.length; i++){
          this.list[i].soTienNap = this.list[i].soTienNap.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
        this.total = res.totalItems
      })

  }

  Nap() {
    var res = {
      MaTk: this.selectedId.maTk,
      SoTienNap: this.inVal,
      HinhThuc: this.selectedHT
    }
    this._nap
      .Nap(res)
      .pipe(first())
      .subscribe({
        next: (res) => {
          if (res > 0) {
            alertify.success("Nạp tiền thành công!");
            this._nap.postlist('/ViewNap', { page: this.page })
              .subscribe(res => {
                this.list = res.data;
                for( var i = 0; i< this.list.length; i++){
                  this.list[i].soTienNap = this.list[i].soTienNap.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                }
                this.total = res.totalItems
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
