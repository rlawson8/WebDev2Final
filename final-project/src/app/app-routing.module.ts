import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewCreateComponent } from './review/review-create/review-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'list', component: ReviewListComponent },
  { path: 'create', component: ReviewCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
