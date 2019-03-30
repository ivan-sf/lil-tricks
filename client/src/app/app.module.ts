import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TrickFormComponent } from './components/trick-form/trick-form.component';
import { TrickListComponent } from './components/trick-list/trick-list.component';
import { AboutComponent } from './components/about/about.component'

import { TrickService } from './services/trick.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TrickFormComponent,
    TrickListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TrickService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
