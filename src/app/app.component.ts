import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { SharedState } from './shared/store/shared.reducers';
import { JwtHelperService } from '@auth0/angular-jwt';
import { login } from './shared/store/auth/auth.actions';
import { Router, RoutesRecognized } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private store: Store<SharedState>,
    private jwtService: JwtHelperService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content: 'this page is etiya page',
    });
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        let routeData = event.state.root?.firstChild?.data;
        if (routeData && routeData['title'])
          this.title.setTitle(routeData['title']);
        else this.title.setTitle('Etiya');
      }
    });
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
