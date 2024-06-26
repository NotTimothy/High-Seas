import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'
import { Movie } from '../http-service/http-service.component';

@Component({
  selector: 'app-now-playing-movie-list',
  standalone: true,
  imports: [RouterModule, NgFor],
  template: `
  <div>
    <section class="listing" *ngFor="let movie of movie?.results; index as i;">
      <div class="show-image">
        <img [src]="movie.poster_path" alt="Show Poster" class="poster-image">
      </div>
      <h2 class="show-name">Show name: {{ movie.title }}</h2>
      <p class="show-overview">{{ movie.overview}}</p>
      <p class="show-vote-average">The vote average for this show is: {{movie.vote_average }} </p>
      <a [routerLink]="['/now-playing/movies/details', movie.id, this.page]">Link to {{ movie.title }}</a>
    </section>
  </div>
  `,
  styleUrls: ['./now-playing-movies-list.component.sass', '../../styles.sass']
})
export class NowPlayingMoviesListComponent {

  @Input() movie!: Movie;
  @Input() page!: number;
  @Input() query!: string;

  constructor() {
  }

}
