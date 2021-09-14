"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WithdrawalStatus = _interopRequireDefault(require("./WithdrawalStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WithdrawalInfo model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo
 * @version 1.0.0
 */
var WithdrawalInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WithdrawalInfo</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo
   * @param amount {Number} The amount to withdraw in the currency specified
   * @param currency {String} 
   * @param beneficiary {String} 
   */
  function WithdrawalInfo(amount, currency, beneficiary) {
    _classCallCheck(this, WithdrawalInfo);

    WithdrawalInfo.initialize(this, amount, currency, beneficiary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WithdrawalInfo, null, [{
    key: "initialize",
    value: function initialize(obj, amount, currency, beneficiary) {
      obj['amount'] = amount;
      obj['currency'] = currency;
      obj['beneficiary'] = beneficiary;
    }
    /**
     * Constructs a <code>WithdrawalInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo} The populated <code>WithdrawalInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WithdrawalInfo();

        if (data.hasOwnProperty('withdrawalId')) {
          obj['withdrawalId'] = _ApiClient["default"].convertToType(data['withdrawalId'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ApiClient["default"].convertToType(data['fee'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('beneficiary')) {
          obj['beneficiary'] = _ApiClient["default"].convertToType(data['beneficiary'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _WithdrawalStatus["default"].constructFromObject(data['state']);
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return WithdrawalInfo;
}();
/**
 * Unique ID for this withdrawal
 * @member {String} withdrawalId
 */


WithdrawalInfo.prototype['withdrawalId'] = undefined;
/**
 * The amount to withdraw in the currency specified
 * @member {Number} amount
 */

WithdrawalInfo.prototype['amount'] = undefined;
/**
 * The amount charged in fees for this withdrawal
 * @member {Number} fee
 */

WithdrawalInfo.prototype['fee'] = undefined;
/**
 * @member {String} currency
 */

WithdrawalInfo.prototype['currency'] = undefined;
/**
 * @member {String} beneficiary
 */

WithdrawalInfo.prototype['beneficiary'] = undefined;
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalStatus} state
 */

WithdrawalInfo.prototype['state'] = undefined;
/**
 * Time in ms since 01/01/1970 (epoch)
 * @member {Number} timestamp
 */

WithdrawalInfo.prototype['timestamp'] = undefined;
var _default = WithdrawalInfo;
exports["default"] = _default;