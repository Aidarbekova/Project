import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private bookService: BookService) { }

  public book = {
    name: '',
    genre: '1',
    author: '',
    description: '',
    image: '',
    price: 0,
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.bookService.create(this.book)
  }

}
