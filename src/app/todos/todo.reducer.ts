import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, toogle, toogleAll, unToogleSeledted } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar Al Mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar scudo del capitan America')
];

export const todoReducer = createReducer(
    initialState,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(borrar, (state, { id }) => state.filter( todo => todo.id !== id)),
    on(toogleAll, (state, { completado }) => state.map( todo => {
        return {
            ...todo,
            completado: completado
        }
    })),

    on(unToogleSeledted, (state ) => state.filter( todo => !todo.completado ) ),

    on(toogle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),

    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto:texto
                }
            } else {
                return todo;
            }
        });
    }),
);