import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-tableau-todo',
  templateUrl: './tableau-todo.component.html',
  styleUrls: ['./tableau-todo.component.css']
})
export class TableauTodoComponent {
  todos: any[] = [];
  todosFilter: any[] = [];


  constructor (private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/todos').subscribe(
      (data:any) => {
        this.todos = data
        this.todosFilter = this.todos
      }
    )
  }

  filterTodos(option:string) {
    this.todosFilter = this.todos;
    if (option === 'done') {
      this.todosFilter = this.todosFilter.filter(todo => todo.done);
    } else if (option === 'notDone') {
      this.todosFilter = this.todosFilter.filter(todo => !todo.done);
    }
  }

  isCheckedTodo(todoIsChecked:any) {
    todoIsChecked.done = !todoIsChecked.done;
    this.httpClient.patch(`http://localhost:3000/todos/${todoIsChecked.id.toString()}`, 
      { done: todoIsChecked.done }).subscribe(
      (updatedTodo: any) => {
        console.log('Todo status updated:', updatedTodo);
      },
      (error: any) => {
        console.error('Error updating todo status:', error);
      }
    );
  }
}
