(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.LoadingCirclePop = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var LoadingCirclePop$1 = function LoadingCirclePop$1() {
  return React.createElement(
    'div',
    { style: { width: '100%', height: '100%' } },
    React.createElement('div', { className: 'img' }),
    React.createElement(
      'svg',
      { width: '182px', height: '182px', xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 100 100', preserveAspectRatio: 'xMidYMid',
        className: 'uil-ripple' },
      React.createElement('rect', { x: '0', y: '0', width: '100', height: '100', fill: 'none', className: 'bk' }),
      React.createElement(
        'g',
        null,
        React.createElement('circle', { cx: '50', cy: '50', r: '40', stroke: '#dddddd', fill: 'none',
          strokeWidth: '2', strokeLinecap: 'round', className: 'circle-1' })
      ),
      React.createElement(
        'g',
        null,
        React.createElement('circle', { cx: '50', cy: '50', r: '40', stroke: '#dddddd', fill: 'none',
          strokeWidth: '2', strokeLinecap: 'round', className: 'circle-2' })
      )
    ),
    React.createElement('div', { className: 'loading' })
  );
};

return LoadingCirclePop$1;

})));
//# sourceMappingURL=bundle.js.map
