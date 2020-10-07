import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AppComponent } from './app.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {path:"", component:AppComponent},
  {path:"author_create", component:AuthorCreateComponent},
  {path:"author_edit", component:AuthorEditComponent},
  {path:"book_create", component:BookCreateComponent},
  {path:"book_edit", component:BookEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
