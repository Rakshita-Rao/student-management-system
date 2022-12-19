package com.course.recommendation.system.controller;

import java.util.List;

import com.course.recommendation.system.model.Courses;
import com.course.recommendation.system.service.CourseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class CourseController {

	@Autowired
	CourseService courseService;

	@GetMapping("/courses")
	private List<Courses> getAllCourses() {
		return courseService.findAllCourses();
	}
	
	@GetMapping("/course/{courseId}")
    public ResponseEntity<Courses> getCourseById(@PathVariable(value = "courseId") int courseId)
             {
		Courses courses = courseService.findCourseById(courseId);               
        return ResponseEntity.ok().body(courses);
    }

	@PostMapping("/register_course")
	private String registerCourse(@RequestBody Courses courses) {
		courseService.saveOrUpdate(courses);
		return "Hi"+" your course registration process successfully completed";
	}

	@PutMapping("/update_course/{courseId}")
    public ResponseEntity<Courses> updateCourse(@PathVariable(value = "courseId") Integer courseId,
                                                   @RequestBody Courses courses)  {
        Courses course = courseService.findCourseById(courseId);

        course.setCourseName(courses.getCourseName());
        course.setShortDescription(courses.getShortDescription());
        course.setUrl(courses.getUrl());
       

        final Courses updatedCourse = courseService.save(courses);
        return ResponseEntity.ok(updatedCourse);
	}


	@DeleteMapping("/course/{courseId}")
	private List<Courses> cancelCourseRegistration(@PathVariable("courseId") int courseId) {
		courseService.deleteById(courseId);
		return courseService.findAllCourses();
	}
}
