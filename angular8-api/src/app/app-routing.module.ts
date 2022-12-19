import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { DpMultiComponent } from './dp-multi/dp-multi.component';

const routes: Routes = [
  {path:'',redirectTo:'course',pathMatch:'full'},
  {path:'add',component:CreateCourseComponent},
  {path:'courses',component:CourseListComponent},
  {path:'update_course/:courseId',component:UpdateCourseComponent},
  {path:'example/multi-dropdown',component:DpMultiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
