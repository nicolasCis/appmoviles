import { Component, EventEmitter, Output, Input } from '@angular/core';
import{Seccion} from './modelos/seccion';
import{Alumno} from './modelos/alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() public seccion : Array<Seccion> = []

  public guardarSeccion(nuevo:Seccion):void{
    this.listarSeccion.push(nuevo);
  }

  public guardarAlumnos(nuevo:Alumno):void{
    this.listarAlumno.push(nuevo);
  }


  public listarSeccion :Array<Seccion> = [
    {
      id:0,
      nombreSeccion:''
    }
  ]

  public listarAlumno : Array<Alumno> = [
    {
      nombreAlumno:'',
      apellidoAlumno:'',
      edadAlumno:0,
      rutAlumno:0,
      seccionAlumno:'Estadistica'
    }
  ]
}
