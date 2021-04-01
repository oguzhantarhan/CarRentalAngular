import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44311/api/rentals/';
  constructor(private httpClient: HttpClient) { }
  getRental():Observable<ListResponseModel<Rental>> {
   return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"getrentaldetails");
  }
}
