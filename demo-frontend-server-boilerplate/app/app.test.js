/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import assert from 'assert';

describe('Hello World', () => {
  beforeEach(function () {
    this.foo = {
      bar: 'bar',
    };
  });

  describe('#foo()', () => {
    it('should return true', function () {
      assert(this.foo.bar === 'bar');
    });
  });
});