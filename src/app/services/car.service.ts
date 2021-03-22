import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44311/api/cars/getcardetails';
  constructor(private httpClient: HttpClient) { }
  getCar():Observable<CarResponseModel> {
   return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
