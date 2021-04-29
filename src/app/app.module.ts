import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/parts/nav-bar/nav-bar.component';
import { SocialBarComponent } from './components/parts/social-bar/social-bar.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { BioComponent } from './components/pages/bio/bio.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { CallbackformComponent } from './components/parts/callbackform/callbackform.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { CardComponent } from './components/parts/card/card.component';
import { CardlistComponent } from './components/pages/cardlist/cardlist.component';

import { gsap } from 'gsap';
import { AppRoutingModule } from './app-routing.module';
import { ProjectdetailComponent } from './components/pages/projectdetail/projectdetail.component';
import { GalleryComponent } from './components/parts/gallery/gallery.component';
import {DragScrollModule} from 'ngx-drag-scroll'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SocialBarComponent,
    MainComponent,
    HeaderComponent,
    BioComponent,
    ContactsComponent,
    CallbackformComponent,
    FooterComponent,
    CardComponent,
    CardlistComponent,
    ProjectdetailComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    DragScrollModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  ngOnInit() {
    
  }
 }
