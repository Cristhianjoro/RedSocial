import { NgClass, NgIf } from '@angular/common';
import { Component, NgModule, NgModuleRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ejemplo válido
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@Component({
  selector: 'app-login',
  imports: [NgIf,  NgClass, CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  state = LoginCompState.LOGIN;
//login
email: string = '';
password: string = '';
 // Variables para capturar los datos del formulario
 name: string = '';
 lastname: string = '';
 career: string = '';
 emailr: string = '';
 passwordr: string = '';
 passwordconf: string = '';


// Método que se ejecuta al hacer clic en el botón de iniciar sesión
btnLogin() {
  
  console.log('Correo Electrónico:', this.email);
  console.log('Contraseña:', this.password);
}
btnRegister(){
  console.log('Nombre:', this.name);
  console.log('Apellido:', this.lastname);
  console.log('Carrera:', this.career);
  console.log('Correo Electrónico:', this.email);
  console.log('Contraseña:', this.password);
  console.log('Confirmar Contraseña:', this.passwordconf);
}


  ForgotPassClick() {
    this.state = LoginCompState.FORGOT_PASSWORD;
  }
  CreateAccountClick() {
    this.state = LoginCompState.REGISTER;
  }
  LoginClick() {
    this.state = LoginCompState.LOGIN;
  }

  isLoginState() {
    return this.state == LoginCompState.LOGIN;
  }
  isRegisterState() {
    return this.state == LoginCompState.REGISTER;
  }
  isForgotPasswordState() {
    return this.state == LoginCompState.FORGOT_PASSWORD;
  }
}
export enum LoginCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD

}
