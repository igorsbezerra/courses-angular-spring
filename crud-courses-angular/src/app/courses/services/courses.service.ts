import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Courses } from '../models/courses';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Courses[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(courses => console.log(courses))
      );
  }

  save(record: Courses) {
    return this.httpClient.post<Courses>(this.API, record).pipe(first());
  }
}
