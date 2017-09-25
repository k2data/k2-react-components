(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.LeftNav = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var lightThem = {
  background: '#FAFAFA',
  color: '#555555'
};
var darkThem = {
  background: '#1E2A4D',
  color: '#FFFFFF'
};
var LeftNav$1 = React.createClass({
  displayName: 'LeftNav',

  propTypes: {
    menu: React.PropTypes.array,
    them: React.PropTypes.string
  },
  getInitialState: function getInitialState() {
    return {
      activeArr: [[true]],
      them: this.props.them,
      menu: this.props.menu
    };
  },
  handleActive: function handleActive(index, menuListIndex) {
    var activeArr = [];
    activeArr[index] = [];
    activeArr[index][menuListIndex] = true;
    this.setState({ activeArr: activeArr });
  },
  render: function render() {
    var _this = this;

    var _state = this.state,
        activeArr = _state.activeArr,
        them = _state.them,
        menu = _state.menu;

    var raperStyle = them === 'light' ? lightThem : darkThem;
    return React.createElement(
      'div',
      { className: 'leftNav_wraper  ' + them, style: raperStyle },
      menu.map(function (item, index) {
        return item['subMenu'] ? React.createElement(
          'ul',
          { key: item.name + index },
          React.createElement(
            'h3',
            { className: 'menu_title', style: { color: raperStyle.color } },
            item.name
          ),
          item.subMenu.map(function (menuList, menuListIndex) {
            var classNames = 'menu_list';
            if (activeArr[index]) {
              if (activeArr[index][menuListIndex]) {
                classNames = 'menuList ' + them + '_active';
              }
            }
            return React.createElement(
              'li',
              {
                className: classNames,
                key: menuList.name + menuListIndex,
                onClick: function onClick() {
                  _this.handleActive(index, menuListIndex);
                }
              },
              React.createElement('div', { className: 'icon ' + menuList.icon }),
              React.createElement(
                'a',
                { href: 'javascript:void(0)',
                  className: 'menulist_name' },
                menuList.name
              )
            );
          })
        ) : React.createElement(
          'ul',
          { key: item.name + index },
          React.createElement(
            'h3',
            { className: 'menu_title', style: { color: raperStyle.color } },
            item.name
          )
        );
      })
    );
  }
});

return LeftNav$1;

})));
//# sourceMappingURL=bundle.js.map
