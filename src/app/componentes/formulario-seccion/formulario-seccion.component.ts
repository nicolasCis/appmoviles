import { Component, Input , Output, EventEmitter} from '@angular/core';
import {Seccion} from '../../modelos/seccion';
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output() public salvar = new EventEmitter<Seccion>();

  public seccion : Seccion = {
    id:0,
    nombreSeccion:''
  }

  public numeroSeccion(evento:Event):void{
    const elemento0 = evento.target as HTMLInputElement;
    this.seccion.id = Number.parseInt(elemento0.value);
  }

  public nombreSeccion(evento:Event):void{
    const elemento1 = evento.target as HTMLInputElement;
    this.seccion.nombreSeccion = elemento1.value;
  }

  public guardarSec(evento:Event):void{
    const copia : Seccion = {...this.seccion};
    this.salvar.emit(copia);
    this.seccion.id=0;
    this.seccion.nombreSeccion=''
  }


}
