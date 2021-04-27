import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/parts/nav-bar/nav-bar.component';
import { SocialBarComponent } from './components/parts/social-bar/social-bar.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SocialBarComponent,
    MainComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
