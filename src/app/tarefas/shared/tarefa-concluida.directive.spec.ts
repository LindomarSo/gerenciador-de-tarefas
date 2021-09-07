import { ElementRef } from '@angular/core';
import { TarefaConcluidaDirective } from './tarefa-concluida.directive';

describe('TarefaConcluidaDirective', () => {
  it('should create an instance', () => {
    var el: ElementRef;
    const directive = new TarefaConcluidaDirective(el);
    expect(directive).toBeTruthy();
  });
});
