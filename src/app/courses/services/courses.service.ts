import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Courses } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}
  list(): Courses[] {
    return [
      {
        _id: '1', name: 'angular', category: `frontend`
      }
    ]
  }
}
