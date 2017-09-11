(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('antd/lib/select'), require('antd/lib/menu'), require('antd/lib/dropdown'), require('antd/lib/icon'), require('antd/lib/input'), require('ramda')) :
  typeof define === 'function' && define.amd ? define(['react', 'antd/lib/select', 'antd/lib/menu', 'antd/lib/dropdown', 'antd/lib/icon', 'antd/lib/input', 'ramda'], factory) :
  (global.Header = factory(global.React,global.Select,global.Menu,global.Dropdown,global.Icon,global.Input,global.R));
}(this, (function (React,Select,Menu,Dropdown,Icon,Input,R) { 'use strict';

React = 'default' in React ? React['default'] : React;
Select = 'default' in Select ? Select['default'] : Select;
Menu = 'default' in Menu ? Menu['default'] : Menu;
Dropdown = 'default' in Dropdown ? Dropdown['default'] : Dropdown;
Icon = 'default' in Icon ? Icon['default'] : Icon;
Input = 'default' in Input ? Input['default'] : Input;
R = 'default' in R ? R['default'] : R;

var Option = Select.Option;

var SelectComponent$1 = React.createClass({
  displayName: 'SelectComponent',

  propTypes: {
    selects: React.PropTypes.array.isRequired,
    onSelectChange: React.PropTypes.func
  },
  render: function render() {
    return React.createElement(
      'div',
      { ref: 'selectBox', className: 'select__box' },
      React.createElement(
        Select,
        { defaultValue: this.props.selects && this.props.selects instanceof Array && this.props.selects.length !== 0 && this.props.selects[0],
          style: { width: '120px', height: '55px' },
          showSearch: false,
          onChange: this.props.onSelectChange || function () {
            console.info('no onchange func..');
          }
        },
        this.props.selects && this.props.selects instanceof Array && this.props.selects.length !== 0 ? this.props.selects.map(function (item, index) {
          return React.createElement(
            Option,
            { value: item, key: 'option' + index },
            item
          );
        }) : ''
      )
    );
  }
});

var UserList = React.createClass({
  displayName: 'UserList',

  propTypes: {
    userMessage: React.PropTypes.object.isRequired,
    userControll: React.PropTypes.func
  },
  menuClick: function menuClick(e) {
    this.props.userControll ? this.props.userControll(e.key) : '';
  },
  render: function render() {
    var menu = React.createElement(
      Menu,
      { onClick: this.menuClick },
      this.props.userMessage && this.props.userMessage.navList && this.props.userMessage.navList instanceof Array ? this.props.userMessage.navList.map(function (item) {
        return React.createElement(
          Menu.Item,
          { key: item },
          item
        );
      }) : ''
    );
    return React.createElement(
      'div',
      { className: 'user__list', id: 'userList' },
      React.createElement(
        Dropdown,
        { overlay: menu, trigger: ['click'] },
        React.createElement(
          'a',
          { className: 'ant-dropdown-link', href: '#', title: this.props.userMessage.name },
          this.props.userMessage.name,
          '\xA0\xA0',
          this.props.userMessage.navList instanceof Array && this.props.userMessage.navList.length !== 0 && React.createElement(Icon, { type: 'down' })
        )
      )
    );
  }
});

var Search = Input.Search;

var SearchBox$1 = React.createClass({
  displayName: 'SearchBox',

  propTypes: {
    searchChange: React.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      value: ''
    };
  },
  searchClick: function searchClick(value) {
    this.props.searchChange ? this.props.searchChange(value) : '';
  },
  render: function render() {
    return React.createElement(
      'span',
      { className: 'header__controll__search__box' },
      React.createElement(Search, { placeholder: '\u641C\u7D22\u5173\u952E\u5B57', onSearch: this.searchClick })
    );
  }
});

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

var NavList$1 = function (_React$Component) {
  inherits(NavList, _React$Component);

  function NavList(props) {
    classCallCheck(this, NavList);

    var _this = possibleConstructorReturn(this, (NavList.__proto__ || Object.getPrototypeOf(NavList)).call(this, props));

    _this.state = {
      current: '',
      currentKey: ''
    };

    _this.handlerClick = _this.handlerClick.bind(_this);
    _this.subMenuClick = _this.subMenuClick.bind(_this);
    return _this;
  }

  createClass(NavList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!R.equals(nextProps.navList, this.props.navList)) {
        nextProps.navList ? nextProps.navList.map(function (item) {
          item.active ? _this2.setState({
            current: item.name
          }) : '';
        }) : '';
      }
    }
  }, {
    key: 'handlerClick',
    value: function handlerClick(e) {
      var _this3 = this;

      var subMenus = [];
      this.props.navList && this.props.navList.map(function (list) {
        !list.dropMenu || list.dropMenu.length === 0 ? subMenus.push(list.name) : _this3.setState({
          currentKey: e.key
        });
      });
      subMenus.map(function (item) {
        e.key === item ? function () {
          _this3.setState({
            current: e.key
          });
          e.item.props.clickEvent && e.item.props.clickEvent(e.key);
        }() : '';
      });
    }
  }, {
    key: 'subMenuClick',
    value: function subMenuClick(e) {
      var newCurrent = this.state.currentKey;
      this.setState({
        current: newCurrent
      });
      e.item.props.clickEvent && e.item.props.clickEvent(e.key);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'div',
        { className: 'nav__list' },
        React.createElement(
          Menu,
          { onClick: this.handlerClick,
            selectedKeys: [this.state.current],
            mode: 'horizontal'
          },
          this.props.navList && this.props.navList instanceof Array ? this.props.navList.map(function (list) {
            if (list.name && list.dropMenu) {
              var menu = React.createElement(
                Menu,
                { onClick: _this4.subMenuClick },
                list.dropMenu.map(function (dp) {
                  return React.createElement(
                    Menu.Item,
                    { clickEvent: list.menuClick, key: dp },
                    dp
                  );
                })
              );
              return React.createElement(
                Menu.Item,
                {
                  key: list.name },
                React.createElement(
                  Dropdown,
                  { overlay: menu, trigger: ['click'] },
                  React.createElement(
                    'span',
                    { className: 'nav__list_dp', style: { textAlign: 'center' } },
                    list.name,
                    '\xA0\xA0',
                    React.createElement(Icon, { type: 'down' })
                  )
                )
              );
            }
            return React.createElement(
              Menu.Item,
              { key: list.name },
              React.createElement(
                'a',
                { href: list.href, target: '_blank', className: 'nav__list_dp', style: { textAlign: 'center' } },
                list.name
              )
            );
          }) : ''
        )
      );
    }
  }]);
  return NavList;
}(React.Component);

var Header$1 = React.createClass({
  displayName: 'Header',

  propTypes: {
    navList: React.PropTypes.array.isRequired,
    selects: React.PropTypes.array,
    showSelects: React.PropTypes.bool,
    userMessage: React.PropTypes.object.isRequired,
    onSelectChange: React.PropTypes.func,
    // navChange: React.PropTypes.func,
    userControll: React.PropTypes.func,
    searchChange: React.PropTypes.func,
    showSearch: React.PropTypes.bool,
    logoData: React.PropTypes.object.isRequired
    // logo: React.PropTypes.string
  },
  render: function render() {
    var _props$logoData = this.props.logoData,
        logo = _props$logoData.logo,
        title = _props$logoData.title,
        width = _props$logoData.width,
        fontSize = _props$logoData.fontSize;

    return React.createElement(
      'header',
      { className: 'header-container' },
      React.createElement(
        'div',
        { className: 'header__logo', style: { width: (width || 140) + 'px', fontSize: (fontSize || 30) + 'px' } },
        React.createElement(
          'div',
          { className: 'header__logo_title' },
          logo && logo.src && React.createElement(
            'div',
            { className: 'logoImg' },
            React.createElement(
              'a',
              { className: 'logo-box', href: logo.href || '' },
              React.createElement('img', { title: title || '', alt: title || '', src: logo.src, width: '100' })
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'header__controll', style: { marginLeft: (width || 140) + 'px' } },
        React.createElement(
          'div',
          { className: 'header__controll__admin' },
          this.props.userMessage.name && this.props.userMessage.name !== '' && React.createElement(UserList, { userMessage: this.props.userMessage, userControll: this.props.userControll })
        ),
        React.createElement(
          'div',
          { className: 'header__controll__nav' },
          React.createElement(NavList$1, { navList: this.props.navList }),
          this.props.showSelects && React.createElement(
            'span',
            { className: 'header__controll__drop' },
            React.createElement(SelectComponent$1, { selects: this.props.selects, onSelectChange: this.props.onSelectChange })
          )
        ),
        this.props.showSearch && React.createElement(
          'div',
          { className: 'header__controll__search' },
          React.createElement(SearchBox$1, { searchChange: this.props.searchChange })
        )
      )
    );
  }
});

Header$1.defaultProps = {
  // logo: 'logo.png',
  showSearch: true,
  showSelects: true
};

return Header$1;

})));
//# sourceMappingURL=bundle.js.map
