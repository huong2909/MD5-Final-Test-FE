import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../model/tour";
const API_URL = 'http://localhost:3000/tuors'
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Tour[]> {
    return this.httpClient.get<Tour[]>(API_URL);
  }
  save(tour: any): Observable<Tour> {
    return this.httpClient.post<Tour>(API_URL, tour);
  }
  getById(id: any): Observable<Tour> {
    return  this.httpClient.get<Tour>(API_URL + `/${id}`);
  }
  delete(id: any): Observable<Tour> {
    return this.httpClient.delete<Tour>(API_URL + `/${id}`);
  }
  update(id: number, tour: Tour): Observable<Tour> {
    return this.httpClient.put<Tour>(`${API_URL}/${id}`, tour);
  }
}
