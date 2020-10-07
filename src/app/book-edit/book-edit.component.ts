import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book:any
  id:number
  constructor(private service:BookService) { }

  ngOnInit() {
    let resp=this.service.getBooks();
    resp.subscribe((data)=>this.book=data);
  }

  deleteAuthor(id:number){
    this.service.deleteBook(id);
    let resp=this.service.getBooks();
    resp.subscribe((data)=>this.book=data);
  }

  findAuthorById(){
    let resp=this.service.getBookById(this.id);
    resp.subscribe((data)=>this.book=data);
  }
}
