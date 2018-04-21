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

  updateRug(rug){
    console.log("in the function");
    console.log(rug);
    this.restangular.one('object', rug._id).get().then(function(obj) {
      obj.something = true;
      obj.put();
    });
    // return this.restangular.all('rugs', rug._id)
    //   .then(function(editRug){
    //     var editRug = editRug;
    //     console.log("dsfads");
    //     console.log(editRug);
    //     editRug.name = rug.name;
    //     editRug.description = rug.description;
    //     editRug.image = rug.image;
    //     editRug.price = rug.price;
    //
    //     editRug.put();
    //   });
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
