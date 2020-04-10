import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-detailed',
  templateUrl: './genre-detailed.component.html',
  styleUrls: ['./genre-detailed.component.css']
})
export class GenreDetailedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService, private genreService: GenreService) { }
  public books = []
  public genre

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.bookService.getBooks().subscribe(data => {
        this.books = data.filter(book => book.genre == param.id)
      })

      this.genreService.getGenres().subscribe(data => {
        this.genre = data.find(genre => genre.id == param.id)
      })
    })

  }

  

}
