import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Input()
  i!: number;

  @Output()
  toDelete : EventEmitter<Todo> =  new  EventEmitter();

  @Output()
  toDoCheckBox : EventEmitter<Todo> =  new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    this.toDelete.emit(todo);
    console.log("Delete")
  }

  onCheckBoxClick(todo : Todo){
    this.toDoCheckBox.emit(todo);
  }

}
