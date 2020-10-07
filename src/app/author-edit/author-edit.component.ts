import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  author:any;
  name:string;
  constructor(private service:AuthorServiceService) { }

  ngOnInit() {
    let resp=this.service.getAuthors();
    resp.subscribe((data)=>this.author=data);
  }

  deleteAuthor(id:number){
    this.service.deleteAuthor(id);
    let resp=this.service.getAuthors();
    resp.subscribe((data)=>this.author=data);
  }

  findAuthorByName(){
    let resp=this.service.getAuthorByName(name);
    resp.subscribe((data)=>this.author=data);
  }
}
