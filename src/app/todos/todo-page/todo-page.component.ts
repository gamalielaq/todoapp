import { AppState } from 'src/app/app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toogleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {


  completados: boolean = false;
  
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }


  toogleAll() {
    this.completados  =! this.completados;
    this.store.dispatch(toogleAll({completado: this.completados}));
  }
}
