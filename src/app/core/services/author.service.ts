import { Injectable } from '@angular/core';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authors: Author[] = [];

  constructor() {
    // Инициализация списка авторов
    this.authors = [
      { id: 1, lastName: 'Пушкин', name: 'Александр', middleName: 'Сергеевич', birthdate: new Date('1799-06-06') },
      { id: 2, lastName: 'Лермонтов', name: 'Михаил', middleName: 'Юрьевич', birthdate: new Date('1814-10-15') },
      { id: 3, lastName: 'Толстой', name: 'Лев', middleName: 'Николаевич', birthdate: new Date('1828-09-09') },
      { id: 4, lastName: 'Достоевский', name: 'Федор', middleName: 'Михайлович', birthdate: new Date('1821-11-11') }
    ];
  }

  getAuthors(): Author[] {
    return this.authors;
  }

  addAuthor(author: Author): void {
    // Генерация уникального id для нового автора
    const newId = this.generateUniqueId();
    author.id = newId;

    // Добавление нового автора в список
    this.authors.push(author);
  }

  private generateUniqueId(): number {
    // Генерация уникального id на основе текущего времени
    return Math.floor(Date.now() * Math.random());
  }
}
