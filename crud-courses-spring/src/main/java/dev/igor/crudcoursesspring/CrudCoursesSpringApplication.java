package dev.igor.crudcoursesspring;

import dev.igor.crudcoursesspring.model.Course;
import dev.igor.crudcoursesspring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudCoursesSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudCoursesSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular");
			c.setCategory("front-end");

			courseRepository.save(c);
		};
	}

}
