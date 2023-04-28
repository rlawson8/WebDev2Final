import { Injectable } from '@angular/core';
import { DetailedReview, Review } from './review.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private reviews: Review[] = [];

  constructor(private http: HttpClient) {}

  getReviews(): Observable<DetailedReview[]> {
    return this.http.get('http://localhost:3000/reviews').pipe(
      map(
        (response: {
          status: number;
          data: {
            createdAt: string;
            description: string;
            stars: number;
            title: string;
            updatedAt: string;
            user: string;
            __v: number;
            _id: string;
          }[];
        }) => {
          const detailedReviews: DetailedReview[] = response.data.map(
            (review) => {
              return {
                id: review._id,
                title: review.title,
                description: review.description,
                stars: review.stars,
                user: review.user,
                createdAt: new Date(review.createdAt),
              };
            }
          );
          return detailedReviews;
        }
      )
    );
  }

  addReviews(title: string, description: string, stars: number, user: string) {
    const review: Review = {
      id: null,
      title: title,
      description: description,
      stars: stars,
      user: user,
    };
    this.http
      .post<{ message: string; reviewId: string }>(
        'http://localhost:3000/addReview',
        review
      )
      .subscribe((responseData) => {
        const id = responseData.reviewId;
        review.id = id;
        this.reviews.push(review);
      });
  }
}
