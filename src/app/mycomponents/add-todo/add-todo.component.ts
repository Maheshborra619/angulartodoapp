import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
   title : string;
   description:string;
  constructor() { }

  ngOnInit(): void {
  }
   addTodo(){
      if(this.title == null){
        return alert(" mahesh todo cant be empty")
      }
 
       
    const todo = {
      sno:8,
     title:this.title,
     active:true
    }

    
    this.todoAdd.emit(todo);
    this.title = "";
   }
}
