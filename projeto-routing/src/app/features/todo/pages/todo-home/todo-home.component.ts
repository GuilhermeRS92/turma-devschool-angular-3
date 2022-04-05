import { compileClassMetadata } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  completeTask() {
    alert('Tarefa removida!')
  }

}
