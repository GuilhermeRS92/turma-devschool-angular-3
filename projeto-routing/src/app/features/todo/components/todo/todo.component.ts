import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

@Input()
tasks?: Todo;


  constructor() { }

  ngOnInit(): void {
  }
  
  removeTask() {
    alert('Tarefa removida!'),
    delete this.tasks
  }

  completeTask() {
    if (this.tasks?.completed === false) {
    alert('Tarefa concluida com sucesso!');
    this.tasks.completed = true;
    } else {
      if(this.tasks?.completed) {
      this.tasks.completed = false;
      }
    }
  }

}
