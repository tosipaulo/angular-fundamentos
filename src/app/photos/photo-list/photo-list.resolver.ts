import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PhotoService } from './../photo/photo.service';
import { Photo } from '../photo/photo';

@Injectable()
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

  constructor(private photoService: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params.userName

    return this.photoService.listFromUserPaginated(userName, 1);
  }
}
