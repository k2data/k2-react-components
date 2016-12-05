(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.LoadingWordStep = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var LoadingWordStep$1 = function LoadingWordStep$1() {
  return React.createElement(
    'div',
    { style: { width: '100%', height: '100%' } },
    React.createElement(
      'div',
      { id: 'load' },
      React.createElement(
        'div',
        null,
        '.'
      ),
      React.createElement(
        'div',
        null,
        '.'
      ),
      React.createElement(
        'div',
        null,
        '.'
      ),
      React.createElement(
        'div',
        null,
        '\u4E2D'
      ),
      React.createElement(
        'div',
        null,
        '\u8F7D'
      ),
      React.createElement(
        'div',
        null,
        '\u52A0'
      )
    )
  );
};

return LoadingWordStep$1;

})));
//# sourceMappingURL=index.umd.js.map
