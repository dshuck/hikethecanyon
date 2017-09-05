import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerPic = '';
  headerCollection = {
    '/':'../../assets/img/hero-BrightAngelTrailDay4LookingBack.jpg',
    '/train':'../../assets/img/hero-stairs.jpg'
  };

  constructor(private router:Router,) {
    router.events.subscribe((val) => {

      try {
        this.headerPic = this.headerCollection[ router.url ];
      }
      catch( e )  {
        this.headerPic = this.headerCollection['/'];
      }

      console.log( 'bg pic is ' + this.headerPic );
      // see also
      console.log( 'ROUTE LOG: ');
      console.log(val instanceof NavigationEnd)
    });
  }

  ngOnInit() {
  }

}
