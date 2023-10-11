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
    private toastrService: ToastrService
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
      },
      (error) => {
        this.toastrService.error('Kullanıcı adı ya da şifre yanlış..');
      }
    );
  }
}
