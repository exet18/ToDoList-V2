import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appEditAutoFocus]'
})
export class EditAutoFocusDirective implements AfterContentInit {

  @Input() public autoFocus?: boolean;

  constructor(private element: ElementRef) {
  }

  public ngAfterContentInit(): void {
    this.element.nativeElement.focus();
  }
}
