(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('antd/lib/input')) :
  typeof define === 'function' && define.amd ? define(['react', 'antd/lib/input'], factory) :
  (global.SearchBox = factory(global.React,global.Input));
}(this, (function (React,Input) { 'use strict';

React = 'default' in React ? React['default'] : React;
Input = 'default' in Input ? Input['default'] : Input;

var Search = Input.Search;

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
  searchClick: function searchClick(value) {
    this.props.searchChange ? this.props.searchChange(value) : '';
  },
  render: function render() {
    return React.createElement(
      'span',
      { className: 'header__controll__search__box' },
      React.createElement(Search, { placeholder: '\u641C\u7D22\u5173\u952E\u5B57', onSearch: this.searchClick })
    );
  }
});

return SearchBox$1;

})));
//# sourceMappingURL=bundle.js.map
