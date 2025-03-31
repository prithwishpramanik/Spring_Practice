package com.example.practice.registrationBackend.Repo;

import com.example.practice.registrationBackend.Model.State;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StateRepo extends JpaRepository<State,Integer> {
}
