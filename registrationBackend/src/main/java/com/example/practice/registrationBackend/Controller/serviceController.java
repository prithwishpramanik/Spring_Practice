package com.example.practice.registrationBackend.Controller;


import com.example.practice.registrationBackend.Model.State;
import com.example.practice.registrationBackend.Model.Student;
import com.example.practice.registrationBackend.Service.registrationservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/examRegistrationPortal")
@CrossOrigin
public class serviceController {

    @Autowired
    private registrationservice RegState;

    @GetMapping("/getState")
    public ResponseEntity<List<State>> getStates()
    {
        return new  ResponseEntity<>(RegState.stateName(),HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?>postStudents(@RequestBody Student stud)
    {
               Student savedStud = null;
               try {
                   savedStud = RegState.registerStud(stud);
                   return new ResponseEntity<>(savedStud, HttpStatus.OK);
               } catch (Exception e) {
                   return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);               }
    }

}
