import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllCategoryModel } from '../models/getAllCategoryModel';
import { GetCategoryModel } from '../models/getCategoryModel';
import { AddCategoryModel } from '../models/addCategoryModel';
import { UpdateCategoryRequest } from '../models/updateCategoryRequest';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private controllerUrl: string = environment.BASE_API_URL + 'categories';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GetAllCategoryModel[]> {
    return this.httpClient.get<GetAllCategoryModel[]>(this.controllerUrl);
  }
  getById(id: number): Observable<GetCategoryModel> {
    return this.httpClient.get<GetCategoryModel>(this.controllerUrl + '/' + id);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.controllerUrl + '/' + id);
  }
  add(request: AddCategoryModel) {
    return this.httpClient.post(this.controllerUrl, request);
  }
  update(request: UpdateCategoryRequest) {
    return this.httpClient.put(this.controllerUrl, request);
  }
}
