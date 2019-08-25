import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cab } from '../models/Cab';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CabsService {
  private cabUrl = environment.cab;

  constructor(
    private http: HttpClient
  ) { }
  getCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>(this.cabUrl )
  }
    save(cab: Cab) {
      return this.http.post<Cab>(this.cabUrl, cab, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
    }
}
