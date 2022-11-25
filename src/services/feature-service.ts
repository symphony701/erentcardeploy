import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class FeatureService {
  //basePath = 'http://localhost:3000/Users';
  // basePath='https://server-sergio.herokuapp.com/';
 // basePath = 'http://localhost:8105/api/v1/features';
  basePath = ' https://cars-erentcar.azurewebsites.net/api/v1/features';
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

  postFeature(carId:number,data:any){
    return this.http.post<any>(`${this.basePath}/car/${carId}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  /*getAll(){
    return this.http.get<any>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  getById(id:number){
    // return this.http.get<any>(`${this.basePath}/?id=${id}`, this.httpOptions)api/v1/
    return this.http.get<any>(`${this.basePath}usuario/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  editProfile(data:any){
    return this.http.patch<User>(`${this.basePath}editUser`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  signIn(data:any){
    return this.http.post<User>(`${this.basePath}/auth/sign-in`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  login(email:string,password:string){
    return this.http.get<any>(`${this.basePath}login/${email}/${password}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  register(data:any){
    return this.http.post<User>(`${this.basePath}addUser`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }*/
}
