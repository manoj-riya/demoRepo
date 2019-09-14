import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.createFrom();
  }

  createFrom() {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  saveForm(data) {
    console.log(data);
    this.registrationForm.reset();
  }

  cancelForm() {
    this.registrationForm.reset();
  }



}
