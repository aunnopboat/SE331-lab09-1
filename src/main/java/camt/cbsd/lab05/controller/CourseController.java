package camt.cbsd.lab05.controller;

import camt.cbsd.lab05.entity.Course;
import camt.cbsd.lab05.entity.Student;
import camt.cbsd.lab05.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {
    CourseService courseService;

    @Autowired
    public void setStudentService(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/Course")
    public ResponseEntity<?> getCourses() {

        List<Course> courses = courseService.getCourses();
        return ResponseEntity.ok(courses);
    }
    @PostMapping("/Course")
    public ResponseEntity<?> uploadOnlyCourse(@RequestBody Course course) {
        courseService.addCourse(course);
        return ResponseEntity.ok(course);
    }

}
