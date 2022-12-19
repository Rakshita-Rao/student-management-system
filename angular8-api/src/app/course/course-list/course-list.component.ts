import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:any;
  constructor(private courseService:CourseService,private router:Router) { 
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
      });
    },2000);
  }

  ngOnInit(): void {
    this.courses=this.courseService.getCourses();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
      });
    },2000);
  }
  deleteCourse(couseId:number)
  {
    this.courseService.deleteCourse(couseId)
    .subscribe(
      data=>{
        console.log(data);
        this.courses=this.courseService.getCourses();
      },
      error=>console.log(error));
  }
  updateCourse(courseId:number)
  {
    this.router.navigate(['update_course',courseId]);
  }

}
