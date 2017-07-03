(function(freeSelf) {
  const _ = jdash = freeSelf._ = freeSelf.jdash = function(selector, context) {
    return new _.fn.init(selector, context);
  };

  const freeDocument = freeSelf.document;

  _.fn = _.prototype;
  _.fn.init = function(selector, context) {
    context = context || freeDocument;
    try {
      const nodeList = context.querySelectorAll(selector);
      this.length = nodeList.length;
      for (let　i = 0; i < nodeList.length; i++) {
        this[i] = nodeList[i];
      }
    } catch (e) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = selector;
      this[0] = tempDiv.firstChild;
      this.length = 1;
    }
  };
  _.fn.init.prototype = _.fn;

  _.extend = _.fn.extend = function(source) {
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        this[prop] = source[prop];
      }
    }
  };

  _.fn.extend({
    each(func) {
      if (func) {
        for (let i = 0; i < this.length; i++) {
          func.call(this[i], this[i], i);
        }
      }
      return this;
    },
    append(child) {
      child = child[0] || child;
      if (!child || !(child instanceof HTMLElement)) {
        throw new Error('Not a valid element!');
      }
      this[0].appendChild(child);
      return this[0];
    },
    on(event, callback) {
      for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(event, callback, false);
      }
      return this;
    }
  });

  _.fn.extend({
    css(propRaw, value) {
      if (typeof propRaw === 'string') {
        for (let i = 0; i < this.length; i++) {
          this[i].style[propRaw] = value;
        }
      } else if (typeof propRaw === 'object') {
        for (let i = 0; i < this.length; i++) {
          for (let prop in propRaw) {
            this[i].style[prop] = propRaw[prop];
          }
        }
      }
      return this;
    },
    hasClass(className) {
      for (var i = this.length - 1; i >= 0; i--) {
        if (this[i].classList.contains(className)) {
          return true;
        }
      }
      return false;
    }
  });

  _.extend({
    createDOM(contentType, innerHTML) {
      const domObj = freeDocument.createElement(contentType);
      domObj.innerHTML = innerHTML;
      return domObj;
    }
  });
})(self || this);
