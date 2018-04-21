import { Injectable } from '@angular/core';
import { Rug } from '../shared/rug';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class RugService {

  constructor(private restangular: Restangular) { }

  getRugs(): Observable<Rug[]> {
    return this.restangular.all('rugs').getList();
  }

  createNewRug(newRug: Rug){
    return  this.restangular.all('rugs').post(newRug);
  }

  updateRug(rug, editrug){
    console.log("in the function");
    console.log(rug);
    // editrug["_id"] = rug._id;
    var er = this.restangular.one('rugs', rug._id).remove();

  }

  deleteRug(id){
    var er = this.restangular.one('rugs', id).remove();

  }

  getRug(id: number): Observable<Rug> {
    return  this.restangular.one('rugs', id).get();
  }

  getRugIds(): Observable<number[]> {
    return this.getRugs()
      .map(rugs => { return rugs.map(rug => rug.id); } )
      .catch(error => { return Observable.of(error); });
  }

}
