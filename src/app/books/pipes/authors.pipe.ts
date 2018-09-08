import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../models/author.model';

@Pipe({
  name: 'authors'
})
export class AuthorsPipe implements PipeTransform {

  transform(authors: AuthorModel[], length = 0): string {

    const formattedAuthors = authors
      .map(author => `${author.firstName} ${author.lastName}`.trim());

    const slicedAuthors = length ?
      formattedAuthors.slice(0, length) : formattedAuthors;

    return slicedAuthors
      .join(', ');
  }

}
