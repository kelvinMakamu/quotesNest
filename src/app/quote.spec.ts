import { Quote } from './quote';
import {v4 as uuid } from 'uuid';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote(uuid(),'','',0,0,'',new Date())).toBeTruthy();
  });
});
