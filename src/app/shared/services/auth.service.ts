import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenResponse } from '../models/tokenResponse';
import { LoginRequest } from '../models/loginRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private controllerUrl: string = environment.BASE_API_URL + 'auth';
  constructor(private httpClient: HttpClient) {}

  login(request: LoginRequest): Observable<TokenResponse> {
    return this.httpClient.post<TokenResponse>(this.controllerUrl, request);
  }
}
