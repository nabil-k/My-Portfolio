import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts:any;
  blogComments:any;
  userComment:any;
  newComment:any

  constructor(private dataService: DataService) { 
    this.dataService.getBlogPosts()
      .subscribe((data) => {
        this.blogPosts = data
        console.log(this.blogPosts)
      });
  }

  submitComment(blogId){
    console.log(this.userComment)
    this.newComment = {
      "_id":blogId,
      "comment":this.userComment
    }
    console.log(blogId)
    this.dataService.postComment(this.newComment).subscribe()
  }

  ngOnInit() {
  }

}
