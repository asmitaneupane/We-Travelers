import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userUrl = environment.user;
  constructor( 
    private http: HttpClient
    ) 
 
  { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl )
  }
    save(user: User) {
      return this.http.post<User>(this.userUrl, user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
    }
    
  }

