import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

// Se crea la interfaz para el Modal
interface IModal {
  ico: string,
  title: string,
  message: string,
  btn: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TEST';

  // Creando los casos que pueden suceder con al interfaz
  // Caso Success
  succes: IModal = {
    ico: "success",
    title: "Este titulo es de success",
    message: "Mensaje de success",
    btn: "success",
  }

  // Caso Error
  error: IModal = {
    ico: "error",
    title: "Este titulo es de error",
    message: "Mensaje de error",
    btn: "error"
  }

  // Caso Warning
  warning: IModal = {
    ico: "warning",
    title: "Este titulo es de warning",
    message: "Mensaje de warning",
    btn: "warning"
  }

  // Logueamos cuando se ejecute el Modal
  logOpenModal() {
    console.log("Ejecutando Modal");
  }

  // Componente AlertComponent dependiendo del usoo
  // Caso SUCCESS
  @ViewChild('modalS', { static: false }) modalS: AlertComponent
  // Caso ERROR
  @ViewChild('modalE', { static: false }) modalE: AlertComponent
  // Caso WARNING
  @ViewChild('modalW', { static: false }) modalW: AlertComponent

  // Tenemos la función para abrirlo la cual recibe el parametro correspondiente
  openModal(modal: AlertComponent) {
    modal.open();
  }
}