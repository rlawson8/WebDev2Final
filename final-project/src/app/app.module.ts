import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ReviewCreateComponent } from './review/review-create/review-create.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header-component';
import { ReviewListComponent } from './review/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewCreateComponent,
    FooterComponent,
    HeaderComponent,
    ReviewListComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
