import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})

export class AddTodoComponent {
  title: string = "";
  desc: string = "";
  @Output() todoAddEmitter: EventEmitter<Todo> = new EventEmitter();

  SubmitTodoItem() {
    const todoItem = { sno: 0, title: this.title, desc: this.desc, active: true }
    console.log("Todo is created:");
    console.log(todoItem);
    this.todoAddEmitter.emit(todoItem);
  }

}
