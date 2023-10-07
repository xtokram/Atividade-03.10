import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoadetails',
  templateUrl: './pessoadetails.component.html',
  styleUrls: ['./pessoadetails.component.scss']
})
export class PessoadetailsComponent {

  //roteador = inject(ActivatedRoute);
  pessoa!: Pessoa;

  constructor(){
    //let id = this.roteador.snapshot.paramMap.get('id');
    //console.log(id)
  }

}
