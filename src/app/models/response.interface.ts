import {Movie} from "./movie.interface";

export interface SearchResponse<T> {
    page?: number;
    results?: Array<T>;
    total_results?: number;
    total_pages?: number;
}

