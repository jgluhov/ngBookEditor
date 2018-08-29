import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../models/author.model';

@Pipe({
  name: 'authors'
})
export class AuthorsPipe implements PipeTransform {

  transform(authors: AuthorModel[]): string {

    return authors
      .map(author => `${author.firstName} ${author.lastName}`.trim())
      .join(', ');
  }

}
