import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { ListbookComponent } from './components/books/listbook/listbook.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/authors' },
  { path: 'authors', component: AuthorsComponent },
  { path: 'books', component: ListbookComponent },
  { path: '**', redirectTo: '/authors' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
