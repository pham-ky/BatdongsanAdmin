import { Component, OnInit } from '@angular/core';
import { UserService } from '../lib/user.service';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { first } from 'rxjs/operators';
export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.password === v.confirmPassword
    ? null
    : {
      passwordnotmatch: true,
    };
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup|any;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onLogin() {
    var userLogin = {
      TaiKhoan: this.formLogin.get('username').value,
      MatKhau: this.formLogin.get('password').value,
    };
    this.userService
      .login(userLogin)
      .pipe(first())
      .subscribe(
        (user) => {
          if (user == null) {
            alert("Đăng nhập thất bại       . · ´ ¯ `(>▂<)´ ¯ ` · . ");

            this.clearFormLogin();
          } else {

            setTimeout(() => {
              this.router.navigateByUrl('/dashboard');
            }, 1000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  clearFormLogin() {
    this.formLogin.reset();
  }
}

