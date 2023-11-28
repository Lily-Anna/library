import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListbookComponent implements OnInit {
columnName: string[];
  constructor(private bookService: BookService) {
    this.columnName = ['id', 'автор', 'Название', 'Издатель', 'год']
   }

   books: Book[] = [];

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addBook(): void {
    const newBook: Book = {
      id: 0,
      title: 'Новая книга',
      idAuthor: 0,
      publisher:'',
      year: new Date()
    };

    this.bookService.addBook(newBook);
    this.books = this.bookService.getBooks();
  }

}
