import {Directive, HostListener, ElementRef, Renderer} from "@angular/core";
@Directive({
  selector: '[imageFade]'
})
export class ImageFadeDirective{
  constructor(private el: ElementRef){
    let location = this.el.nativeElement.getBoundingClientRect().top;
    if(location <(window.scrollY + (window.innerHeight -200)) ){
      this.el.nativeElement.style.opacity = 1;
      console.log(location);
      console.log(this.el.nativeElement);
    }
  }

  @HostListener('window:scroll') onScroll() {
    let location = this.el.nativeElement.getBoundingClientRect().top;
    
    let fullHeight = window.scrollY + (window.innerHeight -200);
    let element = this.el.nativeElement;

    if(location < fullHeight){
      this.el.nativeElement.style.opacity = 1;
    }
  }





}
