import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

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

  // Output()
  @Output() newItemEvent = new EventEmitter<string>();

  // Usuarios agregados
  users: string[] = [];
  // Metodo para agregar usuarios
  addNewItem(value: string) {
    // Los emitimos al padre
    this.newItemEvent.emit(value);
    // Los mandamos al arreglo del hijo
    this.users.push(value);
  }

  // Exportamos el modal
  @ViewChild('myModal', { static: false }) modal: ElementRef;

  // Creamos la función para que inicie el modal
  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  // Creamos la función para que inicie el modal
  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  // Logueamos cuando se ingrese un usuario
  logUser() {
    console.log("Se ha añadido un usuario");
  }

  // Logueamos cuando se finalice el Modal
  logCloseModal() {
    console.log("Se presionó el botón de cerrar");
    console.log("Finalizando Modal");
  }
}
