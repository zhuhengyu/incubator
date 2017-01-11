/**
 * Created by 欧阳 超 on 2017/01/10.
 */

import assert from 'assert';
import request from 'request';

describe('Request', () => {
  beforeEach(function () {
  });

  describe('#get()', (done) => {
    it('should return a fake name', function () {
      request.get('http://localhost:7000/', (err, res, body) => {
        if (err) {
          done(err);
        }
        assert(typeof body.age === 'number');
        done();
      });
    });
  });
});
