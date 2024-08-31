import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjAwODhhNjIxOTVlZTU4YThlMjdhZmNiNWI2MjliOSIsIm5iZiI6MTcyNDk2MDg5MS42ODczNjMsInN1YiI6IjY2ZDBjZWI0M2UxYWI0NWNlNWIxMzU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uH408-7985rLaay02dzJHYmrvc3ggzmsxLU1ZdkuIC4'
    }),
  };

  constructor(private http: HttpClient) {}

  getPopularMovies(page:any): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, this.httpOptions);
  }
}
