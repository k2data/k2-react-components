(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.NavList = factory(global.React));
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

// import Menu from 'antd/lib/menu'
// import Dropdown from 'antd/lib/dropdown'
// import Icon from 'antd/lib/icon'
// import R from 'ramda'

var NavList$1 = function (_React$Component) {
  inherits(NavList, _React$Component);

  function NavList() {
    classCallCheck(this, NavList);
    return possibleConstructorReturn(this, (NavList.__proto__ || Object.getPrototypeOf(NavList)).apply(this, arguments));
  }

  createClass(NavList, [{
    key: 'render',

    // props: Props
    // state = {
    //   current: '',
    //   currentKey: '',
    // }

    // constructor (props) {
    //   super(props)
    //   this.handlerClick = this.handlerClick.bind(this)
    //   this.subMenuClick = this.subMenuClick.bind(this)
    // }
    // componentWillReceiveProps (nextProps) {
    //   if (!R.equals(nextProps.navList, this.props.navList)) {
    //     nextProps.navList
    //     ? nextProps.navList.map((item) => {
    //       item.active
    //       ? this.setState({
    //         current: item.name,
    //       })
    //       : ''
    //     })
    //     : ''
    //   }
    // }

    // handlerClick (e) {
    //   let subMenus = []
    //   this.props.navList && this.props.navList.map((list) => {
    //     !list.dropMenu || list.dropMenu.length === 0
    //       ? subMenus.push(list.name)
    //     : this.setState({
    //       currentKey: e.key,
    //     })
    //   })
    //   subMenus.map((item) => {
    //     e.key === item
    //       ? (() => {
    //         this.setState({
    //           current: e.key,
    //         })
    //         e.item.props.clickEvent && e.item.props.clickEvent(e.key)
    //       })()
    //     : ''
    //   })
    // }

    // subMenuClick (e) {
    //   const newCurrent = this.state.currentKey
    //   this.setState({
    //     current: newCurrent,
    //   })
    //   e.item.props.clickEvent && e.item.props.clickEvent(e.key)
    // }
    value: function render() {
      return React.createElement(
        'ul',
        { className: 'header_menu_list' },
        this.props.navList && this.props.navList instanceof Array ? this.props.navList.map(function (list, index) {
          return React.createElement(
            'li',
            { key: list.name },
            React.createElement(
              'a',
              { className: list.active ? 'activeA' : '', href: list.href, target: '_blank' },
              list.name
            ),
            React.createElement(
              'span',
              null,
              '|'
            )
          );
        }) : ''
      );
    }
  }]);
  return NavList;
}(React.Component);

return NavList$1;

})));
//# sourceMappingURL=bundle.js.map
