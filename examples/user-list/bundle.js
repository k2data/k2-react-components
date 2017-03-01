(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('antd/lib/menu'), require('antd/lib/dropdown'), require('antd/lib/icon')) :
  typeof define === 'function' && define.amd ? define(['react', 'antd/lib/menu', 'antd/lib/dropdown', 'antd/lib/icon'], factory) :
  (global.UserList = factory(global.React,global.Menu,global.Dropdown,global.Icon));
}(this, (function (React,Menu,Dropdown,Icon) { 'use strict';

React = 'default' in React ? React['default'] : React;
Menu = 'default' in Menu ? Menu['default'] : Menu;
Dropdown = 'default' in Dropdown ? Dropdown['default'] : Dropdown;
Icon = 'default' in Icon ? Icon['default'] : Icon;

var UserList$1 = React.createClass({
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

return UserList$1;

})));
//# sourceMappingURL=bundle.js.map
