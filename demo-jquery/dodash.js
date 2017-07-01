
(function(freeSelf) {
  const __ = jQuery = freeSelf.__ = freeSelf.jQuery = function(selector, context) {
    return new __.fn.init(selector, context);
  };
  __.fn = __.prototype;
  __.fn.init = function(selector, context) {
    context = context || document;
    const nodeList = context.querySelectorAll(selector);
    this.length = nodeList.length;
    for (let　i = 0; i < nodeList.length; i++) {
      this[i] = nodeList[i];
    }
  };
  __.fn.init.prototype = __.fn;

  __.extend = __.fn.extend = function(source) {
    for(let prop in source) {
      this[prop] = source[prop];
    }
  };

  __.fn.extend({
    each(func) {
      for (var i = 0; i < this.length; i++) {
        func.call(this[i], this[i], i);
      }
      return this;
    },
    css(prop, value) {
      for (var i = 0; i < this.length; i++) {
        this[i].style[prop] = value;
      }
      return this;
    }
  });
})(self || this);
