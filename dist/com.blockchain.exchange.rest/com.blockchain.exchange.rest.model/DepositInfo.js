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
 * The DepositInfo model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo
 * @version 1.0.0
 */
var DepositInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DepositInfo</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo
   * @param depositId {String} Unique ID for this withdrawal
   * @param amount {Number} The amount that is credited in the currency specified
   * @param currency {String} 
   * @param address {String} Address to deposit to. If a tag or memo must be used, it is separated by a colon.
   * @param state {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo.StateEnum} 
   */
  function DepositInfo(depositId, amount, currency, address, state) {
    _classCallCheck(this, DepositInfo);

    DepositInfo.initialize(this, depositId, amount, currency, address, state);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DepositInfo, null, [{
    key: "initialize",
    value: function initialize(obj, depositId, amount, currency, address, state) {
      obj['depositId'] = depositId;
      obj['amount'] = amount;
      obj['currency'] = currency;
      obj['address'] = address;
      obj['state'] = state;
    }
    /**
     * Constructs a <code>DepositInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo} The populated <code>DepositInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DepositInfo();

        if (data.hasOwnProperty('depositId')) {
          obj['depositId'] = _ApiClient["default"].convertToType(data['depositId'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('txHash')) {
          obj['txHash'] = _ApiClient["default"].convertToType(data['txHash'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DepositInfo;
}();
/**
 * Unique ID for this withdrawal
 * @member {String} depositId
 */


DepositInfo.prototype['depositId'] = undefined;
/**
 * The amount that is credited in the currency specified
 * @member {Number} amount
 */

DepositInfo.prototype['amount'] = undefined;
/**
 * @member {String} currency
 */

DepositInfo.prototype['currency'] = undefined;
/**
 * Address to deposit to. If a tag or memo must be used, it is separated by a colon.
 * @member {String} address
 */

DepositInfo.prototype['address'] = undefined;
/**
 * The transaction hash of the transaction that deposited funds
 * @member {String} txHash
 */

DepositInfo.prototype['txHash'] = undefined;
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo.StateEnum} state
 */

DepositInfo.prototype['state'] = undefined;
/**
 * Time in ms since 01/01/1970 (epoch)
 * @member {Number} timestamp
 */

DepositInfo.prototype['timestamp'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

DepositInfo['StateEnum'] = {
  /**
   * value: "REJECTED"
   * @const
   */
  "REJECTED": "REJECTED",

  /**
   * value: "UNCONFIRMED"
   * @const
   */
  "UNCONFIRMED": "UNCONFIRMED",

  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED"
};
var _default = DepositInfo;
exports["default"] = _default;