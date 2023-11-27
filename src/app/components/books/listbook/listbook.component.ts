import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListbookComponent implements OnInit {
columnName: string[];
  constructor() {
    this.columnName = ['id', 'автор', 'Название', 'Издатель', 'год']
   }

  ngOnInit() {
  }

}
