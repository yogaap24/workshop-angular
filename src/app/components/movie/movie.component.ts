import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit,  AfterViewInit{
  movies = [];
  selectedMovie: any;
  filter: any = {}

  @ViewChild('s', { static: false}) s;

  constructor(
      private movieService: MovieService
  ) { }

  ngOnInit() {
        this.filter.s = '';
        this.filter.type = 'movie';
        this.filter.page = 1;

        this.getMovies({});
  }

  ngAfterViewInit() {
    this.s.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((result) => {
        this.filter.page = 1;
        this.getMovies({})
      })
  }

  getMovies(params) {
    if (!params.s) { params.s = this.filter.s; }
    if (!params.type) { params.type = this.filter.type; }
    if (!params.page) { params.page = this.filter.page; }

  this.movieService.getMovies(params)
      .subscribe(
        result => {
            this.movies = result.Search;
          }
      )
  }

  showMovie(movie) {
    console.log(movie);
    this.selectedMovie = movie;
  }

  closeMovie(event) {
    console.log(event);
    this.selectedMovie = undefined;
  }

}
