import {Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Rug } from "../shared/rug";
import {RugService} from "../services/rug.service";
import { Params, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {expand, flyInOut, visibility} from '../animations/app.animation';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-rugform',
  templateUrl: './rugform.component.html',
  styleUrls: ['./rugform.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    // visibility(),
    flyInOut(),
    expand()
  ]
})
export class RugformComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  rug: Rug;
  rugForm: FormGroup;

  formErrors = {
    'name': '',
    'description': '',
    'image': '',
    'price': ''
  };

  validationMessages = {

    'name': {
      'required':      'Rug Name is required.',
      'minlength':     'Rug Name must be at least 2 characters long.',
      'maxlength':     'Rug Name cannot be more than 60 characters long.'
    },
    'description': {
      'required':      'Description is required.'
    },
    'image': {
      'required':      'Image Path is required.'
    },
    'price': {
      'required':      'Price is required.',
      'pattern':      'Price of rug must be greater 0'
    }
  };

  constructor(public dialogRef: MatDialogRef<RugformComponent>, private rugService: RugService,
              private route: ActivatedRoute,private location: Location,
              private fb: FormBuilder, @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.rugForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      description: ['', [Validators.required]],
      image: [null, [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('(?:\\d*\\.)?\\d+')]]
    });
    this.rugForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.rugForm) { return; }
    const form = this.rugForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.rugForm.get('image').setValue(reader.result.split(',')[1])
      };
    }
  }

  onSubmit() {
    this.rug = this.rugForm.value;
    console.log(this.rug);
    this.rugService.createNewRug(this.rug);
    this.rugForm.reset({
      name: '',
      description: '',
      image: '',
      price: ''
    });
    this.dialogRef.close();
  }

}
