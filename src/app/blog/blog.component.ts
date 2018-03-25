import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Router } from '@angular/router';


interface BlogType{
  _id:string;
  title:string;
  author:string;
  content:string;
  created:string;
  comments:string[];
}
class Blog{
  _id:string;
  title:string;
  author:string;
  content:string;
  created:string;
  comments:string[];
  constructor(blogObj:BlogType){
    this._id = blogObj._id
    this.title = blogObj.title
    this.author = blogObj.author
    this.content = blogObj.content
    this.created = blogObj.created
    this.comments = blogObj.comments
  }
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  blogPosts:any;
  currentBlogPost:any;
  blogComments:any;
  userComment:any;
  newComment:any;
  carouselCounter:number = 0;

  constructor(private dataService: DataService, private router: Router) { 

  }

  // Allows user to scroll through other blogs
  previousBlog(){
    this.carouselCounter -= 1;
    this.currentBlogPost = new Blog(this.blogPosts[this.carouselCounter])
    console.log(this.carouselCounter)
    console.log(this.currentBlogPost._id)
    this.router.navigateByUrl('blog/'+this.currentBlogPost._id);
  }
  nextBlog(){
    this.carouselCounter += 1;
    this.currentBlogPost = new Blog(this.blogPosts[this.carouselCounter])
    console.log(this.carouselCounter)
    console.log(this.currentBlogPost._id)
    this.router.navigateByUrl('blog/'+this.currentBlogPost._id);
  }

  // Submits Comment
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
    this.dataService.getBlogPosts()
    .subscribe((data) => {
      this.blogPosts = data
      this.currentBlogPost = this.blogPosts[this.carouselCounter]
      console.log(this.currentBlogPost)
      console.log(this.blogPosts)
      this.router.navigateByUrl('blog/'+this.currentBlogPost._id);
    });
  }

}
