import { Component, OnInit, Input, HostListener, Output, EventEmitter } from "@angular/core";
import { ImgTile } from "./img-tile.model";

@Component({
  selector: "tile-slide-board",
  templateUrl: "./tile-slide-board.component.html",
  styleUrls: ["./tile-slide-board.component.scss"]
})
export class TileSlideBoard implements OnInit {
  @Input() imgSrc: string;
  @Input() gridSize: number;
  @Input() complexity: number;
  @Output() newGame = new EventEmitter<null>()
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.setBoardSize();
  }
  boardSize: string;
  tileSize: number;
  turnsTaken: number = 0;
  transitioning: boolean = false;
  gameOver: boolean = false;
  imgGrid: Array<ImgTile> = [];
  constructor() {
  }

  generateGrid() {
    let tileNum = 0;
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        this.imgGrid.push({
          tileNum: tileNum,
          startY: i,
          startX: j,
          currY: i,
          currX: j,
          transitioning: false
        });
        tileNum++;
      }
    }
  }

  setBoardSize(){
    let minSize = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;
    if(minSize >= 1000){
      this.boardSize= "x-large";
      this.tileSize = 800 / this.gridSize;
    }
    else if(minSize >= 800){
      this.boardSize = "large"
      this.tileSize = 550 / this.gridSize;
    }
    else if(minSize >= 600){
      this.boardSize = "medium"
      this.tileSize = 450 / this.gridSize;
    }
    else{
      this.boardSize = "small"
      this.tileSize = 300 / this.gridSize;
    }
  }

  checkForWin(){
    for(let i in this.imgGrid){
      if(parseInt(i) !== this.imgGrid[i].tileNum){
        return;
      };
    }
    this.gameOver = true;
  }

  findEmpty(x, y){
      return this.imgGrid.find(val=>{
        let isEmpty = val.startX === this.gridSize-1 && val.startY === this.gridSize-1
        let isCardinal = ((val.currX === x+1 && val.currY === y) || (val.currX === x-1 && val.currY === y) || (val.currX === x && val.currY === y+1) || (val.currX === x && val.currY === y-1))
        return isEmpty && isCardinal
      })
  }

  slideTile(tile: ImgTile) {
    if(this.transitioning) return; 
    let openTile = this.findEmpty(tile.currX, tile.currY)
    if(openTile){
      this.turnsTaken++
      this.swapTiles(tile, openTile);
      tile.transitioning = this.transitioning = true;
      this.checkForWin();
      setTimeout(()=>{
        tile.transitioning = this.transitioning = false;
      }, 250)
    }
  }

  findTileToSwap(movingTile: ImgTile){
    let toSwap = Math.floor(Math.random()* 2) ? 'currX' : 'currY';
    let noSwap = toSwap === 'currX' ? 'currY' : 'currX';
    let toMove = Math.floor(Math.random()* 2) ? -1 : 1;
    if(movingTile[toSwap]+toMove < 0 || movingTile[toSwap]+toMove === this.gridSize){
      return this.findTileToSwap(movingTile);
    }
    return this.imgGrid.find(val=> {
      return val[toSwap] === movingTile[toSwap] + toMove && val[noSwap] === movingTile[noSwap]
    })
  }

  shuffleGrid() {
    let startingTile = this.imgGrid[this.gridSize*this.gridSize-1];
      let numShuffles = this.complexity * this.gridSize * this.gridSize;
      while(numShuffles > 0){
        this.swapTiles(startingTile, this.findTileToSwap(startingTile))
        numShuffles--
    }
  }

  toggleNewGame(){
    this.newGame.emit();
  }

  swapTiles(tileOne: ImgTile, tileTwo: ImgTile){
    let temp = Object.assign({}, tileOne);
    tileOne.currX = tileTwo.currX;
    tileOne.currY = tileTwo.currY;
    tileOne.tileNum = tileTwo.tileNum;
    tileTwo.currX = temp.currX;
    tileTwo.currY = temp.currY;
    tileTwo.tileNum = temp.tileNum;
  }


  ngOnInit() {
    this.gridSize = this.gridSize < 3 ? 3 : this.gridSize;
    this.gridSize = this.gridSize > 20 ? 20 : this.gridSize;
    this.setBoardSize();
    this.generateGrid();
    this.shuffleGrid();
  }
}
