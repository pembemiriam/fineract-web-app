import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-createclosure',
  templateUrl: './createclosure.component.html',
  styleUrls: ['./createclosure.component.css']
})
export class CreateclosureComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  form: FormGroup;                    
  constructor(
    private fb: FormBuilder  
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      date: ['', Validators.required],
      comment: ['']
    });
  }
}
