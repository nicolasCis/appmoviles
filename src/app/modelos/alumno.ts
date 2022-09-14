
export type Secciones = 'BaseDeDatos'|'Estadistica'

export interface Alumno {
  nombreAlumno:String,
  apellidoAlumno:String,
  edadAlumno:Number,
  rutAlumno:Number,
  seccionAlumno:Secciones
}
