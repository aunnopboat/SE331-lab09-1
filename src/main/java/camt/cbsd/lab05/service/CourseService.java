package camt.cbsd.lab05.service;

import camt.cbsd.lab05.entity.Course;
import camt.cbsd.lab05.entity.Student;

import java.util.List;

public interface CourseService {
    List<Course> getCourses();
    Course addCourse(Course course);
}
