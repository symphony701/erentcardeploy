import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Favorite} from "../app/common/model/favorite";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class FavoriteService {
  //basePath = 'http://localhost:3000/Users';
  // basePath='https://server-sergio.herokuapp.com/';
  //basePath = 'http://localhost:8115/api/v1/favorites';
  basePath = 'https://cars-erentcar.azurewebsites.net/api/v1/favorites';
  //basePath = 'https://easyjobsbackend.herokuapp.com/api/v1/postulants';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError('Something happened with request, please try again later');
  }
  getByClient(id:number){
    // return this.http.get<any>(`${this.basePath}/?id=${id}`, this.httpOptions)api/v1/
    return this.http.get<any>(`${this.basePath}/client/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  create(clientId:number,carId:number){
    return this.http.post<any>(`${this.basePath}/client/${clientId}/car/${carId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  delete(favoriteId:number){
    return this.http.delete<any>(`${this.basePath}/${favoriteId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

}
