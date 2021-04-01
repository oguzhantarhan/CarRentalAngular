import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/ListResponseModel';
import { Color } from '../models/color';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44311/api/colors/';
  constructor(private httpClient: HttpClient) { }
  getColor():Observable<ListResponseModel<Color>> {
   return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl+"getall");
  }
}
