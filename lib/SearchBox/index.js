'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Input = _interopDefault(require('antd/lib/input'));

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

module.exports = SearchBox$1;
//# sourceMappingURL=index.js.map
