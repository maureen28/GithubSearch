import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appGitTextDeco]'
})
export class GitTextDecoDirective {

  constructor() { }

  textColor = ['lavender', 'darkblue'];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.textColor.length);

    this.color = this.borderColor = this.textColor[colorPick];
  }

}
