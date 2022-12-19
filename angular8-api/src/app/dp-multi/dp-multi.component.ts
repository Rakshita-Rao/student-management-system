import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-dp-multi',
  templateUrl: './dp-multi.component.html',
  styleUrls: ['./dp-multi.component.css']
})
export class DpMultiComponent implements OnInit {
  courses:any;
  constructor(private courseService:CourseService,private router:Router) { 
    setTimeout(function(){
      $(function(){
        $('example').DataTable({
          paging: false,
          ordering: false,
          info: false,
      });
      });
    },2000);
  }

  ngOnInit(): void {
    this.courses=this.courseService.getCourses();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable({
          searching:true
        });
      });
    },2000);
  }

}
