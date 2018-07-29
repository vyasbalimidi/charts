import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EcoService {

  constructor(private http: HttpClient) { }

  downloadEcos() {
    return this.http.get("http://www.mocky.io/v2/5b5dfaec32000010001cfa9d",
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'en',
          'SM_USER': 'vbalimi'
        })
      })
      .map(ecos => ecos);
  }
}
