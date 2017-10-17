import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";
@Directive({
  selector: '.section-background'
})
export class SectionBackgroundFade implements OnInit{
  public location: number;
  public handler: any;
  constructor(private el: ElementRef, public renderer: Renderer2){
    this.handler = this.renderer.listen(window, "scroll", ()=>{
      this.location = this.el.nativeElement.getBoundingClientRect().top;
      let fullHeight = window.innerHeight - 100;
      if (this.location < fullHeight) {
        this.el.nativeElement.style.opacity = 1;
        this.handler();
      }
    });
  }


  ngOnInit(){
    this.location = this.el.nativeElement.getBoundingClientRect().top;
    if(this.location < window.innerHeight ){
      this.handler();
    }
    else{
      this.el.nativeElement.style.opacity = 0;

    }
  }


}
