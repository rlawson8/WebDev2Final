import { Component, Input } from '@angular/core';
import { DetailedReview } from '../../review.model';

@Component({
  selector: 'review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.css'],
})
export class ReviewListItemComponent {
  @Input('review') review: DetailedReview;

  formatDate = (date: Date) => {
    const now = new Date();
    const elapsed = now.getTime() - date.getTime();
    let elapsedString = '';
    switch (true) {
      case elapsed < 1000:
        elapsedString = `1 second ago`;
        break;
      case elapsed < 60000:
        const seconds = Math.floor(elapsed / 1000);
        elapsedString = `${seconds} ${
          seconds === 1 ? 'second' : 'seconds'
        } ago`;
        break;
      case elapsed < 3600000:
        const minutes = Math.floor(elapsed / 60000);
        elapsedString = `${minutes} ${
          minutes === 1 ? 'minute' : 'minutes'
        } ago`;
        break;
      case elapsed < 86400000:
        const hours = Math.floor(elapsed / 3600000);
        elapsedString = `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        break;
      default:
        const days = Math.floor(elapsed / 86400000);
        elapsedString = `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
    return elapsedString;
  };
}

const now = new Date();
const twoHoursAgo = new Date(now.getTime() - 7200000);
