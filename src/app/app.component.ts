import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/app.style.scss']
})
export class AppComponent {
  title = 'app works!';
  menuActive = false;
  menuClick(){
    this.menuActive = !this.menuActive;
  }
}
