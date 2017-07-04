(function(freeSelf) {
  const _ = jdash = freeSelf._ = freeSelf.jdash = function(selector, context) {
    return new _.fn.init(selector, context);
  };

  _.fn = _.prototype;
  _.fn.init = function(selector, context) {
    context = context || document;
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

  function isObject(arg) {
    return typeof arg === 'object';
  }

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isString(arg) {
    return typeof arg === 'string';
  }

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
      this.each(function(ele, idx) {
        ele.addEventListener(event, callback, false);
      });
      return this;
    }
  });

  const isArray = Array.isArray;

  function handleClass(jdashObj, className, strategy) {
    if (isFunction(className)) {
      jdashObj.each(function(ele, idx) {
        ele.classList[strategy](className(idx));
      });
    } else if (isString(className)) {
      const newClasses = className.split(/\s/);
      jdashObj.each(function(ele, idx) {
        newClasses.forEach(function(cls) {
          ele.classList[strategy](cls);
        });
      });
    }
  }

  _.fn.extend({
    css(propRaw, value) {
      if (isString(propRaw)) {
        this.each(function(ele, idx) {
          ele.style[propRaw] = value;
        });
      } else if (isObject(propRaw)) {
        this.each(function(ele, idx) {
          for (let prop in propRaw) {
            this[i].style[prop] = propRaw[prop];
          }
        });
      }
      return this;
    },
    addClass(className) {
      handleClass(this, className, 'add');
      return this;
    },
    hasClass(className) {
      this.each(function(ele, idx) {
        if (ele.classList.contains(className)) {
          return true;
        }
      });
      return false;
    },
    removeClass(className) {
      handleClass(this, className, 'remove');
      return this;
    },
    toggleClass(className) {
      handleClass(this, className, 'toggle');
      return this;
    }
  });

  _.extend({
    createDOM(contentType, innerHTML) {
      const domObj = document.createElement(contentType);
      domObj.innerHTML = innerHTML;
      return domObj;
    }
  });
})(self || this);
