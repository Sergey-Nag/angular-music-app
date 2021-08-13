import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPlayerControll]'
})
export class PlayerControllDirective implements OnInit {
  // @HostBinding('class.player-controll') 
  @Input() playerAction: string = '';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  private applyButton() {
    this.renderer.addClass(this.elemRef.nativeElement, 'player-control-' + this.playerAction);
  }

  ngOnInit() {
    this.renderer.addClass(this.elemRef.nativeElement, 'player-control');

    if (this.playerAction !== '') this.applyButton();
    
  }

}
