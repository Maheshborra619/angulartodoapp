import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
@Input() todo:Todo;
@Input() i : Number;
@Output() tododelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo){
    this.tododelete.emit(todo);
  }

  onCheckBoxClick(todo){
    this.todoCheckbox.emit(todo);
  }

}
