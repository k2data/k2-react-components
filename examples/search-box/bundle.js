(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.SearchBox = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var searchIcon = React.createElement(
  'svg',
  {
    className: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    width: '12', height: '12' },
  React.createElement('path', { d: 'M999.104 878.336l-244.992-245.056c-2.816-2.88-6.016-4.992-9.024-7.36 41.408-63.552 65.536-139.2 65.536-220.672 0-223.872-181.44-405.376-405.312-405.376C181.504-0.064 0 181.44 0 405.312s181.568 405.312 405.312 405.312c81.472 0 157.184-24.192 220.8-65.6 2.304 3.008 4.48 6.08 7.232 8.96l245.056 245.12c16.704 16.64 38.528 24.96 60.352 24.96 21.824 0 43.648-8.32 60.352-24.96C1032.32 965.76 1032.32 911.68 999.104 878.336M405.312 682.624C252.416 682.624 128 558.208 128 405.312s124.48-277.376 277.312-277.376c152.896 0 277.312 124.48 277.312 277.376S558.208 682.624 405.312 682.624', fill: '#666666' })
);

var SearchBox$1 = React.createClass({
  displayName: 'SearchBox',

  propTypes: {
    searchChange: React.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      value: ''
    };
  },
  inputChange: function inputChange(e) {
    this.setState({
      value: e.target.value
    });
  },
  searchClick: function searchClick() {
    this.props.searchChange && this.state.value !== '' ? this.props.searchChange(this.state.value) : '';
  },
  render: function render() {
    return React.createElement(
      'span',
      { className: 'header__controll__search__box' },
      React.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5173\u952E\u5B57',
        value: this.state.value,
        onChange: this.inputChange }),
      React.createElement(
        'button',
        { onClick: this.searchClick },
        searchIcon
      )
    );
  }
});

return SearchBox$1;

})));
//# sourceMappingURL=bundle.js.map
