import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../students/course';
import {CourseServerService} from '../../service/course-server.service';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: Course[];

  constructor(private courseServerService:CourseServerService) { }

  ngOnInit() {
    this.courseServerService.getCoursesData()
      .subscribe(courses => this.courses = courses);
  }

}
