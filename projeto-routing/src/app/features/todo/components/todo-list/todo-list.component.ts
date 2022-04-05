import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks?: Array<Todo> = [
    {
      id: 1,
      description: 'Criar um projeto básico',
      completed: false,
      inclusionDate: '2021-07-21'}, 
    { 
      id: 2,
      description: 'Colocar o lixo para fora até as 19h', 
      completed: true, 
      inclusionDate: '2021-07-22'}, 
    { 
      id: 3, 
      description: 'Fazer o jantar até as 22h', 
      completed: true, 
      inclusionDate: '2021-07-20'}, 
    { 
      id: 4, 
      description: 'Reunião de alinhamento dia 18/07 as 14h', 
      completed: true, 
      inclusionDate: '2021-07-21'}, 
    { 
      id: 5, 
      description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h', 
      completed: false, 
      inclusionDate: '2021-07-19'}, 
    { 
      id: 6, 
      description: 'Criar conteúdo da aula', 
      completed: false, 
      inclusionDate: '2021-07-18'},
  ];
  
  filteredTasks?: Array<Todo> = this.tasks;

  emptySearch: String = 'Não há tarefas para essa busca!';

  removeTask() {
    alert('Tarefa removida!')
  }

  completeTask() {
    alert('Tarefa concluida com sucesso!');
  }

  searchTask(event: any) {
    const value = event.target.value;
    console.log(value);
    if (value) {
      this.filteredTasks = this.tasks?.filter((tasks) => tasks.description.toUpperCase().search(value.toUpperCase()) > -1);
      return this.filteredTasks;
    }
    this.filteredTasks = this.tasks;
    return this.filteredTasks;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
