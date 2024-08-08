import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  // Update the URL in your Angular component to fix the typo
 private apiUrl = 'http://localhost:8000/predictPurchased';
 // Update with your FastAPI server address

  constructor(private http: HttpClient) {}

  predictPurchased(age: number, estimatedSalary: number, gender: number): Observable<any> {
    const apiUrl = 'http://localhost:8000';
    const url = `${apiUrl}/predictPurchased?Age=${age}&EstimatedSalary=${estimatedSalary}&Gender=${gender}`;
    console.log('API URL:', this.apiUrl);
    return this.http.get(url);
  }
}
