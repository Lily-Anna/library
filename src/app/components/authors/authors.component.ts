import { Component } from '@angular/core';
import { Author } from 'src/app/core/models/author';
import { AuthorService } from 'src/app/core/services/author.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors: Author[] = [];
  newAuthor: Author = { id:0, lastName: '', name: '', middleName: '', birthdate: new Date('0000-00-00')  };

  constructor(private authorsService: AuthorService) {
    this.authors = authorsService.getAuthors();
  }

  addAuthor() {
    if (this.newAuthor.name && this.newAuthor.birthdate) {
      this.authorsService.addAuthor(this.newAuthor);
      this.newAuthor = {id:0,lastName: '', name: '', middleName: '', birthdate: new Date('0000-00-00')};
    }
  }

}
