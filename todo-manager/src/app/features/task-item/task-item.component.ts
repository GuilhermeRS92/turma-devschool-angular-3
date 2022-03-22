import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  tasks = [ 
    { 
    id: 1, 
    description: 'Criar um projeto básico', 
    completed: false }, 
    { 
    id: 2, 
    description: 'Colocar o lixo para fora até as 19h', 
    completed: true }, 
    { 
    id: 3, 
    description: 'Fazer o jantar até as 22h', 
    completed: true }, 
    { 
    id: 4, 
    description: 'Reunião de alinhamento dia 18/07 as 14h', 
    completed: true }, 
    { 
    id: 5, 
    description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h', 
    completed: false }, 
    { 
    id: 6, 
    description: 'Criar conteúdo da aula', 
    completed: false } 
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}