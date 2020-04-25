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
    id: 0,
    name: '',
    genre: '',
    author: '',
    description: '',
    image: '',
    price: 0,
  }
  public orders = []
  ngOnInit(): void {
    this.bookService.getOrders().subscribe(
      orders => {this.orders = orders}
    )
  }
  onCreate(): void {
    this.bookService.create(this.book).subscribe()
  }
  onDel(id): void {
    this.bookService.delete(id).subscribe()
  }
}
