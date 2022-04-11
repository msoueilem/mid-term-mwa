import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Grade } from './grades/grades.component';

@Injectable({
  providedIn: 'root'
})
export class GradesDataService {
  baseUrl:string = "localhost:3000"

  constructor(private http:HttpClient) { 
    
  }
  public getGrades() : Observable<Grade[]> {
    return this.http.get<Grade[]>(this.baseUrl+"/grades")
  }
  public getGrade(gradeId:string) : Observable<Grade> {
    return this.http.get<Grade>(this.baseUrl+"/grades/"+gradeId)
  }
}
