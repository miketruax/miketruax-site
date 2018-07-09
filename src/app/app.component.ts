import {Component, OnInit, HostListener} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  fullHeight: number = window.scrollY + (window.innerHeight -200);
  menuActive: boolean = false;

  constructor(public router: Router) {
    this.router.events.subscribe(path=>{
      if (path['url'] != this.router.url) {
          document.getElementById('navbar-main').classList.remove('show');
        this.menuActive = false;
          window.scrollTo(0, 0);
        }

    });
  }

  @HostListener('window:scroll') onScroll() {
    this.fullHeight = window.scrollY + (window.innerHeight -200);
  }

    menuClick(){
    this.menuActive = !this.menuActive;
  }
    ngOnInit(){}
}
