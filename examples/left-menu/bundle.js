(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (factory((global.LeftMenu = global.LeftMenu || {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var LeftMenu = function LeftMenu(props) {
  var lightThem = {
    background: '#FAFAFA',
    color: '#555555'
  };
  var darkThem = {
    background: '#1E2A4D',
    color: '#FFFFFF'
  };
  var them = props.them || 'light';
  var raperStyle = them === 'light' ? lightThem : darkThem;
  return React.createElement(
    'div',
    { className: '' + them, style: raperStyle },
    props.children
  );
};

var SubMenu = function SubMenu(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'menu_title' },
      props.name
    ),
    props.children
  );
};

var MenuItem = function MenuItem(props) {
  return React.createElement(
    'div',
    null,
    props.icon,
    React.createElement(
      'a',
      { href: 'javascript:void(0)',
        className: 'menulist_name' },
      props.name
    )
  );
};

exports.SubMenu = SubMenu;
exports.MenuItem = MenuItem;
exports.LeftMenu = LeftMenu;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.js.map
