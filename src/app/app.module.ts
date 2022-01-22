import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './angular-routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,ProfileComponent,NotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
