import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnEffects]'
})
export class BtnEffectsDirective implements OnInit {
  @Input() defaultBackground: string = 'linear-gradient(#d7485c, #71081e)';
  @Input() hoverBackground: string = 'linear-gradient(#d7555c, #71081e)';

  constructor(private el: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseover')

  mouseover() {
    this.rend.setStyle(this.el.nativeElement, "background", this.hoverBackground);
    this.rend.setStyle(this.el.nativeElement, "transition", "all 0.5s ease");
    this.rend.setStyle(this.el.nativeElement, "boxShadow", "0 5px 9px 1px rgba(130, 19, 40, 0.5)");
  }

  @HostListener('mouseout')
  mouseout() {
    this.rend.setStyle(this.el.nativeElement, "background", this.defaultBackground);
    this.rend.setStyle(this.el.nativeElement, "transition", "none");
    this.rend.setStyle(this.el.nativeElement, "boxShadow", "none");
  }

  ngOnInit(): void {
    this.rend.setStyle(this.el.nativeElement, "background", this.defaultBackground);
  }
}
