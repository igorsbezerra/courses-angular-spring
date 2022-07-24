package dev.igor.crudcoursesspring.controller;

import dev.igor.crudcoursesspring.model.Course;
import dev.igor.crudcoursesspring.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CoursesController {

    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> hello() {
        return courseRepository.findAll();
    }
}
