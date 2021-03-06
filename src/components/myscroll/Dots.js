Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  dots: {
    position: 'relative',
    padding: '20px 0 28px'
  },
  dotOuter: {
    width: 8,
    height: 8,
    padding: 4,
    float: 'left',
    position: 'absolute'
  },
  dot: {
    width: 8,
    height: 8,
    background: '#2abbcc',
    transition: 'all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    borderRadius: 4
  }
};

var Dots = function (_Component) {
  _inherits(Dots, _Component);

  function Dots(props) {
    _classCallCheck(this, Dots);

    var _this = _possibleConstructorReturn(this, (Dots.__proto__ || Object.getPrototypeOf(Dots)).call(this, props));

    _this.handleDotClick = function (index, event) {
      if (_this.props.onDotClick != null) {
        _this.props.onDotClick(index, event);
      }
    };

    _this.state = {
      previousIndex: props.index || 0
    };
    return _this;
  }

  _createClass(Dots, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var _this2 = this;

      var index = _ref.index;

      if (index !== this.props.index) {
        this.setState({ previousIndex: this.props.index });
        this.timeout = setTimeout(function () {
          _this2.timeout = null;
          _this2.setState({ previousIndex: index });
        }, 450);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeout != null) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          classes = _props.classes,
          count = _props.count,
          index = _props.index,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          onDotClick = _props.onDotClick,
          other = _objectWithoutProperties(_props, ['classes', 'count', 'index', 'style', 'onDotClick']);

      var previousIndex = this.state.previousIndex;


      return _react2.default.createElement(
        'div',
        _extends({ style: _extends({}, style, { width: count * 16 }) }, other),
        _react2.default.createElement(
          'div',
          { className: classes.dots },
          [].concat(_toConsumableArray(Array(count).keys())).map(function (i) {
            return _react2.default.createElement(
              'div',
              {
                key: i,
                className: classes.dotOuter,
                style: {
                  left: i * 16,
                  cursor: onDotClick != null ? 'pointer' : 'inherit'
                },
                onClick: function onClick(event) {
                  return _this3.handleDotClick(i, event);
                }
              },
              _react2.default.createElement(_Paper2.default, {
                elevation: 0,
                className: classes.dot,
                style: {
                  opacity: i >= Math.min(previousIndex, index) && i <= Math.max(previousIndex, index) ? 0 : 0.5
                }
              })
            );
          }),
          _react2.default.createElement(_Paper2.default, {
            elevation: 0,
            className: classes.dot,
            style: {
              position: 'absolute',
              marginTop: 4,
              left: Math.min(previousIndex, index) * 16 + 4,
              width: Math.abs(previousIndex - index) * 16 + 8
            }
          })
        )
      );
    }
  }]);

  return Dots;
}(_react.Component);

Dots.propTypes = {
  count: _propTypes2.default.number.isRequired,
  index: _propTypes2.default.number.isRequired,
  style: _propTypes2.default.object,
  onDotClick: _propTypes2.default.func
};

exports.default = (0, _withStyles2.default)(styles)(Dots);