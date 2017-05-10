import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['styles/app.style.scss']
})
export class AppComponent implements OnInit {
  menuActive: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(path => {
      if (path.url != this.router.url) {
        window.scrollTo(0, 0);
      }
    });
  }

    menuClick(){
    this.menuActive = !this.menuActive;
  }




    ngOnInit(){}
}
