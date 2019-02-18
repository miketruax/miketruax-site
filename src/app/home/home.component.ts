import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  designCategories: Object[];
  techConsultation: Object[];
  constructor() {
    this.designCategories = [
      {
        title: "Single Page Web Apps",
        icon: "apps",
        text: "Create a custom experience for your users and/or clients."
      },
      {
        title: "Multi-page Websites",
        icon: "public",
        text: "Large or small multi-page sites to showcase everything you have to offer"
      },
      {
        title: "Database Integration",
        icon: "poll",
        text: "Access all of your data anywhere via the internet."
      },
      {
        title: "eStore Integration",
        icon: "shopping_cart",
        text: "Grow your business and brand straight from your page."
      },
      {
        title: "User Authorization",
        icon: "verified_user",
        text: "Protect your site (or just parts of it) to make sure only the right people see specific information."
      },
      {
        title: "Custom Server Routing",
        icon: "zoom_out_map",
        text: "Custom APIs or Page routing to help access your information even easier."
      }
    ];
    this.techConsultation = [
      {title: "Website and E-mail Hosting",
       icon: "http"
      },
      {title: "Database and Server Integration",
       icon: "poll"
      },
      {title: "Software Integration and Upgrades",
       icon: "backup"
      },
      {title: "General Troubleshooting",
       icon: "contact_support"
      },
    ]
  }

  ngOnInit(){
}
}

// Web applications
// Website and e-mail hosting
// Database and server integrations
// Software integrations and upgrades
