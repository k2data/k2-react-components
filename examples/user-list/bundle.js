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
  getInitialState: function getInitialState() {
    return {
      display: 'none',
      className: 'placeholder_close'
    };
  },
  selectClick: function selectClick(e) {
    e.stopPropagation();
    this.setState({
      display: this.state.display === 'block' ? 'none' : 'block',
      className: this.state.className === 'placeholder_close' ? 'placeholder_open' : 'placeholder_close'
    });
  },
  itemClick: function itemClick(e) {
    e.stopPropagation();
    this.setState({
      display: 'none',
      className: 'placeholder_close'
    });
    this.props.userControll ? this.props.userControll(e.target.innerHTML) : '';
  },
  clickHiden: function clickHiden(e) {
    if (e.target.id === 'adminContent') {
      document.body.removeEventListener('click', this.setHide);
    } else {
      document.body.addEventListener('click', this.setHide);
    }
  },
  setHide: function setHide() {
    console.log('add click....');
    this.setState({
      display: 'none',
      className: 'placeholder_close'
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.state.display === 'none') {
      document.body.removeEventListener('mousemove', this.clickHiden);
      document.body.removeEventListener('click', this.setHide);
    } else {
      document.body.addEventListener('mousemove', this.clickHiden);
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { className: 'user__list', onClick: this.selectClick, id: 'userList' },
      React.createElement(
        'span',
        { className: this.state.className, id: 'adminContent' },
        this.props.userMessage.name
      ),
      React.createElement(
        'ul',
        { id: 'liOptions', style: { display: this.state.display } },
        this.props.userMessage && this.props.userMessage.navList && this.props.userMessage.navList instanceof Array ? this.props.userMessage.navList.map(function (item, index) {
          return React.createElement(
            'li',
            { key: 'user' + index, onClick: _this.itemClick },
            item
          );
        }) : ''
      )
    );
  }
});

return UserList$1;

})));
//# sourceMappingURL=bundle.js.map
