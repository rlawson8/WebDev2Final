import { Injectable } from "@angular/core";
import { Review } from "./review.model";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})

export class ReviewService {
  private reviews: Review[] = [];

  constructor(private http: HttpClient){}

  getReviews(){

  }

  addReviews(title: string, description: string, stars: number, user:string){
    const review: Review ={id:null, title: title, description: description, stars: stars, user: user};
    this.http.post<{message:string, reviewId:string}>("http://localhost:3000/addReview",review)
    .subscribe((responseData)=>{
      const id=responseData.reviewId
      review.id = id
      this.reviews.push(review);
    })


  }
}
