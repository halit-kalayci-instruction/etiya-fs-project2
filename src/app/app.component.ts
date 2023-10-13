import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { SharedState } from './shared/store/shared.reducers';
import { JwtHelperService } from '@auth0/angular-jwt';
import { login } from './shared/store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'etiya-fs-project';

  constructor(
    private store: Store<SharedState>,
    private jwtService: JwtHelperService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      const decodedToken = this.jwtService.decodeToken();
      this.store.dispatch(
        login({
          username: decodedToken['sub'],
          expirationDate: new Date(decodedToken['exp'] * 1000),
        })
      );
    }
  }
}
