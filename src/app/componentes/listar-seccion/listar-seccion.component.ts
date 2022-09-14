import { Component, Input} from '@angular/core';
import {Seccion} from '../../modelos/seccion';
@Component({
  selector: 'app-listar-seccion',
  templateUrl: './listar-seccion.component.html',
  styleUrls: ['./listar-seccion.component.scss']
})
export class ListarSeccionComponent  {
  @Input() public listarS !: Array<Seccion>

}
