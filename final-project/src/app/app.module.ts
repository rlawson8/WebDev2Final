import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from './app.component';
import { ReviewCreateComponent } from './review/review-create/review-create.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewListItemComponent } from './review/review-list/review-list-item/review-list-item.component';

const routes: Routes = [
  { path: '', component: ReviewListComponent },
  { path: 'addReview', component: ReviewCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ReviewCreateComponent,
    FooterComponent,
    ReviewListComponent,
    ReviewListItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    NgbModule,
    HttpClientModule,
    MatMenuModule,
    AppRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    NgxMasonryModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
