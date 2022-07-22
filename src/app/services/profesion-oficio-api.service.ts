import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesionOficioApiService {

  urlMicroServicio: string = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }


  getMethod(): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = { headers: headers };
    let url = this.urlMicroServicio + ``;
    return this.http.get<any>(url, options).pipe(retry(1), catchError(this.handleError));
  }

  getMethodById(id:any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = { headers: headers };
    let url = this.urlMicroServicio + `?id=${id}`;
    return this.http.get<any>(url, options).pipe(retry(1), catchError(this.handleError));
  }


  postMethod(body: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = { headers: headers };
    let url = this.urlMicroServicio + ``;
    return this.http.post<any>(url, body, options).pipe(retry(1), catchError(this.handleError));
  }

  putMethod(body: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = { headers: headers };
    let url = this.urlMicroServicio + ``;
    return this.http.put<any>(url, body, options).pipe(retry(1), catchError(this.handleError));
  }

  deteteMethod(id: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = { headers: headers };
    let url = this.urlMicroServicio + `/${id}`;
    return this.http.put<any>(url, options).pipe(retry(1), catchError(this.handleError));
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
