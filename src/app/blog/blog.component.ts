import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { DataService } from '../_services/data.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

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
  isActive: boolean = false;
  blogIds:any[];
  blogId:any;
  currentBlogPost:any;
  comment:any;
  blogComments:any;
  userComment:any;
  replyComment:any;
  discussionId:any
  showCommentReplies:boolean = false;
  reply:any;

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { 

  }
  
  submitComment(currentBlogId){

    this.comment ={content:this.userComment, discussionId:currentBlogId}
    console.log(this.comment)
    this.dataService.postComment(this.comment).subscribe((data)=>{
      console.log(currentBlogId)
    }) 
  }

  submitReply(commentId){
    this.reply = {
      id:commentId, 
      reply:{ 
        content:this.replyComment
      }
    }
    this.dataService.postReply(this.reply).subscribe((data)=>{
      console.log(commentId)
    }) 
  }

  createReply(comment){
    comment.createReply = true
  }

  viewReply(comment){
    if (comment.viewReply == true){
      comment.viewReply = false
    }else{
      comment.viewReply = true
    }
  }
  
  loadBlog(){
    this.dataService.getBlogPostById(this.blogId).subscribe((blogContent)=>{
      this.currentBlogPost = blogContent.blog[0]
      console.log("current blog content",this.currentBlogPost)
    })
    this.dataService.getComments(this.discussionId).subscribe((comments)=>{
      this.blogComments = comments.comments
      console.log("current blog comments",this.blogComments)
    })
  }


  ngOnInit() {
    // Gets all of the blog Ids
    this.blogId = {_id:this.activatedRoute.snapshot.params['id']}
    this.discussionId = {discussionId:this.activatedRoute.snapshot.params['id']}
    console.log(this.blogId)
    this.dataService.getAllBlogPostsIds().subscribe((allBlogIds)=>{
      this.blogIds = allBlogIds
      console.log(this.blogIds)
      if (this.blogId._id === ":id"){
        this.router.navigateByUrl('blog/'+this.blogIds[0]._id);
        this.blogId = {_id:this.blogIds[0]._id}
        this.discussionId = {discussionId:this.blogIds[0]._id}
        console.log("true")
        this.loadBlog()
      }else{
        this.loadBlog()
      }
    })


  }

}
