import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:5217/api/RepairTickets';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl, {
      headers: this.getHeaders()
    });
  }

  getItemById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  createItem(item: any) {
    return this.http.post<Item>(this.apiUrl, item, {
      headers: this.getHeaders()
    });
  }

  updateItem(id: number, item: any) {
    return this.http.put<Item>(`${this.apiUrl}/${id}`, item, {
      headers: this.getHeaders()
    });
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
}