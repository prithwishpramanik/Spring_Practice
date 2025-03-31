package com.example.practice.registrationBackend.Service;

import com.example.practice.registrationBackend.Model.State;
import com.example.practice.registrationBackend.Model.Student;
import com.example.practice.registrationBackend.Repo.StateRepo;
import com.example.practice.registrationBackend.Repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class registrationservice {

    @Autowired
    private StateRepo States;

    @Autowired
    private StudentRepo StudRepo;

    public List<State> stateName() {
        return States.findAll();
    }


    public Student registerStud(Student stud) {
        return  StudRepo.save(stud);
    }
}
