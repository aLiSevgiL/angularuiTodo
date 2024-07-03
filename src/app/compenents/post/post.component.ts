import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  standalone:true
})
export class PostComponent implements OnInit {
 @Input() userId?: number;

  posts: Post[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.userId) {
      this.getPostsByUserId(this.userId);
    }
  }

  getPostsByUserId(userId: number) {
    this.httpClient.get<Post[]>(`http://localhost:3000/post/getPostsByUserId/${userId}`).subscribe(posts => {
      this.posts = posts;
    });
  }
}
