import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {
  constructor(private http:HttpClient) { }

  public doRegistration(author){
    return this.http.post("http://localhost:8080/api/authors",author,{responseType:'text' as 'json'});
  }

  public getAuthors(){
    return this.http.get("http://localhost:8080/api/authors");
  }

  public getAuthorByName(name){
    return this.http.get("http://localhost:8080/api/authors/"+name);
  }

  public deleteAuthor(id){
    return this.http.delete("http://localhost:8080/api/authors/"+id);
  }
}
