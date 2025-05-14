import { Component, EventEmitter, Input, isStandalone, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todo-item',
  imports: [],
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDeleteEmitter: EventEmitter<Todo> = new EventEmitter();

  deleteTodo(todo: Todo){
    this.todoDeleteEmitter.emit(todo);
    console.log("Delete button is triggered . . .");
  }
}
