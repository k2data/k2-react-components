(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.UserList = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var UserList$1 = React.createClass({
  displayName: 'UserList',

  propTypes: {
    userMessage: React.PropTypes.object.isRequired,
    userControll: React.PropTypes.func
  },
  menuClick: function menuClick(e) {
    this.props.userControll ? this.props.userControll(e.key) : '';
    console.log('退出');
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'header_user_center' },
      React.createElement(
        'div',
        { className: 'header_username' },
        React.createElement(
          'span',
          null,
          this.props.userMessage.name
        )
      ),
      React.createElement(
        'div',
        { className: 'header_separate' },
        React.createElement(
          'span',
          null,
          '|'
        )
      ),
      React.createElement(
        'div',
        { className: 'header_logOut' },
        React.createElement(
          'span',
          { onClick: this.menuClick },
          this.props.userMessage.tuichu
        )
      )
    );
  }
});

return UserList$1;

})));
//# sourceMappingURL=bundle.js.map
