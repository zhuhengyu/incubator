/**
 * Created by ouyangcharles on 2016/12/28.
 */

import chai from 'chai';

// chai.should();
// const expect = chai.expect;
const assert = chai.assert;

describe('Hello World', () => {
  it('should be Hello World', () => {
    const foo = 'Hello World';
    assert.equal(foo, 'Hello World');
  });
});