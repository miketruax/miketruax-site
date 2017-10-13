import {Directive, HostListener, ElementRef, Renderer, OnInit} from "@angular/core";
@Directive({
  selector: '[imageFade]'
})
export class ImageFadeDirective implements OnInit{
  public location: number;
  constructor(private el: ElementRef){

  }

  @HostListener('window:scroll') onScroll() {
    let fullHeight = window.scrollY + (window.innerHeight -100);
    if(this.location < fullHeight){
      this.el.nativeElement.style.opacity = 1;
    }
  }

  ngOnInit(){
    this.location = this.el.nativeElement.getBoundingClientRect().top;
    if(this.location <(window.scrollY + (window.innerHeight)) ){
      this.el.nativeElement.style.opacity = 1;
    }
  }




}
