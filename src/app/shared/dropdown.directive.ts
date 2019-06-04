import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen: boolean = true; 

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    
    if (this.isOpen){
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {  
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
    this.isOpen=!this.isOpen;
  }
}