import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'
import { TvShow } from '../http-service/http-service.component';

@Component({
  selector: 'app-discover-show-list',
  standalone: true,
  imports: [RouterModule, NgFor],
  template: `
  <div>
    <section class="listing" *ngFor="let show of tvShow?.results; index as i;">
      <div class="show-image">
        <img [src]="show.poster_path" alt="Movie Poster" class="poster-image">
      </div>
      <h2 class="show-name">Show name: {{ show.name }}</h2>
      <p class="show-overview">{{ show.overview}}</p>
      <p class="show-vote-average">The vote average for this show is: {{show.vote_average }} </p>
      <a [routerLink]="['/discover-show', show.id, this.page, this.airDate, this.genre]">Link to {{ show.name }}</a>
    </section>
  </div>
  `,
  styleUrls: ['./show-list.component.sass', '../../styles.sass']
})
export class ShowListComponent {

  @Input() tvShow!: TvShow;
  @Input() genre!: number;
  @Input() airDate!: string;
  @Input() page!: number;

  constructor() {
  }

}
