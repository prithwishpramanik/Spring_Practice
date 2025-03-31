package com.example.practice.registrationBackend.Repo;

import com.example.practice.registrationBackend.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Integer> {
}
