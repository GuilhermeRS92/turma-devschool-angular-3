import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task> = [
    {
      id: 1,
      description: 'Criar um projeto básico',
      completed: false,
      inclusionDate: '2021-07-21'
    },
    {
      id: 2,
      description: 'Colocar o lixo para fora até as 19h',
      completed: true,
      inclusionDate: '2021-07-22'
    },
    {
      id: 3,
      description: 'Fazer o jantar até as 22h',
      completed: true,
      inclusionDate: '2021-07-20'
    },
    {
      id: 4,
      description: 'Reunião de alinhamento dia 18/07 as 14h',
      completed: true,
      inclusionDate: '2021-07-21'
    },
    {
      id: 5,
      description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h',
      completed: false,
      inclusionDate: '2021-07-19'
    },
    {
      id: 6,
      description: 'Criar conteúdo da aula',
      completed: false,
      inclusionDate: '2021-07-18'
    }
  ];

  filteredTasks: Array<Task> = this.tasks;

  constructor() { }

  ngOnInit(): void {
  }

  searchCollaborator(event: any) {
    const value = event.target.value;
    if (value) {
      this.filteredTasks = this.tasks.filter(
        (task) => task.description.toUpperCase().search(value.toUpperCase()) > -1);
      return this.filteredTasks;
    }
    this.filteredTasks = this.tasks;
    return this.filteredTasks;
  }

}
