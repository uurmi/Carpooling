import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../_services';
import {Post} from '../_models/post';
import {ApiService} from '../_services/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  post: Post;
  editing = false;
  editForm: FormGroup;
  loading = false;
  logged = false;
  postSubscription: Subscription;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const x = this;
    this.loading = true;
    this.postSubscription = this.apiService.readPost(this.route.snapshot.params.id)
      .subscribe((post: Post) => {
        this.post = post[0];
      });
    if (this.authenticationService.currentUserValue) {
      this.logged = true;
    }
    setTimeout(() => {
      x.loading = false;
    }, 1000);
  }

  get f() {
    return this.editForm.controls;
  }

  onEdit() {
    this.editing = true;
    this.editForm = this.formBuilder.group({
      tstart: [this.post.tstart, Validators.required],
      start_city: [this.post.start_city, Validators.required],
      finish_city: [this.post.finish_city, Validators.required],
      nb_places: [this.post.nb_places, Validators.required]
    });
  }

  onFinish() {
    const x = this;
    let tempPost = this.post;
    setTimeout(() => {
      x.editing = false;
    }, 1000);
    tempPost.tstart = this.f.tstart.value;
    tempPost.start_city = this.f.start_city.value;
    tempPost.finish_city = this.f.finish_city.value;
    tempPost.nb_places = this.f.nb_places.value;
    this.apiService.updatePost(this.route.snapshot.params.id, tempPost).subscribe();
  }

  onCancel() {
    this.editing = false;
    document.execCommand('Stop');
  }

  onDelete() {
    this.apiService.deletePost(this.route.snapshot.params.id);
  }
}
