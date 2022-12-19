import { Course } from "src/app/model/course.model";
import { CourseService } from "src/app/service/course.service";
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})

export class CreateCourseComponent implements OnInit {
course:Course=new Course();
submitted= false;

constructor(private courseService:CourseService,private router:Router) { }

onSubmit() {
this.submitted=true;
this.courseService.createCourse(this.course).subscribe(
data=>console.log(data),error=>console.log(error));
this.course=new Course();
this.router.navigate(['/courses']);
}
  ngOnInit(): void {
  }

}
