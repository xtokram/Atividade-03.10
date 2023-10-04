import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent {

  lista: Pessoa[] = [];

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = "Patolino";
    pessoa1.idade = 24;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = "Frajola";
    pessoa2.idade = 21;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = "Gatola";
    pessoa3.idade = 99;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = "Magali";
    pessoa4.idade = 15;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = "Cebolinha";
    pessoa5.idade = 30;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = "Cascão";
    pessoa6.idade = 16;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = "Monica";
    pessoa7.idade = 17;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = "Xico Bento";
    pessoa8.idade = 18;

    let pessoa9: Pessoa = new Pessoa();
    pessoa1.nome = "Rosinha";
    pessoa1.idade = 19;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = "Mago";
    pessoa10.idade = 20;


    this.lista.push(pessoa1)
    this.lista.push(pessoa2)
    this.lista.push(pessoa3)
    this.lista.push(pessoa4)
    this.lista.push(pessoa5)
    this.lista.push(pessoa6)
    this.lista.push(pessoa7)
    this.lista.push(pessoa8)
    this.lista.push(pessoa9)
    this.lista.push(pessoa10)
  
  }

}
