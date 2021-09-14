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

/**
 * The Balance model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance
 * @version 1.0.0
 */
var Balance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Balance</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance
   * @param currency {String} 
   * @param balance {Number} 
   * @param available {Number} 
   * @param balanceLocal {Number} 
   * @param availableLocal {Number} 
   * @param rate {Number} 
   */
  function Balance(currency, balance, available, balanceLocal, availableLocal, rate) {
    _classCallCheck(this, Balance);

    Balance.initialize(this, currency, balance, available, balanceLocal, availableLocal, rate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Balance, null, [{
    key: "initialize",
    value: function initialize(obj, currency, balance, available, balanceLocal, availableLocal, rate) {
      obj['currency'] = currency;
      obj['balance'] = balance;
      obj['available'] = available;
      obj['balance_local'] = balanceLocal;
      obj['available_local'] = availableLocal;
      obj['rate'] = rate;
    }
    /**
     * Constructs a <code>Balance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance} The populated <code>Balance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Balance();

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'Number');
        }

        if (data.hasOwnProperty('available')) {
          obj['available'] = _ApiClient["default"].convertToType(data['available'], 'Number');
        }

        if (data.hasOwnProperty('balance_local')) {
          obj['balance_local'] = _ApiClient["default"].convertToType(data['balance_local'], 'Number');
        }

        if (data.hasOwnProperty('available_local')) {
          obj['available_local'] = _ApiClient["default"].convertToType(data['available_local'], 'Number');
        }

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _ApiClient["default"].convertToType(data['rate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Balance;
}();
/**
 * @member {String} currency
 */


Balance.prototype['currency'] = undefined;
/**
 * @member {Number} balance
 */

Balance.prototype['balance'] = undefined;
/**
 * @member {Number} available
 */

Balance.prototype['available'] = undefined;
/**
 * @member {Number} balance_local
 */

Balance.prototype['balance_local'] = undefined;
/**
 * @member {Number} available_local
 */

Balance.prototype['available_local'] = undefined;
/**
 * @member {Number} rate
 */

Balance.prototype['rate'] = undefined;
var _default = Balance;
exports["default"] = _default;