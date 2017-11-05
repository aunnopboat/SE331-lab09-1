import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers,Response} from '@angular/http';
import {Course} from '../students/course';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseServerService {

  constructor(private http: Http) { }
  getCoursesData() {
    let CourseArray: Course[];
    return this.http.get('http://localhost:8080/Course')
      .map(res => res.json());
  }
  addCourse(course: Course):Observable<Course> {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'post'});
        let body = JSON.stringify(course);
        return this.http.post('http://localhost:8080/Course', body, options)
          .map(res => {
            return res.json()
          })
      }


}

