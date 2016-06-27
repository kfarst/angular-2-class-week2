import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { AppSettings } from './app_settings';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Movie {
  id: number;
  title: string;
  year: number;
  mpaa_rating: string;
  runtime: number;
  release_dates: any[];
  ratings: any[];
  synopsis: string;
  posters: any[];
  abridged_cast: any[];
  alternate_ids: any[];
  links: any[];
}

class BaseResource {
  constructor(private settings: AppSettings) {}

  url(resourceType: string, categoryType: string): string {
    return `/api/public/v1.0/lists/${resourceType}/${categoryType}.json?apikey=${this.settings.API_KEY}`;
  }

  protected handleError(error: any) {
    console.error('An error occurred', error);
    return Observable.throw(error);
  }
}

@Injectable()
export class MoviesApi extends BaseResource {
  constructor(private http: Http, settings: AppSettings) {
    super(settings);
  }

  get(options: any): Observable<Movie[]> {
    return this.http.get(this.url('movies', options.type.replace('-', '_'))).
      map((res: Response) => res.json()).
      catch(this.handleError);
  }
}

@Injectable()
export class RentalsApi extends BaseResource {
  constructor(private http: Http, settings: AppSettings) {
    super(settings);
  }

  get(options: any): Observable<Movie[]> {
    return this.http.get(this.url('dvds', options.type.replace('-', '_'))).
      map((res: Response) => res.json()).
      catch(this.handleError);
  }
}
