'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Select = _interopDefault(require('antd/lib/select'));

var Option = Select.Option;

var SelectComponent = React.createClass({
  displayName: 'SelectComponent',

  propTypes: {
    selects: React.PropTypes.array.isRequired,
    onSelectChange: React.PropTypes.func
  },
  render: function render() {
    return React.createElement(
      'div',
      { ref: 'selectBox', className: 'select__box' },
      React.createElement(
        Select,
        { defaultValue: this.props.selects && this.props.selects instanceof Array && this.props.selects.length !== 0 && this.props.selects[0],
          style: { width: '120px', height: '55px' },
          showSearch: false,
          onChange: this.props.onSelectChange || function () {
            console.info('no onchange func..');
          }
        },
        this.props.selects && this.props.selects instanceof Array && this.props.selects.length !== 0 ? this.props.selects.map(function (item, index) {
          return React.createElement(
            Option,
            { value: item, key: 'option' + index },
            item
          );
        }) : ''
      )
    );
  }
});

module.exports = SelectComponent;
//# sourceMappingURL=index.js.map
