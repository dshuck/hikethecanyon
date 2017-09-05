import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import {RouterModule, Routes} from "@angular/router";
import { TrainComponent } from './train/train.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes:Routes =[
  {path:'',component:HomeComponent},
  {path:'train',component:TrainComponent},
  { path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedContainerComponent,
    TrainComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
