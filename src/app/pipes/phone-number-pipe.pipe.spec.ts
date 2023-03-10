import { PhoneNumberPipePipe } from './phone-number-pipe.pipe';

describe('PhoneNumberPipePipe', () => {
  const pipe = new PhoneNumberPipePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return same value if value is shorter than phone number', () => {
    const mockValue = 123456;
    expect(pipe.transform(mockValue)).toBe('123456');
  });

  it('should transform value to format (XXX) XXX-XXXX', () => {
    const mockNumber = 1234567899;
    const expectedValue = '(123) 456-7899';
    expect(pipe.transform(mockNumber)).toBe(expectedValue);
  });
});
