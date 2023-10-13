import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { SharedState } from '../../store/shared.reducers';
import { AuthStoreModel } from '../../models/authStoreModel';
import { logout } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  selectedLanguage!: string;
  authState!: AuthStoreModel;
  constructor(
    private translateService: TranslateService,
    private store: Store<SharedState>
  ) {}

  ngOnInit() {
    this.store
      .select((s) => s.auth)
      .subscribe((response) => {
        this.authState = response;
      });
    this.getSelectedLanguage();
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(logout());
  }
  private getSelectedLanguage() {
    this.selectedLanguage =
      this.translateService.currentLang ||
      this.translateService.defaultLang ||
      'tr';
  }

  selectLanguage(code: string) {
    this.translateService.use(code);
    this.getSelectedLanguage();
  }
}
