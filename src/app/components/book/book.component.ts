import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(private bookService: BookService, private route: ActivatedRoute) { }
  public book
  public order = {
    name: '',
    status: 'pending',
    phone: '',
    address: '',
    book: 0
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.bookService.getBook(id).subscribe(book => {
      this.book = book
    })
  }
  onSubmit(): void {
    this.order.book = this.book.id
    this.bookService.orderBook(this.order).subscribe()
  }
}
