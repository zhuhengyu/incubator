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
      } else if (isHTMLElement(selector)) {
        self[0] = selector;
        self.length = 1;
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

  function isHTMLElement(arg) {
    return arg instanceof HTMLElement;
  }

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
    return jdashObj;
  }
  
  function createElement(str) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = str;
    return wrapper.firstChild;
  }

  /*jdash and proto each*/

  _.extend({
    each(arr, func) {
      for (let i = 0; i < arr.length; i++) {
        func(arr[i], i);
      }
    }
  });
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

  /*proto functions*/
  
  /*dom selectors*/
  
  _.fn.extend({
    constructor: _,
    pushStack(elems) {
      let ret = this.constructor();
      for (var i = 0; i < elems.length; i++) {
        ret[i] = elems[i];
      }
      ret.length = elems.length;
      ret.prevObject = this;
      return ret;
    },
    find(selector) {
      if (!isString(selector)) {
        throw new Error('A selector string needed.');
      }
      let ret = [];
      this.each(function(ele) {
        ret = ret.concat(Array.from(ele.querySelectorAll(selector)));
      });
      return this.pushStack(ret);
    },
    first() {
      return this.eq(0);
    },
    last() {
      return this.eq(-1);
    },
    eq(i) {
      const j = +i + (i < 0 ? this.length : 0);
      return this.pushStack(j >= 0 && j < this.length ? [this[j]] : []);
    },
    end() {
      return this.prevObject || this.constructor();
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
      this.each(function(ele) {
        ele.parentNode.removeChild(ele);
      });
    },
    replaceWith(newContent) {
      this.each(function(ele) {
        ele.parentNode.replaceChild(_(newContent)[0], ele);
      });
    },
    replaceAll(target) {
      const self = this;
      _(target).each(function(ele, idx) {
        ele.parentNode.replaceChild(self.clone()[0], ele);
      });
    }
  });

  /*general attributes*/

  _.fn.extend({
    attr(attributeName) {
      return this[0].attributes[attributeName].value;
    },
    val(value) {
      if (value && isFunction(value)) {
        this.each(function(ele, idx) {
          ele.value = value(ele, idx);
        });
        return this;
      } else if (value && isString(value)) {
        this.each(function(ele) {
          ele.value = value;
        });
        return this;
      }
      return this[0].value;
    },
    text(value) {
      if (!value) {
        return this[0].innerHTML;
      }
      return this.each(function(ele) {
        ele.innerHTML = value;
      });
    }
  });

  /*event functions*/

  _.fn.extend({
    on(event, callback) {
      return this.each(function(ele) {
        ele.addEventListener(event, callback, false);
      });
    },
    trigger(event) {
      return this.each(function(ele) {
        ele.dispatchEvent(new Event(event));
      });
    }
  });
  _.each('blur focus click dblclick'.split(' '), function(ele, idx) {
    _.fn[ele] = function(handler) {
      if (handler) {
        this.on(ele, handler)
      } else {
        this.trigger(ele);
      }
      return this;
    };
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
    color(value) {
      return this.css('color', value);
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
      return handleClass(this, className, 'add');
    },
    removeClass(className) {
      return handleClass(this, className, 'remove');
    },
    toggleClass(className) {
      return handleClass(this, className, 'toggle');
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

  /*jdash functions*/

  _.extend({
    createDOM(contentType, innerHTML) {
      const domObj = document.createElement(contentType);
      domObj.innerHTML = innerHTML;
      return domObj;
    }
  });
})(self || this);
