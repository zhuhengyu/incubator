/**
 * Created by 欧阳 超 on 2017/01/10.
 */

import assert from 'assert';
import request from 'request';

import * as Api from '../app/store/api.config';

describe('Mock Server', () => {
  beforeEach(function () {
  });

  describe('#userlist', (done) => {
    it('should return a userlist', function () {
      request.get(Api.API_USER, (err, res, body) => {
        if (err) {
          done(err);
        }
        assert(typeof body.age === 'number');
        done();
      });
    });
  });
});
