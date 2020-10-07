import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  public saveRegistration(book){
    return this.http.post("http://localhost:8080/api/books",book,{responseType:'text' as 'json'});
  }

  public getBooks(){
    return this.http.get("http://localhost:8080/api/books");
  }

  public getBookById(id){
    return this.http.get("http://localhost:8080/api/books_id/"+id);
  }

  public deleteBook(id){
    return this.http.delete("http://localhost:8080/api/books/"+id);
  }
}
