import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as querystring from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'http://www.omdbapi.com/?apikey=ef9b35ee&';

  constructor(
      private http: HttpClient
  ) { }

  getMovies(params) {
      let url = this.apiUrl + querystring.stringify(params);

      return this.http.get(url);
  }
}
