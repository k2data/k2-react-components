(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('antd')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'antd'], factory) :
  (global.Share = factory(global.React,global.PropTypes,global.antd));
}(this, (function (React,PropTypes,antd) { 'use strict';

React = 'default' in React ? React['default'] : React;
PropTypes = 'default' in PropTypes ? PropTypes['default'] : PropTypes;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var Option = antd.Select.Option;

var Share$1 = function (_React$Component) {
  inherits(Share, _React$Component);

  function Share(props) {
    classCallCheck(this, Share);

    var _this = possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).call(this, props));

    _this.state = {
      visible: false,
      value: '',
      shares: []
    };
    _this.showModal = _this.showModal.bind(_this);
    _this.handleOk = _this.handleOk.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.addShare = _this.addShare.bind(_this);
    _this.deleteItem = _this.deleteItem.bind(_this);
    return _this;
  }

  createClass(Share, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.loading !== this.props.loading) {
        this.setState({ visible: nextProps.loading, loading: nextProps.loading });
      }
      if (nextProps.loading !== this.props.loading && !nextProps.loading) {
        this.setState({ shares: [] });
      }
    }
  }, {
    key: 'showModal',
    value: function showModal() {
      this.setState({ visible: true });
    }
  }, {
    key: 'handleOk',
    value: function handleOk() {
      this.props.share && this.props.share(this.state.shares);
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.setState({ visible: false, shares: [], loading: false });
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(val) {
      this.setState({ value: val });
    }
  }, {
    key: 'addShare',
    value: function addShare() {
      var filter = function filter(arr) {
        var seen = new Map();
        return arr.filter(function (a) {
          return !seen.has(a) && seen.set(a, 1);
        });
      };
      this.setState({ shares: filter(this.state.shares.concat(this.state.value)) });

      console.info(filter(this.state.shares.concat(this.state.value)));
    }
  }, {
    key: 'deleteItem',
    value: function deleteItem(val) {
      var newArr = this.state.shares.filter(function (n) {
        return n !== val;
      });
      this.setState({ shares: newArr });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          visible = _state.visible,
          value = _state.value,
          shares = _state.shares;
      var _props = this.props,
          title = _props.title,
          list = _props.list,
          loading = _props.loading,
          type = _props.type,
          size = _props.size;

      var item = {
        display: 'block',
        whiteSpace: 'nowarp',
        overflow: 'hidden',
        lineHeight: '20px'
      };
      var text = {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '90%',
        float: 'left'
      };
      var btn = {
        float: 'right'
      };
      var container = {
        maxHeight: '50vh',
        overflow: 'hidden',
        overflowY: 'auto'
      };
      return React.createElement(
        'span',
        null,
        React.createElement(
          antd.Button,
          { type: type || 'default', size: size || 'default', onClick: this.showModal },
          React.createElement(antd.Icon, { type: 'share-alt' }),
          '\u5206\u4EAB'
        ),
        React.createElement(
          antd.Modal,
          {
            title: title || '',
            visible: visible,
            onOk: this.handleOk,
            onCancel: this.handleCancel,
            width: '100vh',
            footer: [React.createElement(
              antd.Button,
              { key: 'back', size: 'small', onClick: this.handleCancel },
              '\u53D6\u6D88'
            ), React.createElement(
              antd.Button,
              { key: 'submit', type: 'primary', size: 'small', loading: loading, onClick: this.handleOk },
              '\u786E\u5B9A'
            )]
          },
          React.createElement(
            antd.Row,
            null,
            React.createElement(
              antd.Col,
              { span: 8 },
              React.createElement(
                'div',
                { style: { textAlign: 'right', padding: '10px' } },
                '\u5206\u4EAB:'
              )
            ),
            React.createElement(
              antd.Col,
              { span: 8 },
              React.createElement(
                'div',
                { style: { padding: '10px' } },
                React.createElement(
                  'ul',
                  { style: container },
                  shares.map(function (sh) {
                    return React.createElement(
                      'li',
                      { style: item, key: sh },
                      React.createElement(
                        'span',
                        { style: text },
                        sh
                      ),
                      React.createElement(
                        'a',
                        { style: btn, onClick: function onClick() {
                            _this2.deleteItem(sh);
                          } },
                        React.createElement(antd.Icon, { type: 'delete' })
                      )
                    );
                  })
                )
              )
            )
          ),
          React.createElement(
            antd.Row,
            null,
            React.createElement(
              antd.Col,
              { span: 8 },
              React.createElement(
                'div',
                { style: { textAlign: 'right', padding: '10px' } },
                '\u6DFB\u52A0\u5206\u4EAB:'
              )
            ),
            React.createElement(
              antd.Col,
              { span: 16 },
              React.createElement(
                'div',
                { style: { padding: '10px' } },
                React.createElement(
                  antd.Select,
                  {
                    showSearch: true,
                    style: { width: 200 },
                    placeholder: 'Select a person',
                    optionFilterProp: 'children',
                    onChange: this.handleSelectChange,
                    value: value,
                    filterOption: function filterOption(input, option) {
                      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    }
                  },
                  list && list instanceof Array && list.map(function (op) {
                    return React.createElement(
                      Option,
                      { value: op, key: op },
                      op
                    );
                  })
                ),
                '\xA0\xA0',
                React.createElement(
                  antd.Button,
                  { onClick: this.addShare, disabled: !value },
                  React.createElement(antd.Icon, { type: 'plus' }),
                  '\u6DFB\u52A0'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Share;
}(React.Component);

Share$1.propTypes = {
  // form: PropTypes.object,
  list: PropTypes.array,
  share: PropTypes.func,
  title: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string
};

return Share$1;

})));
//# sourceMappingURL=bundle.js.map
