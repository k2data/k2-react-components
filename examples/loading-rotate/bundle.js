(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.LoadingRotate = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var Loading = function Loading() {
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

return Loading;

})));
//# sourceMappingURL=bundle.js.map
