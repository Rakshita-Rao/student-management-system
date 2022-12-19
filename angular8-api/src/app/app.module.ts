import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from './service/course.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { DpMultiComponent } from './dp-multi/dp-multi.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    CourseListComponent,
    DpMultiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
