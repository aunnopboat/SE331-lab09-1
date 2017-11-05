package camt.cbsd.lab05.service;

import camt.cbsd.lab05.dao.CourseDao;
import camt.cbsd.lab05.dao.StudentDao;
import camt.cbsd.lab05.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import java.util.List;
@ConfigurationProperties(prefix = "server")
@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    CourseDao courseDao;
    public List<Course> getCourses(){

        return courseDao.getCourses();
    }

    @Override
    public Course addCourse(Course course) {
        return courseDao.addCourse(course);
    }
}
