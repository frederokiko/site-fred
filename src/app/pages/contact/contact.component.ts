import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.valid) {
      this.loading = true;
      
      // Remplacez juste apres f/
      const formspreeUrl = 'https://formspree.io/f/xgvvraep';
      
      this.http.post(formspreeUrl, this.contactForm.value).subscribe({
        next: () => {
          this.successMessage = 'Message envoyé avec succès !';
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          this.errorMessage = 'Erreur lors de l\'envoi du message. Veuillez réessayer.';
          console.error('Erreur d\'envoi:', error);
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }
}
