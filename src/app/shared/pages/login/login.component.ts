import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { SharedState } from '../../store/shared.reducers';
import { JwtHelperService } from '@auth0/angular-jwt';
import { login } from '../../store/auth/auth.actions';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
    private store: Store<SharedState>,
    private jwtService: JwtHelperService
  ) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/');
        this.toastrService.success('Giriş başarılı');

        let decodedToken = this.jwtService.decodeToken(response.token);
        let user = {
          username: decodedToken['sub'],
          expirationDate: new Date(decodedToken['exp']),
        };
        this.store.dispatch(login(user));
      },
      (error) => {
        this.toastrService.error('Kullanıcı adı ya da şifre yanlış..');
      }
    );
  }
}
// 2:30
