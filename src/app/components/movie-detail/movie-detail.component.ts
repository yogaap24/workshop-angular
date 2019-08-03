import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie;
  @Output() onClose = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  closeMovie() {
    this.onClose.emit('Close Movie');
  }

}
