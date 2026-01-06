import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { 
  CONTACT_TITLE, 
  CONTACT_SUBTITLE, 
  FORM_FIELDS,
  SUCCESS_MESSAGE, 
  ERROR_MESSAGE, 
  CLOSE_BUTTON_TEXT, 
  SUBMIT_BUTTON_TEXT,
  ERROR_MESSAGES 
} from '../constants/contacts.constants';

@Component({
  selector: 'app-contacts',
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  contactForm: FormGroup;
  
  contactTitle = CONTACT_TITLE;
  contactSubtitle = CONTACT_SUBTITLE;
  formFields = FORM_FIELDS;
  submitButtonText = SUBMIT_BUTTON_TEXT;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(FORM_FIELDS.name.minLength)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(FORM_FIELDS.message.minLength)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      
      this.snackBar.open(SUCCESS_MESSAGE, CLOSE_BUTTON_TEXT, {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      
      this.contactForm.reset();
    } else {
      this.snackBar.open(ERROR_MESSAGE, CLOSE_BUTTON_TEXT, {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);
    if (control?.hasError('required')) {
      return ERROR_MESSAGES.required(field);
    }
    if (control?.hasError('email')) {
      return ERROR_MESSAGES.email();
    }
    if (control?.hasError('minlength')) {
      const minLength = control.getError('minlength').requiredLength;
      return ERROR_MESSAGES.minlength(field, minLength);
    }
    return '';
  }
}
