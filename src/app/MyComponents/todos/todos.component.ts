import { Component } from '@angular/core';
import { Todo } from "../../Todo";
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[];
  localTodos: string | null = "";

  constructor() {
    this.localTodos = localStorage.getItem("todos");

    if (this.localTodos == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localTodos);
    }
  }

  deleteParentTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addToParentTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
