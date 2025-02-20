import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnEffects]'
})
export class BtnEffectsDirective implements OnInit {

  constructor(private el: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseover')
  @HostListener('hover')
  mouseover() {
    this.rend.setStyle(this.el.nativeElement, "background", "linear-gradient(#d7788c, #71081e)");
    this.rend.setStyle(this.el.nativeElement, "transition", "all 0.5s ease");
    this.rend.setStyle(this.el.nativeElement, "boxShadow", "0 5px 9px 1px rgba(130, 19, 40, 0.5)");

    // this.el.nativeElement.style.boxShadow = "0 5px 9px 1px rgba(130, 19, 40, 0.5)";
    // this.el.nativeElement.style.transition = "all 0.5s ease";
  }

  @HostListener('mouseout')
  mouseout() {
    this.rend.setStyle(this.el.nativeElement, "background", "linear-gradient(#d7485c, #71081e)");
    this.rend.setStyle(this.el.nativeElement, "transition", "none");
    this.rend.setStyle(this.el.nativeElement, "boxShadow", "none");

    // this.el.nativeElement.style.boxShadow = "0 5px 9px 1px rgba(130, 19, 40, 0.5)";
    // this.el.nativeElement.style.transition = "all 0.5s ease";
  }

  ngOnInit(): void {
    this.rend.setStyle(this.el.nativeElement, "background", "linear-gradient(#d7485c, #71081e)");
   // this.el.nativeElement.style.background = "linear-gradient(#d7485c, #71081e)";
  }
}
