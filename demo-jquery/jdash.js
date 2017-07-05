(function(freeSelf) {

  /*entrance*/

  const _ = jdash = freeSelf._ = freeSelf.jdash = function(selector, context) {
    return new _.fn.init(selector, context);
  };
  
  _.fn = _.prototype;
  
  _.fn.init = function(selector, context) {
    context = context || document;
    const self = this;
    try {
      let domArr;
      if (isArray(selector)) {
        domArr = selector;
      } else if (isString(selector)) {
        const nodeList = context.querySelectorAll(selector);
        domArr = Array.from(nodeList);
      }
      domArr.forEach(function(ele, idx) {
        self[idx] = ele;
      });
      self.length = domArr.length;
    } catch (e) {
      self[0] = createElement(selector);
      self.length = 1;
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

  /*tool functions*/

  function isObject(arg) {
    return typeof arg === 'object';
  }

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isString(arg) {
    return typeof arg === 'string';
  }

  const isArray = Array.isArray;

  function handleClass(jdashObj, className, strategy) {
    if (isFunction(className)) {
      jdashObj.each(function(ele, idx) {
        ele.classList[strategy](className(idx));
      });
    } else if (isString(className)) {
      const newClasses = className.split(/\s/);
      jdashObj.each(function(ele) {
        newClasses.forEach(function(cls) {
          ele.classList[strategy](cls);
        });
      });
    }
  }
  
  function createElement(str) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = str;
    return wrapper.firstChild;
  }

  /*proto functions*/

  _.fn.extend({
    each(func) {
      if (func && isFunction(func)) {
        for (let i = 0; i < this.length; i++) {
          func.call(this[i], this[i], i);
        }
      }
      return this;
    }
  });

  /*dom handling functions*/

  _.fn.extend({
    append(child) {
      child = child[0] || child;
      if (!child || !(child instanceof HTMLElement)) {
        throw new Error('Not a valid element!');
      }
      this[0].appendChild(child);
      return this[0];
    },
    appendTo(target) {
      const self = this;
      if (isString(target)) {
        _(target).each(function(parent) {
          self.each(function(child) {
            parent.appendChild(child);
          });
        });
      }
      return this;
    },
    remove() {
      this.each(function(ele, idx) {
        ele.parentNode.removeChild(ele);
      });
    },
    replaceWith(newContent) {
      this.each(function(ele, idx) {
        ele.parentNode.replaceChild(_(newContent)[0], ele);
      });
    }
  });

  /*event functions*/

  _.fn.extend({
    on(event, callback) {
      this.each(function(ele) {
        ele.addEventListener(event, callback, false);
      });
      return this;
    }
  });

  /*style functions*/

  _.fn.extend({
    css(propRaw, value) {
      if (isString(propRaw)) {
        this.each(function(ele) {
          ele.style[propRaw] = value;
        });
      } else if (isObject(propRaw)) {
        this.each(function(ele) {
          for (let prop in propRaw) {
            ele.style[prop] = propRaw[prop];
          }
        });
      }
      return this;
    },
    hasClass(className) {
      this.each(function(ele) {
        if (ele.classList.contains(className)) {
          return true;
        }
      });
      return false;
    },
    addClass(className) {
      handleClass(this, className, 'add');
      return this;
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

  _.fn.extend({
    clone() {
      const newObjs = [];
      this.each(function(ele) {
        newObjs.push(createElement(ele.outerHTML));
      });
      return new _.fn.init(newObjs);
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
