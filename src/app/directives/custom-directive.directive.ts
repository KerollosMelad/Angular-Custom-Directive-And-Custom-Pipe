import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
  OnInit,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit, AfterViewInit {

  @Input("defaultColor") defaultColor: string;
  @Input("appChangeTxtformate") txtCase: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // element.nativeElement.style.backgroundColor = '#f0f';
    //renderer.setStyle(elementRef.nativeElement, 'backgroundColor', '#fff');
    //this.setBgColor('red');
  }

  ngOnInit() {
    if (this.defaultColor) {
      this.setBgColor(this.defaultColor);
    } else {
      this.setBgColor('red');
    }
  }

  ngAfterViewInit() {
    if (this.txtCase &&  this.txtCase == "lower") {
      console.log("element value" + this.elementRef.nativeElement.value.toLowerCase())
    } else
      console.log("element value" + this.elementRef.nativeElement.value.toUpperCase())
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBgColor('yellow');
    this.border = '5px solid green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('red');
    this.border = '20px solid black';
  }

  @HostBinding('style.border') 
  border: string;
}
