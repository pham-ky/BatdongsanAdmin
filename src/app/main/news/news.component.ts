import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { NewsService } from '../../lib/news.service';

declare let alertify: any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class NewsComponent implements OnInit {

  tieude: any;
  public text: string | any;
  list: any;
  page: any;
  total: any;
  detail: any;
  constructor(private _news: NewsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,) { }

  ngOnInit(): void {
    this.page = 1;
    this._news.postlist('/getNews', { page: this.page })
      .subscribe(res => {
        this.list = res.data;
        this.total = res.totalItems;
      })
  }
  loadPage(page: any) {
    this._news.postlist('/getNews', { page: this.page })
      .subscribe(res => {
        this.list = res.data;
        this.total = res.totalItems;
      })

  }
  displayAdd: boolean = false;
  displayView: boolean = false;
  displayEdit: boolean = false;
  showAdd() {
    this.tieude = "";
    this.text = "";
    this.displayAdd = true;
  }
  add() {
    var news = {
      TieuDe: this.tieude,
      NoiDung: this.text
    }
    this._news
      .addNews(news)
      .pipe(first())
      .subscribe({
        next: (res) => {
          if (res > 0) {
            alertify.success("Thêm tin thành công!");
            this.displayAdd = false;
            this.tieude = "";
            this.text = "";
            this.loadPage(1);
          }
        },
        error: (err) => {
          console.log(err);
          alertify.error("Đã có lỗi");
        },
      });
  }
  View(id: any) {
    this.displayView = true;
    this._news
      .detail(id)
      .pipe(first())
      .subscribe(res => {
        this.detail = res;
      })
  }
  Edit(id: any) {
    this.displayEdit = true;
    this._news
      .detail(id)
      .pipe(first())
      .subscribe(res => {
        this.detail = res;
        this.tieude = res.tieuDe;
        this.text = res.noiDung;
      })
  }
  save(id:any){
    var news = {
      TieuDe: this.tieude,
      NoiDung: this.text
    }
    this._news
      .updateNews(id,news)
      .pipe(first())
      .subscribe({
        next: (res) => {
          if (res > 0) {
            alertify.success("Cập nhật thành công!");
            this.displayEdit = false;
            this.tieude = "";
            this.text = "";
            this.loadPage(1);
          }
        },
        error: (err) => {
          console.log(err);
          alertify.error("Đã có lỗi");
        },
      });
  }
  delete(id: any) {
    this.confirmationService.confirm({
      header: 'Xoá tin tức?',
      message: 'Bạn có chắc chắn xoá ?',
      accept: () => {
        this._news.delete(id).pipe(first())
          .subscribe((res) => {
            //console.log(res);
            if (res > 0) {
              alertify.success("Xóa thành công");
              this.loadPage(1);
            }
          },

          );

      }
    })
  }

}
