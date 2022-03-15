import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborators-list',
  templateUrl: './collaborators-list.component.html',
  styleUrls: ['./collaborators-list.component.scss']
})
export class CollaboratorsListComponent implements OnInit {

  title: string = "Colaboradores";

  collaborators = [ 
    { 
      id: 1, 
      name: 'Nathan Carlos', 
      salario: 7000,
      cargo: 'Dev Pl'
    }, 
    {
      id: 2,
      name: 'David Carlos',
      salario: 3000,
      cargo: 'Dev Jr' 
    }, 
    { 
      id: 3, 
      name: 'Mateus Augusto', 
      salario: 3500, 
      cargo: 'Dev Jr' 
    }, 
    { 
      id: 4, 
      name: 'Alberto Silva', 
      salario: 10000, 
      cargo: 'Dev Sr' 
    }, 
    { 
      id: 5, 
      name: 'Rogerio Souza', 
      salario: 9000, 
      cargo: 'Dev Sr' 
    }, 
    { 
      id: 6, 
      name: 'Gabriel Miguel', 
      salario: 9500, 
      cargo: 'Dev Sr' 
    }, 
    {
      id: 7, 
      name: 'Alan Jhonnes', 
      salario: 11000, 
      cargo: 'Arquiteto' 
    },
    {
      id: 8, 
      name: 'Guilherme Ribeiro', 
      salario: 3000, 
      cargo: 'Dev Jr' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
