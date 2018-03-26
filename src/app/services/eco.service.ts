import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EcoService {

  constructor(private http: HttpClient) { }

  downloadEcos() {
    return this.http.get("http://53.88.75.34:9081/nc0/api/safira/eco/find?filter-tasks=present",
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
