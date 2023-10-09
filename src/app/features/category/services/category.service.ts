import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllCategoryModel } from '../models/getAllCategoryModel';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private controllerUrl: string = environment.BASE_API_URL + 'categories';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GetAllCategoryModel[]> {
    return this.httpClient.get<GetAllCategoryModel[]>(this.controllerUrl);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.controllerUrl + '/' + id);
  }
}
