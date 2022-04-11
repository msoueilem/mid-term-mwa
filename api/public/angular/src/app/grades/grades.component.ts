import { Component, OnInit } from '@angular/core';
import { GradesDataService } from '../grades-data.service';

export class Grade {
  #_id!: string;
  #student_id!: number;
  #scores!: Scores[];
  #class_id!: number;
  get _id() {return this.#_id}
  get student_id() {return this.#student_id}
  get scores() {return this.#scores}
  get class_id() {return this.#class_id}
  constructor(){

  }
}

export class Scores {
  #_id!:string
  #type!:string
  #score!:number 
  get _id() {return this.#_id}
  get type() {return this.#type}
  get score() {return this.#score}
  constructor(){}
}

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades:Grade[] =[]
  constructor(private gradeservice:GradesDataService) { }

  ngOnInit(): void {
    this.gradeservice.getGrades().subscribe({
      next: res => this.grades = res,
      error: err => console.log(err),
      complete: () => console.log("Grades fetched")
      
    })
  }

}
