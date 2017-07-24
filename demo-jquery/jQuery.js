(function(freeSelf) {

  /*entrance*/

  const $ = jQuery = freeSelf.$ = freeSelf.jQuery = function(selector, context) {
    return new $.fn.init(selector, context);
  };
  
  $.fn = $.prototype;
  
  $.fn.init = function(selector, context) {
    context = context || document;
    const self = this;
    try {
      let domArr;
      if ($.isArray(selector)) {
        domArr = selector;
      } else if ($.isString(selector)) {
        const nodeList = context.querySelectorAll(selector);
        domArr = Array.prototype.slice.apply(nodeList);
      } else if ($.isHTMLElement(selector)) {
        self[0] = selector;
        self.length = 1;
      } else if ($.isFunction(selector)) {
        
      }
      if (domArr) {
        domArr.forEach(function(elem, idx) {
          self[idx] = elem;
        });
        self.length = domArr.length;
      }
    } catch (e) {
      self[0] = createElement(selector);
      self.length = 1;        
    }
  };

  $.fn.init.prototype = $.fn;
  
  $.extend = $.fn.extend = function() {
    const args = Array.prototype.slice.apply(arguments);
    source = args[1] || args[0];
    target = source === args[0] ? this : args[0];
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
    return target;
  };

  /*tool functions*/

  function handleClass(jQueryObj, className, strategy) {
    if ($.isFunction(className)) {
      jQueryObj.each(function(elem, idx) {
        elem.classList[strategy](className(idx));
      });
    } else if ($.isString(className)) {
      const newClasses = className.split(/\s/);
      jQueryObj.each(function(elem) {
        newClasses.forEach(function(cls) {
          elem.classList[strategy](cls);
        });
      });
    }
    return jQueryObj;
  }
  
  function createElement(str) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = str;
    return wrapper.firstChild;
  }

  /*jQuery and proto each*/

  $.extend({
    each(arr, func) {
      for (let i = 0; i < arr.length; i++) {
        func(arr[i], i);
      }
    }
  });
  $.fn.extend({
    each(func) {
      if (func && $.isFunction(func)) {
        for (let i = 0; i < this.length; i++) {
          func.call(this[i], this[i], i);
        }
      }
      return this;
    }
  });

  /*proto functions*/
  
  /*dom selectors*/
  
  $.fn.extend({
    constructor: $,
    pushStack(elems) {
      let ret = this.constructor();
      for (let i = 0; i < elems.length; i++) {
        ret[i] = elems[i];
      }
      ret.length = elems.length;
      ret.prevObject = this;
      return ret;
    },
    find(selector) {
      if (!$.isString(selector)) {
        throw new Error('A selector string needed.');
      }
      let ret = [];
      this.each(function(elem) {
        ret = ret.concat(Array.prototype.slice.apply(elem.querySelectorAll(selector)));
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
    },
    filter(selector) {
      let domArr = Array.prototype.slice.apply(this);
      domArr = domArr.filter(function(elem) {
        return Array.prototype.slice.apply(elem.parentNode.querySelectorAll(selector)).indexOf(elem) !== -1;
      });
      return this.pushStack(domArr);
    },
    has(selector) {
      const domArr = [];
      this.each(function(elem) {
        if ($(selector, elem).length) {
          domArr.push(elem);
        }
      });
      return this.pushStack(domArr);
    },
    slice() {
      return this.pushStack(Array.prototype.slice.apply(this, arguments));
    },
    not(selector) {
      let domArr = Array.prototype.slice.apply(this);
      domArr = domArr.filter(function(elem) {
        return Array.prototype.slice.apply(elem.parentNode.querySelectorAll(selector)).indexOf(elem) === -1;
      });
      return this.pushStack(domArr);
    },
    parent() {
      let domArr = [];
      this.each(function(elem) {
        if (domArr.indexOf(elem.parentNode) === -1) {
          domArr.push(elem.parentNode);
        }
      });
      return this.pushStack(domArr);
    }
  });

  /*dom handling functions*/

  $.fn.extend({
    clone() {
      const newObjs = [];
      this.each(function(elem) {
        newObjs.push(createElement(elem.outerHTML));
      });
      return new $.fn.init(newObjs);
    },
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
      if ($.isString(target)) {
        $(target).each(function(parent) {
          self.each(function(child) {
            parent.appendChild(child);
          });
        });
      }
      return this;
    },
    remove() {
      this.each(function(elem) {
        elem.parentNode.removeChild(elem);
      });
      return this;
    },
    replaceWith(newContent) {
      this.each(function(elem) {
        elem.parentNode.replaceChild($(newContent)[0], elem);
      });
      return this;
    },
    replaceAll(target) {
      const self = this;
      $(target).each(function(elem, idx) {
        elem.parentNode.replaceChild(self.clone()[0], elem);
      });
      return this;
    },
    before(content) {
      if ($.isString(content)) {
        this.each(function(elem) {
          elem.parentNode.insertBefore(createElement(content), elem);
        });
      }
      if ($.isFunction(content)) {
        this.each(function(elem, idx) {
          elem.parentNode.insertBefore(createElement(content(idx)), elem);
        });
      }
      return this;
    },
    after(content) {
      if ($.isString(content)) {
        this.each(function(elem) {
          elem.parentNode.insertBefore(createElement(content), elem.nextSibling);
        });
      }
      if ($.isFunction(content)) {
        this.each(function(elem, idx) {
          elem.parentNode.insertBefore(createElement(content(idx)), elem.nextSibling);
        });
      }
      return this;
    }
  });

  /*general attributes*/

  $.fn.extend({
    attr(attributeName) {
      return this[0].attributes[attributeName].value;
    },
    val(value) {
      if (value && $.isFunction(value)) {
        this.each(function(elem, idx) {
          elem.value = value(elem, idx);
        });
        return this;
      } else if (value && $.isString(value)) {
        this.each(function(elem) {
          elem.value = value;
        });
        return this;
      }
      return this[0].value;
    },
    text(value) {
      if (!value) {
        return this[0].innerHTML;
      }
      return this.each(function(elem) {
        elem.innerHTML = value;
      });
    },
    empty() {
      this.each(function(elem) {
        elem.innerHTML = '';
      });
    }
  });

  /*event functions*/

  $.fn.extend({
    on(event, callback) {
      return this.each(function(elem) {
        elem.addEventListener(event, callback, false);
      });
    },
    trigger(event) {
      return this.each(function(elem) {
        elem.dispatchEvent(new Event(event));
      });
    }
  });
  $.each('blur focus click dblclick'.split(' '), function(event, idx) {
    $.fn[event] = function(handler) {
      if (handler) {
        this.each(function(elem) {
          $(elem).on(event, handler);
        });
      } else {
        this.trigger(event);
      }
      return this;
    };
  });

  /*style functions*/

  $.fn.extend({
    css(propRaw, value) {
      if ($.isString(propRaw)) {
        this.each(function(elem) {
          elem.style[propRaw] = value;
        });
      } else if ($.isObject(propRaw)) {
        this.each(function(elem) {
          for (let prop in propRaw) {
            elem.style[prop] = propRaw[prop];
          }
        });
      }
      return this;
    },
    color(value) {
      return this.css('color', value);
    },
    hasClass(className) {
      this.each(function(elem) {
        if (elem.classList.contains(className)) {
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

  /*jQuery animations*/
  // To Be Improved, jQuery.Deferred needed
  $.fn.extend({
    fadeIn() {
      this.each(function(elem, idx) {
        elem.style.opacity = 0;
        // elem.style.display = "block";
        (function fade() {
          if (elem.style.opacity < 1) {
            elem.style.opacity = +elem.style.opacity + .025;
            requestAnimationFrame(fade);
          }
        })();
      });
      return this;
    }
  });

  /*jQuery functions*/

  $.extend({
    isObject(elem) {
      return Object.prototype.toString.call(elem) === '[object Object]';
    },
    isString(elem) {
      return Object.prototype.toString.call(elem) === '[object String]';
    },
    isFunction(elem) {
      return Object.prototype.toString.call(elem) === '[object Function]';
    },
    isArray: Array.isArray,
    isHTMLElement(elem) {
      return elem instanceof HTMLElement;
    },
    inArray(elem, list, fromIndex) {
      return !list ? -1 : Array.prototype.indexOf.call(list, elem, fromIndex);
    }
  });

  $.extend({
    createDOM(contentType, innerHTML) {
      const domObj = document.createElement(contentType);
      domObj.innerHTML = innerHTML;
      return domObj;
    }
  });

  $.Callbacks = function(options) {
    options = $.isString(options) ? 
      { [options]: true } :
      $.extend({}, options);

    // store functions
    let list = [];
    // record fired functions
    let queue = [];
    // record last fired value
    let memory;
    return {
      add(fn) {
        const self = this;
        (function add(args) {
          Array.prototype.forEach.call(args, function(arg) {
            if ($.isFunction(arg)) {
              if (!self.has(arg)) {
                list.push(arg);
                if (options.memory) {
                  queue.push(arg);
                }
              }
            } else if (arg && arg.length) {
              add(arg);
            }
          });
        })(arguments);
        if (options.memory && memory) {
          this.fire();
        }
        return this;
      },
      fire() {
        memory = arguments.length ? Array.prototype.slice.apply(arguments) : memory;
        const self = this;
        if (!queue.length) {
          queue = list.slice();
        }
        queue.forEach(function(fn) {
          fn.apply(null, memory);
        });
        if (options.once) {
          list = [];
        }
        queue = [];
        return this;
      },
      has(fn) {
        return $.inArray(fn, list) !== -1;
      },
      remove(fn) {
        list.splice($.inArray(fn, list), 1);
        queue.splice($.inArray(fn, list), 1);
        return this;
      },
      eject() {
        return list;
      }
    };
  };
})(self || this);
