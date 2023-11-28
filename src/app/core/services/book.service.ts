import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private localStorageKey = 'books';

  private getBooksFromLocalStorage(): Book[] {
    const storedBooks = localStorage.getItem(this.localStorageKey);
    return storedBooks ? JSON.parse(storedBooks) : [];
  }

  private saveBooksToLocalStorage(books: Book[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(books));
  }

  getBooks(): Book[] {
    return this.getBooksFromLocalStorage();
  }

  addBook(book: Book): void {
    const books = this.getBooksFromLocalStorage();
    book.id = books.length + 1;
    books.push(book);
    this.saveBooksToLocalStorage(books);
  }

}
