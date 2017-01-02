/**
 * Created by ouyangcharles on 2016/12/28.
 */

import chai from 'chai';

const should = chai.should();

describe('Hello World', () => {
  it('this is just a test', () => {
    const foo = 'Hello World';
    foo.should.be.a('string');
  });
});