import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IItem } from './IItem';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  URL = 'http://localhost:3000/items'

  getItemById(id: number): Observable<IItem> {
    return this.httpClient.get<IItem>(`${this.URL}/${id}`);
  }

  getItems(count = 10): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>(this.URL).pipe(
      map(data => data.filter((todo, i) => i < count))
    );
  }
}
