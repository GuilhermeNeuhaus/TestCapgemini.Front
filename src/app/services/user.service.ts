import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "Usuario";
  private urlLocal = "https://localhost:7115/api";

  constructor(private http: HttpClient) { }

  public getUserAll() : Observable<User[]> {
    return this.http.get<User[]>(`${this.urlLocal}/${this.url}`);
  }

  public updateUser(user: User) : Observable<User[]> {
    return this.http.put<User[]>(
      `${this.urlLocal}/${this.url}`, 
      user
      );
  }

  public createUser(user: User) : Observable<User[]> {
    return this.http.post<User[]>(
      `${this.urlLocal}/${this.url}`, 
      user
      );
  }

  public deleteUser(user: User) : Observable<User[]> {
    return this.http.delete<User[]>(
      `${this.urlLocal}/${this.url}/${user.id}`
      );
  }
}
