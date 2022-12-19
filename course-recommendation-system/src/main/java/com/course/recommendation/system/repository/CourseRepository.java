package com.course.recommendation.system.repository;
import java.util.List;

import com.course.recommendation.system.model.Courses;

import org.springframework.data.repository.CrudRepository;
public interface CourseRepository extends CrudRepository<Courses, Integer>
{
	 List<Courses> findByCourseName(String courseName);
}
