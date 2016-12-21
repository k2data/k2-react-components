(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.Header = factory(global.React));
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

var UserList = React.createClass({
  displayName: 'UserList',

  propTypes: {
    userMessage: React.PropTypes.object.isRequired,
    userControll: React.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      display: 'none',
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
  itemClick: function itemClick(e) {
    e.stopPropagation();
    this.setState({
      display: 'none',
      className: 'placeholder_close'
    });
    this.props.userControll ? this.props.userControll(e.target.innerHTML) : '';
  },
  clickHiden: function clickHiden(e) {
    if (e.target.id === 'adminContent') {
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
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { className: 'user__list', onClick: this.selectClick, id: 'userList' },
      React.createElement(
        'span',
        { className: this.state.className, id: 'adminContent' },
        this.props.userMessage.name
      ),
      React.createElement(
        'ul',
        { id: 'liOptions', style: { display: this.state.display } },
        this.props.userMessage && this.props.userMessage.navList && this.props.userMessage.navList instanceof Array ? this.props.userMessage.navList.map(function (item, index) {
          return React.createElement(
            'li',
            { key: 'user' + index, onClick: _this.itemClick },
            item
          );
        }) : ''
      )
    );
  }
});

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

var Header$1 = React.createClass({
  displayName: 'Header',

  propTypes: {
    navList: React.PropTypes.object.isRequired,
    selects: React.PropTypes.array.isRequired,
    userMessage: React.PropTypes.object.isRequired,
    onSelectChange: React.PropTypes.func,
    navChange: React.PropTypes.func,
    userControll: React.PropTypes.func,
    searchChange: React.PropTypes.func,
    logoData: React.PropTypes.object.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      visibility: 'hidden',
      display: 'none',
      singleList: [],
      dropList: []
    };
  },
  navClick: function navClick(e) {
    var _this = this;

    var navList = this.refs['nav'];
    var navArr = navList.childNodes;
    var newNavArr = [];
    var dropList = [];
    for (var i = 0, len = navArr.length; i < len; i++) {
      navArr[i].childElementCount === 0 ? newNavArr.unshift(navArr[i]) : dropList.push(navArr[i]);
    }
    this.setState({
      singleList: newNavArr,
      dropList: dropList
    });
    newNavArr.map(function (item) {
      item.onclick = function (e) {
        for (var _i = 0, _len = navArr.length; _i < _len; _i++) {
          navArr[_i].className = '';
        }
        item.className = 'active';
        _this.props.navChange ? _this.props.navChange(e.target.innerText) : '';
      };
    });
    // for (let i = 0, len = newNavArr.length; i < len; i++) {
    //   newNavArr[i].className = ''
    //   if (newNavArr[i].innerHTML.indexOf(e.target.innerHTML) !== -1) {
    //     newNavArr[i].className = 'active'
    //   }
    // }
    if (this.state.visibility === 'visible') {
      var hiddenList = this.refs['hiddenNav'].getElementsByTagName('li');
      for (var _i2 = 0, _len2 = hiddenList.length; _i2 < _len2; _i2++) {
        hiddenList[_i2].className = '';
      }
      this.setState({
        display: 'none'
      });
    }
    // this.props.navChange
    //   ? this.props.navChange(e.target.innerHTML)
    //     : ''
  },
  componentDidMount: function componentDidMount() {
    this.navClick();
    //  onClick={this.navClick}
    // this.hiddenNavFunc()
    // window.addEventListener('resize', this.hiddenNavFunc)
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('resize', this.hiddenNavFunc);
  },
  hiddenNavFunc: function hiddenNavFunc() {
    var navBox = this.refs['nav'];
    var navs = navBox.getElementsByTagName('li');
    var navAllWidth = Number();
    var hiddenList = [];
    for (var i = 0, len = navs.length; i < len; i++) {
      navAllWidth += navs[i].offsetWidth;
      if (navAllWidth > navBox.offsetWidth) {
        hiddenList.push(navs[i].innerText);
      }
    }
    console.log('navAllWidth:' + navAllWidth);
    console.log('navBox:' + navBox.offsetWidth);
    this.setState({
      hiddenList: hiddenList
    });
    if (navAllWidth > navBox.offsetWidth) {
      this.setState({
        visibility: 'visible'
      });
    }
  },
  showHidden: function showHidden(e) {
    var _this2 = this;

    e.stopPropagation();
    this.setState({
      display: this.state.display === 'none' ? 'block' : 'none'
    });
    e.target.onblur = function () {
      _this2.setState({
        display: 'none'
      });
    };
  },
  hiddenListClick: function hiddenListClick(e) {
    var navList = this.refs['nav'];
    var navArr = navList.getElementsByTagName('li');
    var hiddenList = this.refs['hiddenNav'].getElementsByTagName('li');
    for (var i = 0, len = navArr.length; i < len; i++) {
      navArr[i].className = '';
    }
    for (var _i3 = 0, _len3 = hiddenList.length; _i3 < _len3; _i3++) {
      hiddenList[_i3].className = '';
      if (hiddenList[_i3].innerText === e.target.innerText) {
        hiddenList[_i3].className = 'hidden__active';
      }
    }
    this.props.navChange ? this.props.navChange(e.target.innerText) : '';
  },
  render: function render() {
    var _this3 = this;

    return React.createElement(
      'header',
      { className: 'header-container' },
      React.createElement(
        'div',
        { className: 'header__logo' },
        React.createElement(
          'div',
          { className: 'header__logo_title' },
          React.createElement(
            'span',
            null,
            React.createElement('img', { src: 'logo.png' })
          ),
          React.createElement(
            'span',
            null,
            React.createElement(
              'b',
              null,
              this.props.logoData && this.props.logoData.title ? this.props.logoData.title : ''
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'header__controll' },
        React.createElement(
          'div',
          { className: 'header__controll__nav' },
          React.createElement(
            'ul',
            { ref: 'nav' },
            this.props.navList && this.props.navList.list && this.props.navList.list.length !== 0 ? this.props.navList.list.map(function (item, index) {
              var menuBox = void 0;
              var addDropMenu = function () {
                if (_this3.props.navList.dropMenu && _this3.props.navList.dropMenu.length !== 0) {
                  var dropMenu = _this3.props.navList.dropMenu;

                  for (var i = 0, len = dropMenu.length; i < len; i++) {
                    if (item === dropMenu[i].name && dropMenu[i].menus && dropMenu[i].menus.length !== 0) {
                      menuBox = React.createElement(DropList$1, { name: dropMenu[i].name, list: dropMenu[i].menus,
                        singleList: _this3.state.singleList, dropList: _this3.state.dropList,
                        menuClick: dropMenu[i].menuClick ? dropMenu[i].menuClick : '' });
                      break;
                    } else {
                      menuBox = item;
                    }
                  }
                } else {
                  menuBox = item;
                }
                return menuBox;
              }();
              if (_this3.props.navList.active) {
                return item === _this3.props.navList.active ? React.createElement(
                  'li',
                  { key: 'nav' + index, className: 'active' },
                  addDropMenu
                ) : React.createElement(
                  'li',
                  { key: 'nav' + index },
                  addDropMenu
                );
              } else {
                return index === 0 ? React.createElement(
                  'li',
                  { key: 'nav' + index, className: 'active' },
                  addDropMenu
                ) : React.createElement(
                  'li',
                  { key: 'nav' + index },
                  addDropMenu
                );
              }
            }) : ''
          ),
          React.createElement(
            'a',
            { href: 'javascript:;', className: 'header__controll__showhidden',
              style: { visibility: this.state.visibility }, onClick: this.showHidden },
            '...',
            React.createElement(
              'div',
              { className: 'header__controll_hidden-list',
                style: { display: this.state.display } },
              React.createElement(
                'ul',
                { onClick: this.hiddenListClick, ref: 'hiddenNav' },
                this.state.hiddenList ? this.state.hiddenList.map(function (item, index) {
                  return React.createElement(
                    'li',
                    { key: 'hiddenlist' + index },
                    item
                  );
                }) : ''
              )
            )
          ),
          React.createElement(
            'span',
            { className: 'header__controll__drop' },
            React.createElement(Select$1, { selects: this.props.selects, onSelectChange: this.props.onSelectChange })
          )
        ),
        React.createElement(
          'div',
          { className: 'header__controll__search' },
          React.createElement(SearchBox$1, { searchChange: this.props.searchChange })
        ),
        React.createElement(
          'div',
          { className: 'header__controll__admin' },
          React.createElement(UserList, { userMessage: this.props.userMessage, userControll: this.props.userControll })
        )
      )
    );
  }
});

return Header$1;

})));
//# sourceMappingURL=bundle.js.map
