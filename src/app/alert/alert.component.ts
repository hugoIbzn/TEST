import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  // Creación de @Input()
  @Input() ico = "";
  @Input() title = "";
  @Input() message = "";
  @Input() btn = "";

  // Exportamos el modal
  @ViewChild('myModal', {static: false}) modal: ElementRef;

  // Creamos la función para que inicie el modal
  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  // Creamos la función para que inicie el modal
  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  // Logueamos cuando se finalice el Modal
  logCloseModal() {
    console.log("Finalizando Modal");
  }
}