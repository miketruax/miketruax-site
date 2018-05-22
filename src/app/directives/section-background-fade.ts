import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";
@Directive({
  selector: '.section-background'
})
export class SectionBackgroundFade implements OnInit{
  public location: number;
  public scrollHandler: any;
  public resizeHandler: any;
  constructor(private el: ElementRef, public renderer: Renderer2){
    this.resizeHandler = this.renderer.listen(window, "resize", ()=>{
      this.location = this.el.nativeElement.getBoundingClientRect().top;
      let fullHeight = window.innerHeight - 100;
      if(this.location < fullHeight){
        this.el.nativeElement.style.transition = "none";
        this.el.nativeElement.style.opacity = 1;
        this.resizeHandler();
      }
    });
    this.scrollHandler = this.renderer.listen(window, "scroll", ()=>{
      this.location = this.el.nativeElement.getBoundingClientRect().top;
      let fullHeight = window.innerHeight - 100;
      if (this.location < fullHeight) {
        this.el.nativeElement.style.opacity = 1;
        this.scrollHandler();
      }
    });
  }


  ngOnInit(){
    this.location = this.el.nativeElement.getBoundingClientRect().top;
    if(this.location < window.innerHeight ){
      this.scrollHandler();
    }
    else{
      this.el.nativeElement.style.opacity = 0;

    }
  }


}
