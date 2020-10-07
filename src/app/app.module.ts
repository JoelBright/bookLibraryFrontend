import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorServiceService } from './author-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    BookCreateComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthorServiceService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
