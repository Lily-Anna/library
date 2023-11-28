import { Injectable } from '@angular/core';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private localStorageKey = 'authors';

  private getAuthorsFromLocalStorage(): Author[] {
    const storedAuthors = localStorage.getItem(this.localStorageKey);
    return storedAuthors ? JSON.parse(storedAuthors) : [];
  }

  private saveAuthorsToLocalStorage(authors: Author[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(authors));
  }

  getAuthors(): Author[] {
    return this.getAuthorsFromLocalStorage();
  }

  addAuthor(author: Author): void {
    const authors = this.getAuthorsFromLocalStorage();
    author.id = authors.length + 1;
    authors.push(author);
    this.saveAuthorsToLocalStorage(authors);
  }
}
