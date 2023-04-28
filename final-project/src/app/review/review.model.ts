export interface Review {
  id: string;
  title: string;
  description: string;
  stars: number;
  user: string;
}

export interface DetailedReview {
  id: string;
  title: string;
  description: string;
  stars: number;
  user: string;
  createdAt: Date;
}
