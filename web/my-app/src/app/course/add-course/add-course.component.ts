import { Component, OnInit } from '@angular/core';
import {CourseServerService} from '../../service/course-server.service';
import {Course} from '../../../../../src/app/students/course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: any = {};
  constructor(private courseServerService:CourseServerService,private router: Router) { }

  ngOnInit() {
    this.course =new Course() ;
  }
  addCourse(course: Course) {
    let result: Course;
    console.log(course)
    this.courseServerService.addCourse(course)
      .subscribe(resultStudent => {
        result = resultStudent
        if (result != null) {
          this.router.navigate(['/listCourse']);
          alert('Success adding');
        } else {
          alert('Error in adding the student');
        }
      });
  }

}
