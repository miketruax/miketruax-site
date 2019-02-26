import { Component} from "@angular/core";


@Component({
  selector: "tile-slide-game",
  templateUrl: "./tile-slide-game.component.html",
  styleUrls: ["./tile-slide-game.component.scss"]
})
export class TileSlideGame {

  imgChoices: Array<string> = [
    "../../assets/img/food/bearscuits.png",
    "../../assets/img/food/chocolatepie.png",
    "../../assets/img/food/generaltsofu.png",
    "../../assets/img/portfolio/icons/periodictable.png"
  ]
  imgSrc: string;
  gameReady: boolean = false;
  gridSize: number = 4;
  complexity: number = 4;

  constructor(){
    this.imgSrc = this.imgChoices[0]
  }

  setImg(img){
    this.imgSrc = img;
  }
  
  startGame(){
    this.imgSrc = this.imgChoices.indexOf(this.imgSrc) == -1 ? this.imgChoices[0] : this.imgSrc;
    this.toggleReady();
  }

  toggleReady(){
    this.gameReady = !this.gameReady;
  }

}
