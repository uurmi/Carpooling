import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../_models/post';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = environment.apiUrl;
  filteredAPI = environment.filteredApi;
  singlePostAPI = environment.singlePostApi;
  updateAPI = environment.updateApi;

  constructor(private httpClient: HttpClient) {
  }

  readPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.PHP_API_SERVER}`);
  }

  readPost(id: number) {
    return this.httpClient.get<Post>(`${this.singlePostAPI}/` + id);
  }

  filteredReadPosts(start_city: any, end_city: any, offset: any, limit: any, ta: any, td: any) {
    return this.httpClient.get<any>(`${this.filteredAPI}` + '?start_city=' + start_city + '&end_city=' + end_city + '&offset=' + offset + '&limit=' + limit + '&ta=' + ta + '&td=' + td);
  }

  createPost(post: Post) {
    return this.httpClient.post(`${this.PHP_API_SERVER}/create`, post);
  }

  updatePost(id: number, post: any) {
    return this.httpClient.put(`${this.updateAPI}/` + id, post);
  }

  deletePost(id: number) {
    return this.httpClient.delete(`${this.PHP_API_SERVER}/delete/?id=${id}`);
  }

}
