import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewListItemComponent } from './review-list-item.component';

describe('ReviewListItemComponent', () => {
  let component: ReviewListItemComponent;
  let fixture: ComponentFixture<ReviewListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
