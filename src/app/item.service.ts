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

  URL = 'http://localhost:3001'

  getItemById(id: number): Observable<IItem> {
    return this.httpClient.get<IItem>(`${this.URL}/${id}`);
  }

  getItems(count = 10): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>(this.URL).pipe(
      map(data => data.filter((todo, i) => i < count))
    );
  }

  createItem(item: IItem): Observable<IItem> {
    return this.httpClient.post<IItem>(this.URL, item);
  }

  updateItem(id: number, item: IItem): Observable<IItem> {
    return this.httpClient.put<IItem>(`${this.URL}/${id}`, item)
  }

  deleteItem(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.URL}/${id}`);
  }
}
