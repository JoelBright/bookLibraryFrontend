import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = new Book("","", "", "", 0);
  message:any;

  constructor(private service:BookService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp=this.service.saveRegistration(this.book);
    resp.subscribe((data)=>this.message=data);
  }
    
}
