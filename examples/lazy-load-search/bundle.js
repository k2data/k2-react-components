(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.LazyLoadSearch = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var LazyLoadSearch$1 = function (_React$Component) {
  inherits(LazyLoadSearch, _React$Component);

  function LazyLoadSearch() {
    classCallCheck(this, LazyLoadSearch);

    var _this = possibleConstructorReturn(this, (LazyLoadSearch.__proto__ || Object.getPrototypeOf(LazyLoadSearch)).call(this));

    _this.state = {
      visiable: false,
      value: ''
    };
    _this.focusEven = _this.focusEven.bind(_this);
    _this.blurEvent = _this.blurEvent.bind(_this);
    return _this;
  }

  createClass(LazyLoadSearch, [{
    key: 'focusEven',
    value: function focusEven() {
      this.setState({
        visiable: true
      });
    }
  }, {
    key: 'blurEvent',
    value: function blurEvent() {
      // setTimeout(() => {
      //   this.setState({
      //     visiable: false
      //   })
      // }, 0)
    }
  }, {
    key: 'optionClick',
    value: function optionClick(e) {
      console.info(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          visiable = _state.visiable,
          value = _state.value;

      return React.createElement(
        'div',
        { className: 'lazy-select' },
        React.createElement(
          'div',
          null,
          React.createElement('input', {
            type: 'text',
            onFocus: this.focusEven,
            onBlur: this.blurEvent,
            value: value
          })
        ),
        React.createElement(
          'div',
          { className: 'lazy-layers', style: { display: visiable ? 'block' : 'none' } },
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              { onClick: this.optionClick },
              'text01'
            ),
            React.createElement(
              'li',
              null,
              'text02'
            ),
            React.createElement(
              'li',
              null,
              'text03'
            ),
            React.createElement(
              'li',
              null,
              'text04'
            )
          )
        )
      );
    }
  }]);
  return LazyLoadSearch;
}(React.Component);

return LazyLoadSearch$1;

})));
//# sourceMappingURL=bundle.js.map
