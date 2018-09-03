import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookFormPageComponent } from './pages/book-form-page/book-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookListPageComponent
  },
  {
    path: ':id/edit',
    component: BookFormPageComponent
  },
  {
    path: 'create',
    component: BookFormPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule {}
