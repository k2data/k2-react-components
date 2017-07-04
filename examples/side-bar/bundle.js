(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.SideBar = factory(global.React));
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

// import PropTypes from 'prop-types'

var SideBar$1 = function (_React$Component) {
  inherits(SideBar, _React$Component);

  function SideBar(props) {
    classCallCheck(this, SideBar);

    var _this = possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));

    _this.navClick = _this.navClick.bind(_this);
    return _this;
  }

  createClass(SideBar, [{
    key: 'navClick',
    value: function navClick(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      if (target && target.nodeName.toUpperCase() === 'A') {
        var lists = this.refs.sidebar.getElementsByTagName('li');
        var targetNode = event.target.parentNode;
        if (targetNode.childNodes.length === 1) {
          Array.prototype.forEach.call(lists, function (li) {
            li.className = '';
          });
          targetNode.className = 'active';
        } else {
          var current = targetNode.childNodes[1].style.height;
          targetNode.childNodes[1].style.height = current === '0px' ? 'auto' : 0;
          // const current = targetNode.childNodes[1].style.display
          // // console.info(targetNode.childNodes[1].style.display)
          // targetNode.childNodes[1].style.display = current === 'block' ? 'none' : 'block'
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          width = _props.width,
          list = _props.list;

      return React.createElement(
        'div',
        { className: 'side_bar', style: { width: (width || 140) + 'px' } },
        children || React.createElement(
          'div',
          { className: 'side_bar_container' },
          React.createElement(
            'ul',
            { onClick: this.navClick, ref: 'sidebar' },
            list && list instanceof Array && list.map(function (nav, index) {
              var icon = function icon(target) {
                if (!target) {
                  return;
                }
                if (target.icon) {
                  return target.icon;
                }
                if (target.img) {
                  return React.createElement('i', { className: 'imgIcon', style: { background: 'url(' + target.img + ') no-repeat center' } });
                }
              };
              return nav.href ? React.createElement(
                'li',
                { key: 'nav' + index, className: nav.active ? 'active' : '' },
                React.createElement(
                  'a',
                  { href: nav.href || '',
                    style: { pointerEvents: nav.disabled ? 'none' : 'all' },
                    disabled: nav.disabled || false },
                  React.createElement(
                    'span',
                    null,
                    icon(nav)
                  ),
                  nav.name || ''
                )
              ) : React.createElement(
                'li',
                { key: 'nav' + index, className: nav.active ? 'active' : '' },
                React.createElement(
                  'a',
                  { onClick: nav.onClick || null,
                    style: { pointerEvents: nav.disabled ? 'none' : 'all' },
                    disabled: nav.disabled || false },
                  React.createElement(
                    'span',
                    null,
                    icon(nav)
                  ),
                  nav.name || ''
                ),
                nav.second && nav.second instanceof Array && React.createElement(
                  'ul',
                  { style: { height: '' + (nav.toggle ? 'auto' : 0) } },
                  nav.second.map(function (b, i) {
                    return React.createElement(
                      'li',
                      { key: 'second' + i, className: b.active ? 'active' : '' },
                      React.createElement(
                        'a',
                        { onClick: b.onClick || null,
                          style: { pointerEvents: b.disabled ? 'none' : 'all' },
                          disabled: b.disabled || false
                        },
                        b.name
                      )
                    );
                  })
                )
              );
            })
          )
        )
      );
    }
  }]);
  return SideBar;
}(React.Component);

return SideBar$1;

})));
//# sourceMappingURL=bundle.js.map
