import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable()
export class RecetaService {

    observable:Observable<any>;
  data: any;

  constructor(public http: HttpClient) {
    this.data = null;
  }

  getRecetas(){

    if (this.data) {
      return Promise.resolve(this.data);
    }

    this.observable=this.http.get('http://localhost:3000/todasRecetas');

    return this.observable.toPromise();
    /*
    return new Promise(resolve => {
        console.log("intenta algo");
      this.http.get('http://localhost:3000/todasRecetas')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });*/
  }
}
