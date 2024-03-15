import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiService} from '../_services/api.service';
import {Post} from '../_models/post';
import {map} from 'rxjs/operators';

@Injectable()
export class PostResolver implements Resolve<Observable<Post>> {
  id: number;

  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.id = parseInt(route.paramMap.get('id'), 10);
    return this.api.readPost(this.id).pipe(
      map(postResolver => postResolver)
    );
  }

}
