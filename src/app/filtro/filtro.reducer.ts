import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

// export const initialState: fitrosValidos = <fitrosValidos>'todos' ;

export const initialState: filtrosValidos = <filtrosValidos>'todos' 

export const filtroReducer = createReducer(
    initialState,
    on(setFiltro, (state, { filtro }) => filtro ),
);