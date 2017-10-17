import {Directive, ElementRef, OnInit, Renderer2, AfterViewInit} from "@angular/core";
@Directive({
  selector: '[slideBox]'
})
export class SlideBox implements AfterViewInit{
  public location: number;
  public handler: any;
  constructor(private el: ElementRef, public renderer: Renderer2){

  }

  transitionElements(elements: Object, position: number){
    for(let i =0; i <this.el.nativeElement.children.length; i++){
      this.el.nativeElement.children[i].style['transition-delay'] = `${i*.4}s`;
      this.el.nativeElement.children[i].style.right = `${i===0 || i%2===0 ? '-' : ''}${position}%`;
    }
  }

  ngAfterViewInit(){
    this.location = this.el.nativeElement.getBoundingClientRect().top;
    if(this.location >= window.innerHeight ){
      this.transitionElements(this.el.nativeElement, 120);
      this.handler = this.renderer.listen(window, "scroll", ()=>{
        this.location = this.el.nativeElement.getBoundingClientRect().top;
        let fullHeight = window.innerHeight - 100;
        if (this.location < fullHeight) {
          this.transitionElements(this.el.nativeElement.children, 0);
          this.handler();
        }
      });

    }
  }


}
