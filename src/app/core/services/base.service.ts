import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected baseApiUrl: string = environment.BASE_API_URL;
  constructor(protected httpClient: HttpClient) {}
}
