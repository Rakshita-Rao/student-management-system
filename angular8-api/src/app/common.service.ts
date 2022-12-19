import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public URL: any="http://localhost:8080/courses";
  constructor(private http:HttpClient) { }
  getCourses() {
    return this.http.get(this.URL)
  }

  getDropDownText(courseId: _.Dictionary<any> | _.NumericDictionary<any> | null | undefined, object: any){
    const selObj = _.filter(object, function (o) {
        return (_.includes(courseId,o.courseId));
    });
    return selObj;
  }
}
