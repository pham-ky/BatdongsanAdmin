import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first, map } from 'rxjs/operators';

const httpOptions = {
  method: 'POST',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'https://localhost:44365/api/User';
  private adminLogin = new BehaviorSubject({});
  public admin$ = this.adminLogin.asObservable();
  constructor(private readonly http: HttpClient) {
    let local_storage = JSON.parse(localStorage.getItem('admin') || '{}');
    if (!local_storage) {
      local_storage = {};
    }
    this.adminLogin.next(local_storage);
  }
  public get adminValue(): any {
    return this.adminLogin.value;
  }
  login(login: any): Observable<any> {
    const url = `${this.API_URL}/LoginAdmin`;
    var log = JSON.stringify(login);
    return this.http.post<any>(url, log, httpOptions).pipe(
      map((admin) => {
        localStorage.setItem('admin', JSON.stringify(admin));
        this.adminLogin.next(admin);
        return admin;
      })
    );
  }
  logout() {
    localStorage.removeItem('admin');
    this.adminLogin.next('');
  }
  getAll() {
    const url = `${this.API_URL}/GetAllUser`;
    return this.http.get(url);
  }
  Getloai(x: any) {
    const url = `${this.API_URL}/getLoai/${x}`;
    return this.http.get(url);
  }
  add(adm: any): Observable<number> {
    const url = `${this.API_URL}/addAdmin`;
    var body = JSON.stringify(adm);
    return this.http.post<any>(url, body, httpOptions);
  }
  
  Change(x: any) {
    const url = `${this.API_URL}/TrangThai/${x}`;
    return this.http.get(url);
  }
}