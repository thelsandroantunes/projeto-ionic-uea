import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare var navigator: any;
declare var Connection: any;

@Injectable()
export class NetworkProvider {



  constructor(private platform: Platform) {}

  get isOnLine(): boolean {
    if (this.platform.is('cordova')) {
      if (navigator.connection && navigator.connection.type) {
        return (navigator.connection.type != Connection.UNKKONW && navigator.connection.type != Connection.NONE);
      }else{
        return true;
      }
    }else{
      navigator.onLine;
    }
  }

}
