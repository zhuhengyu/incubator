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
        domArr = Array.from(nodeList);
      } else if ($.isHTMLElement(selector)) {
        self[0] = selector;
        self.length = 1;
      } else if ($.isFunction(selector)) {
        
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

  $.fn.init.prototype = $.fn;
  
  $.extend = $.fn.extend = function(source) {
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        this[prop] = source[prop];
      }
    }
  };

  /*tool functions*/

  function handleClass(jQueryObj, className, strategy) {
    if ($.isFunction(className)) {
      jQueryObj.each(function(ele, idx) {
        ele.classList[strategy](className(idx));
      });
    } else if ($.isString(className)) {
      const newClasses = className.split(/\s/);
      jQueryObj.each(function(ele) {
        newClasses.forEach(function(cls) {
          ele.classList[strategy](cls);
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
      for (var i = 0; i < elems.length; i++) {
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
    },
    filter(selector) {
      let domArr = Array.prototype.slice.apply(this);
      domArr = domArr.filter(function(ele) {
        return Array.prototype.slice.apply(ele.parentNode.querySelectorAll(selector)).indexOf(ele) !== -1;
      });
      return this.pushStack(domArr);
    }
  });

  /*dom handling functions*/

  $.fn.extend({
    clone() {
      const newObjs = [];
      this.each(function(ele) {
        newObjs.push(createElement(ele.outerHTML));
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
      this.each(function(ele) {
        ele.parentNode.removeChild(ele);
      });
      return this;
    },
    replaceWith(newContent) {
      this.each(function(ele) {
        ele.parentNode.replaceChild($(newContent)[0], ele);
      });
      return this;
    },
    replaceAll(target) {
      const self = this;
      $(target).each(function(ele, idx) {
        ele.parentNode.replaceChild(self.clone()[0], ele);
      });
      return this;
    },
    before(content) {
      if ($.isString(content)) {
        this.each(function(ele) {
          ele.parentNode.insertBefore(createElement(content), ele);
        });
      }
      if ($.isFunction(content)) {
        this.each(function(ele, idx) {
          ele.parentNode.insertBefore(createElement(content(idx)), ele);
        });
      }
      return this;
    },
    after(content) {
      if ($.isString(content)) {
        this.each(function(ele) {
          ele.parentNode.insertBefore(createElement(content), ele.nextSibling);
        });
      }
      if ($.isFunction(content)) {
        this.each(function(ele, idx) {
          ele.parentNode.insertBefore(createElement(content(idx)), ele.nextSibling);
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
        this.each(function(ele, idx) {
          ele.value = value(ele, idx);
        });
        return this;
      } else if (value && $.isString(value)) {
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

  $.fn.extend({
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
  $.each('blur focus click dblclick'.split(' '), function(ele, idx) {
    $.fn[ele] = function(handler) {
      if (handler) {
        this.on(ele, handler)
      } else {
        this.trigger(ele);
      }
      return this;
    };
  });

  /*style functions*/

  $.fn.extend({
    css(propRaw, value) {
      if ($.isString(propRaw)) {
        this.each(function(ele) {
          ele.style[propRaw] = value;
        });
      } else if ($.isObject(propRaw)) {
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
      this.each(function(elem) {
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

  /*jQuery animations*/
  // To Be Improved
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
      return arg instanceof HTMLElement;
    }
  });

  $.extend({
    createDOM(contentType, innerHTML) {
      const domObj = document.createElement(contentType);
      domObj.innerHTML = innerHTML;
      return domObj;
    }
  });
})(self || this);
