import { NgClass, NgIf } from '@angular/common';
import { Component, NgModule, NgModuleRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ejemplo válido
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-login',
  imports: [NgIf,  NgClass, CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  state = LoginCompState.LOGIN;
//loglin
emaill: string = '';
passwordl: string = '';
 // Variables para capturar los datos del formulario
 name: string = '';
 lastname: string = '';
 career: string = '';
 email: string = '';
 password: string = '';
 passwordconf: string = '';
 constructor(private authService: AuthService){

 }


// Método que se ejecuta al hacer clic en el botón de iniciar sesión
btnLogin() {
  
  console.log('Correo Electrónico:', this.emaill);
  console.log('Contraseña:', this.passwordl);
}
btnRegister(){
  console.log('Nombre:', this.name);
  console.log('Apellido:', this.lastname);
  console.log('Carrera:', this.career);
  console.log('Correo Electrónico:', this.email);
  console.log('Contraseña:', this.password);
  console.log('Confirmar Contraseña:', this.passwordconf);

  



if(!this.vacio(this.email) && !this.vacio(this.password) && !this.vacio(this.passwordconf) && !this.vacio(this.name)
  && !this.vacio(this.lastname) && !this.vacio(this.career)
  ){
    alert("Completa todos los campos")
  } else if(!this.igual(this.password, this.passwordconf)){
    alert("La contraseña no coincide")
  }else if(this.password.length <6){
    alert("La contraseña debe tener minimo 6 caracteres")

  }

  else{
    this.authService.registro(this.email,this.password,this.name,this.lastname,this.career)

  }


}

vacio(text: string) {
  return text != null && text.length > 0;
}

igual(text: string, text2: string) {
  return text == text2;

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
