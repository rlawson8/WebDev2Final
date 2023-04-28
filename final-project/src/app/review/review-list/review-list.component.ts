import { Component, OnInit } from '@angular/core';
import { ReviewListItemComponent } from './review-list-item/review-list-item.component';
import { DetailedReview } from '../review.model';
import { ReviewService } from '../review.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent {
  constructor(public reviewService: ReviewService) {}

  public masonryOptions: NgxMasonryOptions = {
    resize: true,
    initLayout: true,
  };

  reviews: DetailedReview[];
  isLoading: boolean = false;

  ngOnInit() {
    this.isLoading = true;
    this.reviewService.getReviews().subscribe((reviews: DetailedReview[]) => {
      console.log(reviews);
      this.reviews = reviews;
      this.isLoading = false;
    });
  }
}
