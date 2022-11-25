import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Reservation} from "../app/common/model/reservation";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class RatingClientService {
  //basePath = 'http://localhost:3000/Users';
  // basePath='https://server-sergio.herokuapp.com/';
  //basePath = 'http://localhost:8615/api/v1/rents';
  // basePath = 'http://localhost:8615/api/v1/ratingClients';
  basePath = 'https://ratings-erentcar.azurewebsites.net/api/v1/ratingClients';
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

  getByClient(client:number){
    // return this.http.get<any>(`${this.basePath}/?id=${id}`, this.httpOptions)api/v1/
    return this.http.get<any>(`${this.basePath}/client/${client}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  postRatingClient(clientId:number,ownerId:number,data:any) {
    return this.http.post<any>(`${this.basePath}/client/${clientId}/owner/${ownerId}`, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
