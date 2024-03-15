import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiService} from '../_services/api.service';
import {Post} from '../_models/post';
import {map} from 'rxjs/operators';

@Injectable()
export class Resolver implements Resolve<Observable<Post[]>> {

  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.readPosts().pipe(
      map(resolver => resolver)
    );
  }

}
