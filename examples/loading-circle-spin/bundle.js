(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.LoadingCircleSpin = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var LoadingCircleSpin$1 = function LoadingCircleSpin$1() {
  return React.createElement('div', { className: 'loading' });
};

return LoadingCircleSpin$1;

})));
//# sourceMappingURL=bundle.js.map
