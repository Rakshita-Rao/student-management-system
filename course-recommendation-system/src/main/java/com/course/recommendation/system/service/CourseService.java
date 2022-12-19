package com.course.recommendation.system.service;

import java.util.ArrayList;
import java.util.List;

import com.course.recommendation.system.model.Courses;
import com.course.recommendation.system.repository.CourseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
	@Autowired
	CourseRepository coursesRepository;

	public List<Courses> findAllCourses() {
		List<Courses> courses = new ArrayList<Courses>();
		coursesRepository.findAll().forEach(courses1 -> courses.add(courses1));
		return courses;
	}

	public Courses findCourseById(int courseId) {
		return coursesRepository.findById(courseId).get();
	}

	public void saveOrUpdate(Courses courses) {
		coursesRepository.save(courses);
	}

	public void update(Courses courses, int courseId) {
		coursesRepository.save(courses);
	}

	public void deleteById(int courseId) {
		coursesRepository.deleteById(courseId);
	}

	public Courses save(Courses courses) {
		return coursesRepository.save(courses);
	}
}