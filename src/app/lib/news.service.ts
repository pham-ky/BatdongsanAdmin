import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private API_URL = 'https://localhost:44365/api/TinTuc';
  constructor(private readonly http: HttpClient, public router: Router) { }
  addNews(news: any): Observable<number> {
    const url = `${this.API_URL}/addNew`;
    var body = JSON.stringify(news);
    return this.http.post<any>(url, body, httpOptions);
  }
  updateNews(id: any, news: any): Observable<number> {
    const url = `${this.API_URL}/editNew/${id}`;
    var body = JSON.stringify(news);
    return this.http.put<any>(url, body, httpOptions);
  }
  delete(id: any) {
    const url = `${this.API_URL}/deleteTT/${id}`;
    return this.http.delete<any>(url);
  }
  detail(id: any){
    const url = `${this.API_URL}/getDetail/${id}`;
    return this.http.get<any>(url);
  }
  postlist(url: string, obj: any) {
    const body = JSON.stringify(obj);
    let cloneHeader: any = {};
    cloneHeader['Content-Type'] = 'application/json';
    const headerOptions = new HttpHeaders(cloneHeader);
    return this.http
      .post<any>(this.API_URL + url, body, { headers: headerOptions })
      .pipe(
        map((res: any) => {
          let json = res;
          return json;
        })
      )
      .pipe(
        catchError((err: Response) => {
          return this.handleError(err);
        })
      );
  }
  public handleError(error: any) {
    this.router.navigate(['/err']);
    return observableThrowError(error);
  }
}
