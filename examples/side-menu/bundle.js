(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('antd/lib/menu')) :
  typeof define === 'function' && define.amd ? define(['react', 'antd/lib/menu'], factory) :
  (global.SideMenu = factory(global.React,global.Menu));
}(this, (function (React,Menu) { 'use strict';

React = 'default' in React ? React['default'] : React;
Menu = 'default' in Menu ? Menu['default'] : Menu;

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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

// import { Menu } from 'antd'
var SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup

var SideMenu$1 = function (_React$Component) {
  inherits(SideMenu, _React$Component);

  function SideMenu(props) {
    classCallCheck(this, SideMenu);

    var _this = possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).call(this, props));

    _this.state = {
      current: '1'
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(SideMenu, [{
    key: 'handleClick',
    value: function handleClick(e) {
      this.setState({
        current: e.key
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'side__menu' },
        React.createElement(
          Menu,
          { onClick: this.handleClick,
            style: { width: 218 },
            defaultOpenKeys: ['sub1'],
            selectedKeys: [this.state.current],
            mode: 'inline'
          },
          React.createElement(
            SubMenu,
            { key: 'sub1', title: React.createElement(
                'span',
                null,
                React.createElement('img', { className: 'icon__box', src: 'datasource.png' }),
                React.createElement(
                  'span',
                  null,
                  '\u6570\u636E\u6E90'
                )
              ) },
            React.createElement(
              Menu.Item,
              { key: '1' },
              '\u6C14\u8C61\u89C2\u6D4B(\u5386\u53F2)'
            ),
            React.createElement(
              Menu.Item,
              { key: '2' },
              '\u7A7A\u6C14\u8D28\u91CF\u89C2\u6D4B(\u5386\u53F2)'
            ),
            React.createElement(
              Menu.Item,
              { key: '3' },
              '\u5927\u5C3A\u5EA6\u6C14\u8C61\u9884\u6D4B'
            ),
            React.createElement(
              Menu.Item,
              { key: '4' },
              '\u5730\u7406\u4FE1\u606F'
            ),
            React.createElement(
              Menu.Item,
              { key: '33' },
              '\u6C61\u67D3\u6E90\u6E05\u5355'
            ),
            React.createElement(
              Menu.Item,
              { key: '34' },
              '\u5468\u8FB9\u7701\u7A7A\u6C14\u8D28\u91CF\u89C2\u6D4B'
            )
          ),
          React.createElement(
            SubMenu,
            { key: 'sub2', disabled: true,
              title: React.createElement(
                'span',
                null,
                React.createElement('img', { className: 'icon__box', src: 'dataclean.png' }),
                React.createElement(
                  'span',
                  null,
                  '\u6570\u636E\u6E05\u6D17'
                )
              ) },
            React.createElement(
              Menu.Item,
              { key: '5' },
              'Option 5'
            ),
            React.createElement(
              Menu.Item,
              { key: '6' },
              'Option 6'
            )
          ),
          React.createElement(
            SubMenu,
            { key: 'sub3', disabled: true,
              title: React.createElement(
                'span',
                null,
                React.createElement('img', { className: 'icon__box', src: 'Willdo.png' }),
                React.createElement(
                  'span',
                  null,
                  '\u9884\u5904\u7406'
                )
              ) },
            React.createElement(
              Menu.Item,
              { key: '9' },
              'Option 9'
            ),
            React.createElement(
              Menu.Item,
              { key: '10' },
              'Option 10'
            ),
            React.createElement(
              Menu.Item,
              { key: '11' },
              'Option 11'
            ),
            React.createElement(
              Menu.Item,
              { key: '12' },
              'Option 12'
            )
          ),
          React.createElement(
            SubMenu,
            { key: 'sub4', disabled: true,
              title: React.createElement(
                'span',
                null,
                React.createElement('img', { className: 'icon__box', src: 'pull.png' }),
                React.createElement(
                  'span',
                  null,
                  '\u62BD\u53D6'
                )
              ) },
            React.createElement(
              Menu.Item,
              { key: '13' },
              'Option 9'
            )
          ),
          React.createElement(
            SubMenu,
            { key: 'sub5',
              title: React.createElement(
                'span',
                null,
                React.createElement('img', { className: 'icon__box', src: 'future.png' }),
                React.createElement(
                  'span',
                  null,
                  '\u9884\u6D4B\u7B97\u6CD5'
                )
              ) },
            React.createElement(
              Menu.Item,
              { key: '14' },
              'autoplait'
            ),
            React.createElement(
              Menu.Item,
              { key: '24' },
              'NN'
            ),
            React.createElement(
              Menu.Item,
              { key: '25' },
              'DL'
            ),
            React.createElement(
              Menu.Item,
              { key: '25' },
              'Random Forest'
            ),
            React.createElement(
              Menu.Item,
              { key: '26' },
              'TSTreeSplit'
            ),
            React.createElement(
              Menu.Item,
              { key: '27' },
              'MoenR'
            ),
            React.createElement(
              Menu.Item,
              { key: '28' },
              'diss.COR'
            ),
            React.createElement(
              Menu.Item,
              { key: '29' },
              'kmeans'
            ),
            React.createElement(
              Menu.Item,
              { key: '30' },
              'hclust'
            ),
            React.createElement(
              Menu.Item,
              { key: '31' },
              'diss.CID'
            ),
            React.createElement(
              Menu.Item,
              { key: '32' },
              'Im'
            )
          ),
          React.createElement(
            SubMenu,
            { key: 'sub6', disabled: true,
              title: React.createElement(
                'span',
                null,
                React.createElement('img', { className: 'icon__box', src: 'view.png' }),
                React.createElement(
                  'span',
                  null,
                  '\u53EF\u89C6\u5316'
                )
              ) },
            React.createElement(
              Menu.Item,
              { key: '15' },
              'Option 9'
            )
          )
        )
      );
    }
  }]);
  return SideMenu;
}(React.Component);

return SideMenu$1;

})));
//# sourceMappingURL=bundle.js.map
