import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
  standalone: true
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultHeight: number = 180;
  private defaultColor: string = '#3498db';

  constructor(private elementRef: ElementRef) {
    this.setHeight(this.defaultHeight);
  }

  @Input('appBorderCard')
  borderColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.elementRef.nativeElement.style.height = `${height}px`;
    this.setBorder(this.initialColor);
  }

  setBorder(color: string) {
    this.elementRef.nativeElement.style.border = `4px solid ${color}`;
  }
}
