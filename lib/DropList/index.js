'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var DropList$1 = React.createClass({
  displayName: 'DropList',

  propTypes: {
    list: React.PropTypes.array.isRequired,
    name: React.PropTypes.string.isRequired,
    menuClick: React.PropTypes.func,
    singleList: React.PropTypes.array.isRequired,
    dropList: React.PropTypes.array.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      display: 'none',
      arrow: 'drop__menu__name_hide',
      current: this.props.name
    };
  },
  dropDown: function dropDown(e) {
    this.setState({
      display: this.state.display === 'none' ? 'block' : 'none',
      arrow: this.state.arrow === 'drop__menu__name_hide' ? 'drop__menu__name_open' : 'drop__menu__name_hide'
    });
  },
  listClick: function listClick(e) {
    this.props.dropList.map(function (item) {
      item.className = '';
      item.innerText === e.target.parentNode.parentNode.previousSibling.innerText ? item.className = 'active' : '';
    });
    this.props.singleList.map(function (item) {
      item.className = '';
    });
    this.setState({
      display: 'none',
      arrow: 'drop__menu__name_hide'
    });
    this.props.menuClick ? this.props.menuClick(e.target.innerText) : '';
  },
  setHide: function setHide() {
    this.setState({
      display: 'none',
      arrow: 'drop__menu__name_hide'
    });
  },
  clickHiden: function clickHiden(e) {
    if (e.target.getAttribute('target') === this.state.current) {
      document.body.removeEventListener('click', this.setHide);
    } else {
      document.body.addEventListener('click', this.setHide);
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.state.display === 'none') {
      document.body.removeEventListener('mousemove', this.clickHiden);
      document.body.removeEventListener('click', this.setHide);
    } else {
      document.body.addEventListener('mousemove', this.clickHiden);
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { className: 'drop__menu' },
      React.createElement(
        'span',
        { onClick: this.dropDown, target: this.state.current,
          className: this.state.arrow },
        this.props.name
      ),
      React.createElement(
        'div',
        { style: { display: this.state.display }, className: 'drop__menu__list' },
        React.createElement(
          'ul',
          null,
          this.props.list.map(function (item, index) {
            return React.createElement(
              'li',
              { key: 'dropList' + index, onClick: _this.listClick },
              item
            );
          })
        )
      )
    );
  }
});

module.exports = DropList$1;
//# sourceMappingURL=index.js.map
