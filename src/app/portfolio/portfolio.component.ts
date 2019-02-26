import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from './portfolioItem.model';
import { MatDialog } from '@angular/material';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

@Component({
  selector: 'portfolio-component',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems: PortfolioItem[];
  constructor(public dialog: MatDialog) { }

  openPortfolioItem(itemClicked){
    const dialogRef = this.dialog.open(PortfolioItemComponent, {data: {portfolioItem: itemClicked}});

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  ngOnInit() {
    this.portfolioItems = [{
      title: 'Personal Site',
      img: 'miketruax.png',
      link: '/',
      about: "Personal website for contract work and showing off my skills. Hope you're enjoying it right now!",
      techStack: ["HTML5 / Bootstrap / SCSS for design", "Angular 2 utilizing ngrx, stores, and reducers (specifically for food blog)", 
      "Node.JS with Express for backend", "Angular CLI for ease of scaffolding"],
      githubLink: "miketruax-website-NG2"
    },
    {
      title: 'Buddy Trakr',
      img: 'buddyTrakr.png',
      link: 'https://buddytrakr.herokuapp.com',
      about: "Tracking app for stuffed animals. This was originally a pet project of mine that I used to teach myself a lot of Angular2 and Authentication via passport",
      techStack: ["Angluar 2 w/ Angular CLI for ease of scaffolding", "Bootstrap and SCSS for styling", 
      "Rxjs and ngrx for Observables and Stores for client-side", "Node.js in ES6", 
    "MongoDB via mlab.com for off-site MongoDB storage", "API for data access and passport/express-session for login authentication / sessions"
    ],
      githubLink: "BuddyTrakr-Angular2"
    },
    {
      title: 'Periodic Table',
      img: 'periodictable.png',
      link: 'https://miketruax.github.io/periodic-table/',
      about: "Interactive view of the periodic table. I made this as a way to improve upon a version I saw on reddit. Currently allows for sorting by several factors with more planned for the future.",
      techStack: ["Initially used Node get/fs to pull information from Wolfram Alpha", "SCSS for animations and styling", 
      "Angular 2/4 for components and pipes"],
      githubLink: "periodic-table"
    },
    {
      title: 'Movie Search',
      img: 'moviesearch.png',
      link: '/portfolio/movie-search',
      about: "Simple Movie Search App allowing utilizing the OMDBApi to pull information. Allows to search by any string and then see more information for any of the results.",
      techStack: ["Utilizes the OMDB API for JSONP calling", "NG2 http calls with rxjs for asynchronous calling"],
      githubLink: "miketruax-website-NG2/tree/master/src/app/portfolio/movie-search"
    },
    {
      title: 'Tic Tac Toe',
      img: 'tictactoe.png',
      link: '/portfolio/tic-tac-toe',
      about: "Tic-Tac-Toe app that originally was part of a Javascript course. I Switched the code over to Angular2/4 and reset the styling to allow for simpler code. Currently allows for both one and two players.",
      techStack: ["Utilizes TS and Angular 2 for interactivity", "Simple AI utilizing min-max calculations for best computer move", 
      "SCSS and Raw CSS for styling", "Utilizes jQuery for ease of DOM manipulation (in addition to NG2)"],
      githubLink: "miketruax/miketruax-website-NG2/tree/master/src/app/portfolio/tic-tac-toe"
    },
    {
      title: 'Who Was It?',
      img: 'whowasit.png',
      link: '/portfolio/who-was-it',
      about: "This was my first attempt at an Angular2/4 app. Super simple app that allows you to search for two or more movies to find actors who appeared in all of the movies.",
      techStack: ["Utilizes the OMDB API for JSONP calling", "Observables/ redux to compile actor information", 
      "Styling via minor SCSS and Bootstrap", "NG2 http calls with rxjs for asynchronous calling"],
      githubLink: "miketruax/miketruax-website-NG2/tree/master/src/app/portfolio/who-was-it"
    },
    {
      title: 'Image Tile Slider',
      img: 'imgtileslide.png',
      link: '/portfolio/tile-slide',
      about: "As weird as it sounds, I really haven't done a ton with canvas outside of just basic things. I figured I would try my hand at making a simple game and this is basically the result.",
      techStack: ["Uses a directive for each tile to only draw the needed part of the canvas.", "Predominantly done via SCSS @mixins for easy resizing", 
      "Allows for multiple levels of difficulty and grid sizes (can be expanded to include many more than available here."],
      githubLink: "miketruax/miketruax-website-NG2/tree/master/src/app/portfolio/tile-slide-game"
    }
  
  ]
  }

}
