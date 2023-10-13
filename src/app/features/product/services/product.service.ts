import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment';
import { GetAllProductModel } from '../models/getAllProductModel';
import { GetProductModel } from '../models/getProductModel';
import { AddProductModel } from '../models/addProductModel';
import { UpdateProductModel } from '../models/updateProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  private controllerUrl: string = this.baseApiUrl + 'products';

  getAll(): Observable<GetAllProductModel[]> {
    return this.httpClient.get<GetAllProductModel[]>(this.controllerUrl);
  }

  getById(id: number): Observable<GetProductModel> {
    return this.httpClient.get<GetProductModel>(this.controllerUrl + '/' + id);
  }

  add(request: AddProductModel): Observable<GetProductModel> {
    return this.httpClient.post<GetProductModel>(this.controllerUrl, request);
  }

  update(request: UpdateProductModel): Observable<GetProductModel> {
    return this.httpClient.put<GetProductModel>(this.controllerUrl, request);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.controllerUrl + '/' + id);
  }
}
