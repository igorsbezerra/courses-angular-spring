import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Courses[];
  displayedColumns: string[] = ['name', 'category']

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {}
}
