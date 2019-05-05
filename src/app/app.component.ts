import {Component} from '@angular/core';
import {Router, NavigationStart, RouterOutlet, NavigationEnd} from "@angular/router";
import { slideInAnimation } from './shared/animations/routeAnimations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  opened: boolean;
  myStyle: Object;
  myParams: Object
  constructor(private router: Router){
    this.router.events.subscribe(evt => {
      if(evt instanceof NavigationEnd) {
        window.scrollTo(0,0);
      }
    });
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  ngOnInit(){
    this.myStyle = {
      'position': 'fixed',
      'z-index': -1,
      'background-color': '#f3efe9',
      'width': '100%',
      'height': '100%',
      'top': 0,
      'left': 0
  };

this.myParams = {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 1600
      }
    },
    "color": {
      "value": "#0f3c59"
    },
    "shape": {
      "type": "square",
      "stroke": {
        "width": 1,
        "color": "#fff17d"
      },
      "polygon": {
        "nb_sides": 8
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.4,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 80,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#7bbfbf",
      "opacity": 0.7,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "attract"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
  }
}