import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Courses[];
  displayedColumns: string[] = ['name', 'category']

  constructor() {
    this.courses = [
      {
        _id: '1', name: 'angular', category: `frontend`
      }
    ]
  }

  ngOnInit(): void {}
}
