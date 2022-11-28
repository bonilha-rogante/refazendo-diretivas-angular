import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  public clientes: any =[]

  constructor() { }


  ngOnInit(): void {
    this.clientes.push(
      {
        id: 1,
        nome: 'Guilherme',
        cpf: 12345678945,
        telefone: 11987654321,
        endereco: 'Rua 123',
      },
      {
        id: 2,
        nome: 'Fernanda',
        cpf: 44444444444,
        telefone: 11999999999,
        endereco: 'Av 321',
      },
      {
        id:3,
        nome: 'Leandro',
        cpf: 33333333333,
        telefone: 11999999999,
        endereco: 'Rua 456',
      },

    )
      
  }

}
