import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from 'src/app/models/movie.interface';
import {SearchResponse} from 'src/app/models/response.interface';
import {searchService} from 'src/app/providers/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResponse!: SearchResponse<any>;

  constructor(private searchService: searchService) { }

  ngOnInit(): void {
  }

  search = (query: string, searchType: string) => {
    let endpoit: Observable<SearchResponse<any>> | undefined;
    if (query.length > 2) {
      if (searchType) {
        switch (searchType) {
          case 'collections':
            endpoit = this.searchService.searchCollections(query);
            break;
          case 'companies':
            endpoit = this.searchService.searchCompanies(query);
            break;
          case 'movies':
            endpoit = this.searchService.searchMovies(query);
            break;
          case 'people':
            endpoit = this.searchService.searchPeople(query);
            break;
          case 'keywords':
            endpoit = this.searchService.searchKeywords(query);
            break;
          case 'tv':
            endpoit = this.searchService.searchTVShows(query);
            break;
        }

        endpoit?.subscribe({  
          next: (response: SearchResponse<any>) => {
            this.searchResponse = response
          }
        })

      }
    } else {
      alert('inserire almeno tre caratteri')
    }
  }
}
