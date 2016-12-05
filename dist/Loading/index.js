'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

module.exports = Loading$1;
//# sourceMappingURL=index.js.map
