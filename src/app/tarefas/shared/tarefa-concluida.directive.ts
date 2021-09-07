import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() appTarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit()
  {
    if(this.appTarefaConcluida)
    {
      this.el.nativeElement.style.textDecoration = "line-through"
    }
  }
}
