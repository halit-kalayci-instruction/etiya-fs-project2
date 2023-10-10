import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  selectedLanguage!: string;
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.getSelectedLanguage();
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
