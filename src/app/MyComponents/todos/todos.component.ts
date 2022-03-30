import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];

    }
    else {
      this.todos = JSON.parse(this.localItem);
    }

  }

  ngOnInit(): void {
  }

  deleteToDo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addToDo(todo: Todo) {
    console.log(todo);
    if (todo.desc === undefined || todo.title === undefined || todo.desc === '' || todo.title === '') {
      todo.valid=false;
    }
    else {
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }

  }

  toggleCheckBoxToDo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
