import { ShortPipe } from './short.pipe';
 
describe('ShortPipe', () => {
  let pipe: ShortPipe;
 
  beforeEach(() => {
    pipe = new ShortPipe();
  });
 
  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
 
  it('should shorten the value', () => {
    const value = 'Lorem ipsum dolor sit amet';
    const limit = 10;
    const transformedValue = pipe.transform(value, limit);
    expect(transformedValue).toEqual('Lorem ipsu...');
  });
 
  it('should return null if value length is less than or equal to limit', () => {
    const value = 'Short value';
    const limit = 20;
    const transformedValue = pipe.transform(value, limit);
    expect(transformedValue).toBeNull();
  });
});