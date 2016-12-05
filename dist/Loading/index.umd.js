(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.Loading = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var Loading$1 = function Loading$1() {
  return React.createElement(
    'div',
    { className: 'loading' },
    React.createElement(
      'div',
      { className: 'spinner-wrapper' },
      React.createElement(
        'span',
        { className: 'spinner-text' },
        'LOADING'
      ),
      React.createElement('span', { className: 'spinner' })
    )
  );
};

return Loading$1;

})));
//# sourceMappingURL=index.umd.js.map
