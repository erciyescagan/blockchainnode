"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Balance = _interopRequireDefault(require("./Balance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BalanceMap model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BalanceMap
 * @version 1.0.0
 */
var BalanceMap = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BalanceMap</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BalanceMap
   * @extends Object
   * @param primary {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance>} 
   */
  function BalanceMap(primary) {
    _classCallCheck(this, BalanceMap);

    BalanceMap.initialize(this, primary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BalanceMap, null, [{
    key: "initialize",
    value: function initialize(obj, primary) {
      obj['primary'] = primary;
    }
    /**
     * Constructs a <code>BalanceMap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BalanceMap} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BalanceMap} The populated <code>BalanceMap</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BalanceMap();

        _ApiClient["default"].constructFromObject(data, obj, 'Array');

        if (data.hasOwnProperty('primary')) {
          obj['primary'] = _ApiClient["default"].convertToType(data['primary'], [_Balance["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BalanceMap;
}();
/**
 * @member {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance>} primary
 */


BalanceMap.prototype['primary'] = undefined;
var _default = BalanceMap;
exports["default"] = _default;