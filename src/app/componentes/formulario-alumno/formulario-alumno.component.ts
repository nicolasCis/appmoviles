import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Alumno, Secciones} from '../../modelos/alumno';
import {Seccion} from '../../modelos/seccion';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Input() public estoylistando : Array<Seccion> = []
  @Output() public salvar = new EventEmitter<Alumno>();

  public alumno:Alumno={
    nombreAlumno:'',
    apellidoAlumno:'',
    edadAlumno:0,
    rutAlumno:0,
    seccionAlumno:'BaseDeDatos'
  }

  public seccion:Seccion={
    id:0,
    nombreSeccion:''
  }

  public nombreAlumno(evento:Event):void{
    const elemento0 = evento.target as HTMLInputElement;
    this.alumno.nombreAlumno = elemento0.value;
  }
  public apellidoAlumno(evento:Event):void{
    const elemento1 = evento.target as HTMLInputElement;
    this.alumno.apellidoAlumno = elemento1.value;
  }
  public edadAlumno(evento:Event):void{
    const elemento2 = evento.target as HTMLInputElement;
    this.alumno.edadAlumno = Number.parseInt(elemento2.value);
  }
  public rutAlumno(evento:Event):void{
    const elemento3 = evento.target as HTMLInputElement;
    this.alumno.rutAlumno = Number.parseInt(elemento3.value);
  }
  public cambiarOpc(evento:Event):void{
    const elemento4 = evento.target as HTMLSelectElement;
    this.alumno.seccionAlumno = elemento4.value as Secciones;
  }

  public guardar(evento:Event):void{
    const copia : Alumno = {...this.alumno};
    this.salvar.emit(copia);
    this.alumno.nombreAlumno='';
    this.alumno.apellidoAlumno='',
    this.alumno.edadAlumno=0;
    this.alumno.rutAlumno=0;
    this.alumno.seccionAlumno='BaseDeDatos';
  }

}
