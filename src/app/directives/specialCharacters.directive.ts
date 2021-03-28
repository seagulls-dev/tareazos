import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appSpecialCharacter]',
})
export class SpecialCharacterDirective {
  @Input() appSpecialCharacter: string;

  constructor(public ref: ElementRef, private control: NgControl) {}

  /*@HostListener('input', ['$event']) onInput(event) {
    this.ref.nativeElement.value = event.target.value.toUpperCase();
    console.log(this.ref.nativeElement.value);
  }*/

  @HostListener('input', ['$event']) onEvent(event) {
    const result = event.target.value.replace(this.appSpecialCharacter, '');
    this.control.control.setValue(result);
  }
}
