import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHello } from './hello';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private httpClient: HttpClient) { }

  URL = 'http://localhost:3000/items'

  getItemById(id: number): Observable<IHello> {
    return this.httpClient.get<IHello>(`${this.URL}/${id}`);
  }

  getItems(count = 10): Observable<IHello[]> {
    return this.httpClient.get<IHello[]>(this.URL).pipe(
      map(data => data.filter((todo, i) => i < count))
    );
  }
}
