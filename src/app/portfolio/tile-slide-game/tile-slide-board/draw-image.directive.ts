import {
  Directive, ElementRef, Input,  OnChanges, SimpleChanges, HostListener, OnInit
} from "@angular/core";
import { ImgTile } from "./img-tile.model";

@Directive({
  selector: "[appDrawImage]"
})
export class DrawImageDirective implements OnInit, OnChanges {
  @Input("appDrawImage") imgSrc: string;
  @Input() tile: ImgTile;
  @Input() gridSize: number;
  @Input() tileSize: number; 
  canvasEl: any;
  ctx: CanvasRenderingContext2D;
  imgObj = new Image();
  constructor(private el: ElementRef) {}
  draw() {
    if (this.tile.startX === this.gridSize - 1 &&
        this.tile.startY === this.gridSize - 1) {
          return;
        }
      this.ctx.drawImage(
        this.imgObj,
        (this.imgObj.width / this.gridSize) * this.tile.startX,
        (this.imgObj.height / this.gridSize) * this.tile.startY,
        (this.imgObj.width / this.gridSize),
        (this.imgObj.height / this.gridSize),
        0,
        0,
        this.tileSize,
        this.tileSize
      );
  }

  ngOnInit() {
    this.imgObj.src = this.imgSrc;
    this.canvasEl = this.el.nativeElement;
    this.ctx = this.canvasEl.getContext("2d");
    this.imgObj.onload = () => this.draw();
  }

  ngOnChanges(changes: SimpleChanges){
    if(!changes.tileSize.firstChange){
      this.imgObj.src = this.imgSrc;
      this.draw();
    }
  }
}
