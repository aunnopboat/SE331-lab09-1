package camt.cbsd.lab05.dao;

import camt.cbsd.lab05.entity.Course;

import java.util.List;

public interface CourseDao {
    List<Course> getCourses();
    Course addCourse(Course course);
}
