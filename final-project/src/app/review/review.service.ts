import { Injectable } from "@angular/core";
import { Review } from "./review.model";

@Injectable({providedIn: 'root'})

export class ReviewService {
  getReviews(){

  }

  addReviews(title: string, description: string, stars: number, user:string){

  }
}
