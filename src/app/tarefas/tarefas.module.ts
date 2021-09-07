import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListarTarefaComponent } from './listar';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],  
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
