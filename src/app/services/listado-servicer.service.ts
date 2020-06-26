import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ListadoInterface } from '../models/listado-interface';
import { UserModel } from '../models/user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListadoServicerService {
  url = environment.urlServidorE;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Get students data
  getList(): Observable<ListadoInterface[]> {
    return this.http
      .get<ListadoInterface[]>(`${this.url}/listado`, this.httpOptions)
      .pipe(
        retry(2),
        map(res => res),
        catchError(this.handleError)
      );
  }

  getUser(user): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(`${this.url}/usuarios/${user}`, this.httpOptions)
      .pipe(
        retry(2),
        map(res => res),
        catchError(this.handleError)
      );
  }

  getEventById(id: number): Observable<ListadoInterface[]> {
    console.log(id);
    return this.http
      .get<ListadoInterface[]>(`${this.url}/getlistado/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        map(res => res),
        catchError(this.handleError)
      );
  }

  delEvent(id: number) {
    return this.http
    .delete(`${this.url}/listado/${id}`)
    .pipe(
      retry(2),
      map(re => re),
      catchError(this.handleError)
    );
  }

  addevent(evento: ListadoInterface) {
    const iJson = JSON.stringify(evento);
    return this.http
    .post(`${this.url}/listado`, iJson, this.httpOptions)
    .pipe(
      retry(2),
      map(res => res),
      catchError(this.handleError)
    );
  }

  editEvent(evento: ListadoInterface) {
    const iJson = JSON.stringify(evento);
    return this.http.put(`${this.url}/listado`, iJson, this.httpOptions)
    .pipe(
      retry(2),
      map(res => res),
      catchError(this.handleError)
    );
  }
}
