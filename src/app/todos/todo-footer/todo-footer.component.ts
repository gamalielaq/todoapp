import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { unToogleSeledted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {


  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['completados', 'pendientes', 'todos'];
  pedientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pedientes = state.todos.filter( todo => !todo.completado ).length;
    }) 
  }


  cambiarFiltro(filtro: filtrosValidos) {
    this.store.dispatch(setFiltro({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(unToogleSeledted());
  }

}
