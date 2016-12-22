(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('antd/lib/select')) :
  typeof define === 'function' && define.amd ? define(['react', 'antd/lib/select'], factory) :
  (global.Select = factory(global.React,global.Select));
}(this, (function (React,Select) { 'use strict';

React = 'default' in React ? React['default'] : React;
Select = 'default' in Select ? Select['default'] : Select;

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
          style: { width: '100%' },
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

return SelectComponent;

})));
//# sourceMappingURL=bundle.js.map
