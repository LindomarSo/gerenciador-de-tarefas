import { Routes } from "@angular/router";

import { ListarTarefaComponent } from ".";
import { CadastrarTarefaComponent } from "./cadastrar";
import { EditarTarefaComponent } from "./editar/editar-tarefa.component";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];