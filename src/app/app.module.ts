import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ListbookComponent } from './components/books/listbook/listbook.component';

import { AuthorService } from './core/services/author.service';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ListbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    CommonModule,
    FormsModule
  ],
  providers: [DatePipe,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
