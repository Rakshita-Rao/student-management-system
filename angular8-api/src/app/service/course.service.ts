import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course.model';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) { }
  private baseUrl: string ='http://localhost:8080';

  getCourses() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'/courses');
  }

  getCourseById(courseId: number): Observable<any> {
    return this.http.get(this.baseUrl +'/course/'+ courseId);
  }

  getCourseByName(courseName: string): Observable<any> {
    return this.http.get(this.baseUrl +'/course/'+ courseName);
  }

  createCourse(course: Course): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'/register_course', course);
  }

  updateCourse(courseId: number, course: Course): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl +'/update_course/'+ course.courseId, course);
  }

  deleteCourse(courseId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl+'/course/'+courseId);
  }
}