import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Movie} from "src/app/models/movie.interface";
import {SearchResponse} from "src/app/models/response.interface";

@Injectable({
    providedIn:'root'
})
export class searchService {
    baseUrl: string = 'https://api.themoviedb.org/3/search'

    constructor(private http: HttpClient) { }

    searchMovies(query: string): Observable<SearchResponse<Movie>> {
        const params: HttpParams = new HttpParams().append('query',query).append('api_key','3d5911a30c7886f6ba23d9942387e1aa');

        return this.http.get<SearchResponse<Movie>>(`${this.baseUrl}/movie`,{params})
    }

    searchCollections(query: string): Observable<SearchResponse<any>> {
        const params: HttpParams = new HttpParams().append('query',query).append('api_key','3d5911a30c7886f6ba23d9942387e1aa');

        return this.http.get<SearchResponse<Movie>>(`${this.baseUrl}/collections`,{params})
    }

    searchCompanies(query: string): Observable<SearchResponse<any>> {
        const params: HttpParams = new HttpParams().append('query',query).append('api_key','3d5911a30c7886f6ba23d9942387e1aa');

        return this.http.get<SearchResponse<Movie>>(`${this.baseUrl}/company`,{params})
    }

    searchKeywords(query: string): Observable<SearchResponse<any>> {
        const params: HttpParams = new HttpParams().append('query',query).append('api_key','3d5911a30c7886f6ba23d9942387e1aa');

        return this.http.get<SearchResponse<Movie>>(`${this.baseUrl}/keywords`,{params})
    }

    searchPeople(query: string): Observable<SearchResponse<any>> {
        const params: HttpParams = new HttpParams().append('query',query).append('api_key','3d5911a30c7886f6ba23d9942387e1aa');

        return this.http.get<SearchResponse<Movie>>(`${this.baseUrl}/person`,{params})
    }

    searchTVShows(query: string): Observable<SearchResponse<any>> {
        const params: HttpParams = new HttpParams().append('query',query).append('api_key','3d5911a30c7886f6ba23d9942387e1aa');

        return this.http.get<SearchResponse<Movie>>(`${this.baseUrl}/tv`,{params})
    }
}