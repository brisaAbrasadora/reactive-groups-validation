import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { matchEmailNestedValidator } from '../validators/match-email-nested.validator';
import { User } from '../interfaces/user';

@Component({
  selector: 'form-nested',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-nested.component.html',
  styleUrl: './form-nested.component.css'
})
export class FormRegisterNestedComponent  {
    #formBuilder = inject(NonNullableFormBuilder);

    username = this.#formBuilder.control("", Validators.required);
    email = this.#formBuilder.control("", [Validators.required, Validators.email]);
    emailConfirm = this.#formBuilder.control("", [Validators.required, Validators.email]);

    emailGroup = this.#formBuilder.group({
        email: this.email,
        emailConfirm: this.emailConfirm,
    }, { validators: matchEmailNestedValidator });

    registerForm = this.#formBuilder.group({
        username: this.username,
        emailGroup: this.emailGroup
    },);

    user: User = {
        username: "",
        email: ""
    };

    register() {
        this.user = {
            username: this.username.value,
            email: this.emailConfirm.value
        };
    }
}
