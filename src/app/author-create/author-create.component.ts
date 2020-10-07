import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorServiceService } from '../author-service.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  author: Author = new Author("","");
  message:any;

  constructor(private service:AuthorServiceService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.author);
    resp.subscribe((data)=>this.message=data);
  }
    
}
