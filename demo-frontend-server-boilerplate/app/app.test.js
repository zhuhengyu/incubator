/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import assert from 'power-assert';

describe('Hello World', () => {
  beforeEach(function () {
    this.foo = {
      str: 'Hello World',
    };
  });

  describe('#foo()', () => {
    it('this.foo.bar should be "Hello World"', function () {
      assert(this.foo.str === 'Hello World');
    });
  });

  describe('#bar()', () => {
    it('this.foo.bar should be "Hello World"', function () {
      assert(this.foo.str === 5);
    });
  });
});