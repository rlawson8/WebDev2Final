import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ReviewService } from "../review.service";

@Component({
  selector:'review-create',
  templateUrl: './review-create.component.html',
  styleUrls:['../styles.css']
})
export class ReviewCreateComponent {

  constructor(public reviewsService: ReviewService){}

  onAddReview(form: NgForm){
    this.reviewsService.addReviews(form.value.reviewTitle, form.value.reviewBody, form.value.reviewRating, form.value.reviewName);
    form.resetForm();
  }
}
