import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Click} from './click';
import {tap} from 'rxjs/operators';

@Injectable()
export class ButtonService {

  private API_URL = 'http://localhost:8000/phrase';

  constructor(private http: HttpClient) { }

  // Get phrase from the  server

  onClickMe (): Observable<Click> {
    return this.http.get<Click>(this.API_URL).pipe(
      tap((x) => console.log(x))
    );
  }
}
