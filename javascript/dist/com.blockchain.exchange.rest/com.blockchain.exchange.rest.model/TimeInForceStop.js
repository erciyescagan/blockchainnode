"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class TimeInForceStop.
* @enum {}
* @readonly
*/
var TimeInForceStop = /*#__PURE__*/function () {
  function TimeInForceStop() {
    _classCallCheck(this, TimeInForceStop);

    _defineProperty(this, "GTC", "GTC");

    _defineProperty(this, "GTD", "GTD");
  }

  _createClass(TimeInForceStop, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>TimeInForceStop</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/TimeInForceStop} The enum <code>TimeInForceStop</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return TimeInForceStop;
}();

exports["default"] = TimeInForceStop;