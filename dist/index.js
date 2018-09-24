'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var assign = require('object-assign');
var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = (_temp2 = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.handleLoadStart = function () {
            if (_this.props.onLoadStart) {
                _this.props.onLoadStart(_this.player);
            }
        }, _this.handleWaiting = function () {
            if (_this.props.onWaiting) {
                _this.props.onWaiting(_this.player);
            }
        }, _this.handleCanPlay = function () {
            if (_this.props.onCanPlay) {
                _this.props.onCanPlay(_this.player);
            }
        }, _this.handleCanPlayThrough = function () {
            if (_this.props.onCanPlayThrough) {
                _this.props.onCanPlayThrough(_this.player);
            }
        }, _this.handlePlaying = function () {
            if (_this.props.onPlaying) {
                _this.props.onPlaying(_this.player);
            }
        }, _this.handleEnded = function () {
            if (_this.props.onEnded) {
                _this.props.onEnded(_this.player);
            }
        }, _this.handleSeeking = function () {
            if (_this.props.onSeeking) {
                _this.props.onSeeking(_this.player);
            }
        }, _this.handleSeeked = function () {
            if (_this.props.onSeeked) {
                _this.props.onSeeked(_this.player);
            }
        }, _this.handlePlay = function () {
            if (_this.props.onPlay) {
                _this.props.onPlay(_this.player);
            }
        }, _this.handleFirstPlay = function () {
            if (_this.props.onFirstPlay) {
                _this.props.onFirstPlay(_this.player);
            }
        }, _this.handlePause = function () {
            if (_this.props.onPause) {
                _this.props.onPause(_this.player);
            }
        }, _this.handleDurationChange = function () {
            if (_this.props.onDurationChange) {
                _this.props.onDurationChange(_this.player);
            }
        }, _this.handleFullScreenChange = function () {
            if (_this.props.onFullScreenChange) {
                _this.props.onFullScreenChange(_this.player);
            }
        }, _this.handleError = function () {
            if (_this.props.onError) {
                _this.props.onError(_this.player);
            }
        }, _this.handleLoadedMetadata = function () {
            if (_this.props.onLoadedMetadata) {
                _this.props.onLoadedMetadata(_this.player);
            }
        }, _this.handlePosterChange = function () {
            if (_this.props.onPosterChange) {
                _this.props.onPosterChange(_this.player);
            }
        }, _this.handleTextData = function () {
            if (_this.props.onTextData) {
                _this.props.onTextData(_this.player);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            var player = videojs(this.refs.video, this.props.options).ready(function () {
                self.player = this;
                self.player.on('loadstart', self.handleLoadStart);
                self.player.on('waiting', self.handleWaiting);
                self.player.on('canplay', self.handleCanPlay);
                self.player.on('canplaythrough', self.handleCanPlayThrough);
                self.player.on('playing', self.handlePlaying);
                self.player.on('ended', self.handleEnded);
                self.player.on('seeking', self.handleSeeking);
                self.player.on('seeked', self.handleSeeked);
                self.player.on('play', self.handlePlay);
                self.player.on('firstplay', self.handleFirstPlay);
                self.player.on('pause', self.handlePause);
                self.player.on('durationchange', self.handleDurationChange);
                self.player.on('fullscreenchange', self.handleFullScreenChange);
                self.player.on('error', self.handleError);
                self.player.on('loadedmetadata', self.handleLoadedMetadata);
                self.player.on('posterchange', self.handlePosterChange);
                self.player.on('textdata', self.handleTextData);
            });
            if (this.props.onPlayerInit) this.props.onPlayerInit(player);
        }
    }, {
        key: 'render',
        value: function render() {
            var props = blacklist(this.props, 'children', 'className', 'src', 'type', 'onLoadStart', 'onWaiting', 'onCanPlay', 'onCanPlayThrough', 'onPlaying', 'onEnded', 'onSeeking', 'onSeeked', 'onPlay', 'onFirstPlay', 'onPause', 'onDurationChange', 'onFullScreenChange', 'onError', 'onLoadedMetadata', 'onPosterChange', 'onTextData', 'onPlayerInit', 'options');
            props.className = cx(this.props.className, 'videojs', 'video-js vjs-default-skin');

            assign(props, {
                ref: 'video',
                controls: true
            });

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'video',
                    props,
                    React.createElement('source', { src: this.props.src, type: this.props.type })
                )
            );
        }
    }]);

    return _class;
}(React.Component), _class.displayName = 'VideoJS', _temp2);