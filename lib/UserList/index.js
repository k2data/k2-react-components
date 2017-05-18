'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Menu = _interopDefault(require('antd/lib/menu'));
var Dropdown = _interopDefault(require('antd/lib/dropdown'));
var Icon = _interopDefault(require('antd/lib/icon'));

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

module.exports = UserList$1;
//# sourceMappingURL=index.js.map
