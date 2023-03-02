import { Injectable } from '@angular/core';
import { Iusersstructure } from 'src/assets/data/usersstructure';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersdataServiceService {
  private url: string = '../assets/data/users.json';

  constructor(private _http: HttpClient) { }

  getUser(): Observable<Iusersstructure[]> {
    return this._http.get<Iusersstructure[]>(this.url); 
  }
}
