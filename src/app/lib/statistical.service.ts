import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError as observableThrowError } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root'
})
export class StatisticalService {

    private API_URL = 'https://localhost:44365/api/Statistical';
    constructor(private readonly http: HttpClient, public router: Router) { }
    GetPost() {
        const url = `${this.API_URL}/Post`;
        return this.http.get(url);
    }
    GetView(x: any){
        const url = `${this.API_URL}/View/${x}`;
        return this.http.get(url);
    }
    GetNap(){
        const url = `${this.API_URL}/Nap`;
        return this.http.get(url);
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