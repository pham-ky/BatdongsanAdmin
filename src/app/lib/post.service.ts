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
export class PostService {
  private API_URL = 'https://localhost:44365/api/BaiDang';
  constructor(private readonly http: HttpClient, public router: Router) { }
  editTT(product: any): Observable<number> {
    const url = `${this.API_URL}/editTT`;
    var body = JSON.stringify(product);
    return this.http.post<any>(url, body, httpOptions);
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