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
    address: ''
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.bookService.getBooks().subscribe(data => {
      this.book = data.find(book => book.id == parseInt(id))    
    })
  }


  onSubmit(): void {
    this.bookService.orderBook(this.order)
  }
}
