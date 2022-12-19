import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ApiResponse } from 'src/app/model/api.response';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  courseId!: number;
  course!: Course;
  apiResponse!: ApiResponse;

  constructor(private router:Router,private courseService:CourseService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.course = new Course();
    this.courseId = this.route.snapshot.params['courseId'];
    console.log(this.courseId);
    this.courseService.getCourseById(this.courseId)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.courseService.updateCourse(this.courseId, this.course)
      .subscribe(data => console.log(data), error => console.log(error));
    this.course = new Course();
    this.router.navigate(['/courses']);
    }
  list(){
    this.router.navigate(['courses']);
  }

}
