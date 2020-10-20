import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator} from '@angular/forms';
import {Feedback, ContactType} from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType= ContactType;

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email:'',
      agree:false,
      contactType:'none',
      message:''
    });
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    this.feedbackForm.reset();
  }

}
