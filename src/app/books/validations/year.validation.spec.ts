import { ValidateYear } from './year.validation';
import { FormControl } from '@angular/forms';

describe('Year validation: Spec', () => {
  let formControl;
  beforeEach(() => {
    formControl = new FormControl();
  });

  describe('when control`s value is empty', () => {
    it('should return null', () => {
      formControl.setValue('');
      expect(ValidateYear(formControl)).toBeNull();
    });
  });

  describe('when control`s value is not correct', () => {
    it('should return null', () => {
      formControl.setValue('123');
      expect(ValidateYear(formControl)).not.toBeNull();
    });
  });

  describe('when control`s value is correct', () => {
    it('should return null', () => {
      formControl.setValue('1234');
      expect(ValidateYear(formControl)).toBeNull();
    });
  });
});
