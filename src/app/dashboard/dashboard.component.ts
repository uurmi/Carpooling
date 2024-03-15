import {Component, OnInit} from '@angular/core';
import {Post} from '../_models/post';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../_services/api.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  posts: Post[];
  currentPage = 1;
  itemsPerPage = 4;
  pageSize: number;
  searchForm: FormGroup;
  loading = false;
  postSubscription: Subscription;


  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private apiService: ApiService) {
  }

  ngOnInit() {
    let x = this;
    this.loading = true;
    this.posts = this.route.snapshot.data.resolve;
    // this.postSubscription = this.apiService.readPosts()
    //   .subscribe((posts: Post[]) => {
    //     this.posts = posts;
    //   });
    this.searchForm = new FormGroup({
      start_city: new FormControl(),
      end_city: new FormControl(),
      offset: new FormControl(),
      limit: new FormControl(),
      ta: new FormControl(),
      td: new FormControl(),
    });
    setTimeout(() => {
      x.loading = false;
    }, 1000);
    console.log(this.posts);
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.searchForm.controls;
  }

  search() {
    this.loading = true;
    this.f.offset.setValue(0);
    this.f.limit.setValue(100);
    this.f.ta.setValue('2019-10-14');
    this.f.td.setValue('2019-10-13');
    if (this.f.start_city.value === 'Sousse') {
      this.f.end_city.setValue('Tunis');
    } else if (this.f.start_city.value === 'Tunis') {
      this.f.end_city.setValue('Sousse');
    } else {
      // call readPosts
    }
    this.postSubscription = this.apiService.filteredReadPosts(this.f.start_city.value, this.f.end_city.value, this.f.offset.value, this.f.limit.value, this.f.ta.value, this.f.td.value)
      .subscribe((posts: any[]) => {
        this.posts = posts;
      });
    this.loading = false;
  }
}
