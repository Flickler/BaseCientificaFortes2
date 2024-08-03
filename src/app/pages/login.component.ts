import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IconComponent } from '@Components/icon.component';
import { LoginFacade } from '@Services/login-facade.service';

@Component({
  selector: 'fortes-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, IconComponent],
  styleUrl: 'login.component.scss',
  templateUrl: 'login.component.html',
})
export default class LoginComponent {
  protected loginFacade = inject(LoginFacade);
}
