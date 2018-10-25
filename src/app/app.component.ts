import {Component} from '@angular/core';
import {Router, NavigationStart, RouterOutlet} from "@angular/router";
import { slideInAnimation } from './shared/animations/routeAnimations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  opened: boolean;
  constructor(private router: Router){
    this.router.events.subscribe(path => {
      if(event instanceof NavigationStart && path['url'] != this.router.url) {
        window.scrollTo(0,0);
      }
    });
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  ngOnInit(){
  }
}