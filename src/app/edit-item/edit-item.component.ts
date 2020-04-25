import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  public order
  constructor(private bookService: BookService, private route: ActivatedRoute) { }
  orderInfo = {
    id: 0,
    status: ''
  }
  public id = this.route.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.bookService.getOrder(this.id).subscribe(data => {
      this.order = data
      this.orderInfo.status = data.status
    })
  }
  onUpdate() {
    this.orderInfo.id = parseInt(this.id)
    this.bookService.updateOrder(this.orderInfo).subscribe()
  }
}
