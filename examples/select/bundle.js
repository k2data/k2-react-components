(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.Select = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var Select$1 = React.createClass({
  displayName: 'Select',

  propTypes: {
    selects: React.PropTypes.array.isRequired,
    onSelectChange: React.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      display: 'none',
      placeholder: this.props.selects && this.props.selects instanceof Array && this.props.selects.length !== 0 ? this.props.selects[0] : '请选择',
      className: 'placeholder_close'
    };
  },
  selectClick: function selectClick(e) {
    e.stopPropagation();
    this.setState({
      display: this.state.display === 'block' ? 'none' : 'block',
      className: this.state.className === 'placeholder_close' ? 'placeholder_open' : 'placeholder_close'
    });
  },
  clickHiden: function clickHiden(e) {
    if (e.target.id === 'selectBox' || e.target.id === 'selectContent') {
      document.body.removeEventListener('click', this.setHide);
    } else {
      document.body.addEventListener('click', this.setHide);
    }
  },
  setHide: function setHide() {
    console.log('add click....');
    this.setState({
      display: 'none',
      className: 'placeholder_close'
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.state.display === 'none') {
      document.body.removeEventListener('mousemove', this.clickHiden);
      document.body.removeEventListener('click', this.setHide);
    } else {
      document.body.addEventListener('mousemove', this.clickHiden);
    }
  },
  itemClick: function itemClick(e) {
    e.stopPropagation();
    this.setState({
      placeholder: e.target.innerText,
      display: 'none',
      className: 'placeholder_close'
    });
    this.props.onSelectChange ? this.props.onSelectChange(e.target.innerText) : '';
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { ref: 'selectBox', className: 'select__box', onClick: this.selectClick, id: 'selectBox' },
      React.createElement(
        'span',
        { className: this.state.className, id: 'selectContent' },
        this.state.placeholder
      ),
      React.createElement(
        'ul',
        { id: 'liOptions', style: { display: this.state.display } },
        this.props.selects && this.props.selects instanceof Array && this.props.selects.length !== 0 ? this.props.selects.map(function (item, index) {
          return React.createElement(
            'li',
            { onClick: _this.itemClick, key: 'option' + index },
            item
          );
        }) : ''
      )
    );
  }
});

return Select$1;

})));
//# sourceMappingURL=bundle.js.map
