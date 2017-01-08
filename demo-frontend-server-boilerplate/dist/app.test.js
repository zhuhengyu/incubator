'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by 欧阳 超 on 2017/01/07.
                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Hello World', function () {
  beforeEach(function () {
    this.foo = {
      str: 'Hello World'
    };
  });

  describe('#foo()', function () {
    it('this.foo.bar should be "Hello World"', function () {
      var _rec = new _powerAssertRecorder();

      (0, _powerAssert2.default)(_rec._expr(_rec._capt(_rec._capt(_rec._capt(this.foo, 'arguments/0/left/object').str, 'arguments/0/left') === 'Hello World', 'arguments/0'), {
        content: 'assert(this.foo.str === \'Hello World\')',
        filepath: 'app/app.test.js',
        line: 16
      }));
    });
  });

  describe('#bar()', function () {
    it('this.foo.bar should be "Hello World"', function () {
      var _rec2 = new _powerAssertRecorder();

      (0, _powerAssert2.default)(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(this.foo, 'arguments/0/left/object').str, 'arguments/0/left') === 5, 'arguments/0'), {
        content: 'assert(this.foo.str === 5)',
        filepath: 'app/app.test.js',
        line: 22
      }));
    });
  });
});