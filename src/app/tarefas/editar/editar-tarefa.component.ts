import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Tarefa, TarefaService } from '..';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;
  constructor(
              private tarefaService: TarefaService, 
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id =+ this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void
  {
    if(this.formTarefa.form.valid)
    {
      this.tarefaService.atualizar(this.tarefa)
      this.router.navigate(['/tarefas'])
    }
  }
}
