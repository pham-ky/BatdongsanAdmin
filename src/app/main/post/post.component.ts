import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PostService } from '../../lib/post.service';
import { BaseComponent } from 'src/app/lib/base-component';

declare let alertify: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent extends BaseComponent implements OnInit {

  page: any;
  trangthai: any;
  list: any;
  totalItems: any;
  selectedTT: any;
  constructor(private _port: PostService,
    private injector: Injector) {
      super(injector);
    }

  ngOnInit(): void {
    this.page=1;
    this.selectedTT =1;

    this._route.params.subscribe(params => {
      this.trangthai = params['id'];
      this._port.postlist('/getTT', { page: this.page,  trangthai: this.trangthai })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;
        }, err => { });
    });
  }

  loadPage(page: any) {

    this._route.params.subscribe(params => {
      let id = params['id'];
      this._port.postlist('/getTT', { page: this.page,  trangthai: this.trangthai })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;
        }, err => { });
    });
  }

  Duyet(id: any): void{
    var post = {
      MaBaiDang: id,
      TrangThai: '2'
    }
    this._port
    .editTT(post)
    .pipe(first())
    .subscribe({next: (res) => {
      if (res > 0) {
        alertify.success("Đã duyệt!");
        this._route.params.subscribe(params => {
          this.trangthai = params['id'];
          this._port.postlist('/getTT', { page: this.page,  trangthai: this.trangthai })
            .subscribe(res => {
              this.list = res.data;
              this.totalItems = res.totalItems;
            }, err => { });
        });
      }
    },
    error: (err) => {
      console.log(err);
      alertify.error("Đã có lỗi");
    },
  });
  }
  KDuyet(id: any): void{
    var post = {
      MaBaiDang: id,
      TrangThai: '0'
    }
    this._port
    .editTT(post)
    .pipe(first())
    .subscribe({next: (res) => {
      if (res > 0) {
        alertify.success("Bài đăng sẽ không được  duyệt!");
        this._route.params.subscribe(params => {
          this.trangthai = params['id'];
          this._port.postlist('/getTT', { page: this.page,  trangthai: this.trangthai })
            .subscribe(res => {
              this.list = res.data;
              this.totalItems = res.totalItems;
            }, err => { });
        });
      }
    },
    error: (err) => {
      console.log(err);
      alertify.error("Đã có lỗi");
    },
  });
  }
}
