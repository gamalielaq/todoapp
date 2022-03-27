import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const crear = createAction('[TODO] Crea Todo',
    props<{texto: string}>()
);

export const toogle = createAction('[TODO] Toogle Todo',
    props<{id: number}>()
);

export const editar = createAction('[TODO] Editar Todo',
    props<{id: number, texto: string}>()
);


export const borrar = createAction('[TODO] Borrar Todo',
    props<{id: number}>()
);


export const toogleAll = createAction('[TODO] Marcar Todos',
    props<{completado: boolean}>()
);


export const unToogleSeledted = createAction('[TODO] Limpiar Completados');
