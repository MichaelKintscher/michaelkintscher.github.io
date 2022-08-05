import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileGetterService {

  constructor(public http: HttpClient) { }

  getFile(url: string): Observable<Record<string, any>> {
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
