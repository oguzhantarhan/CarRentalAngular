import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/ListResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44311/api/cars/';
  constructor(private httpClient: HttpClient) { }
  getCar():Observable<ListResponseModel<Car>> {
   return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"getcardetails");
  }
}
