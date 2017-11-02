import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'course-list',
  templateUrl: 'app/students/course-list/course-list.component.html',
  styleUrls: ['app/students/course-list/course-list.component.css']
})
export class CourseListComponent implements OnInit{
  constructor() {
  }

@Input() count:number;
@Input('enrolledCourse') courses:Course;
  ngOnInit() {
  }
}
