"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrdType = _interopRequireDefault(require("./OrdType"));

var _OrderStatus = _interopRequireDefault(require("./OrderStatus"));

var _Side = _interopRequireDefault(require("./Side"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrderSummary model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary
 * @version 1.0.0
 */
var OrderSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderSummary</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary
   * @param clOrdId {String} Reference field provided by client. Cannot exceed 20 characters, only alphanumeric characters are allowed.
   * @param ordType {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrdType} 
   * @param ordStatus {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderStatus} 
   * @param side {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Side} 
   * @param symbol {String} Blockchain symbol identifier
   */
  function OrderSummary(clOrdId, ordType, ordStatus, side, symbol) {
    _classCallCheck(this, OrderSummary);

    OrderSummary.initialize(this, clOrdId, ordType, ordStatus, side, symbol);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderSummary, null, [{
    key: "initialize",
    value: function initialize(obj, clOrdId, ordType, ordStatus, side, symbol) {
      obj['clOrdId'] = clOrdId;
      obj['ordType'] = ordType;
      obj['ordStatus'] = ordStatus;
      obj['side'] = side;
      obj['symbol'] = symbol;
    }
    /**
     * Constructs a <code>OrderSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary} The populated <code>OrderSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderSummary();

        if (data.hasOwnProperty('exOrdId')) {
          obj['exOrdId'] = _ApiClient["default"].convertToType(data['exOrdId'], 'Number');
        }

        if (data.hasOwnProperty('clOrdId')) {
          obj['clOrdId'] = _ApiClient["default"].convertToType(data['clOrdId'], 'String');
        }

        if (data.hasOwnProperty('ordType')) {
          obj['ordType'] = _OrdType["default"].constructFromObject(data['ordType']);
        }

        if (data.hasOwnProperty('ordStatus')) {
          obj['ordStatus'] = _OrderStatus["default"].constructFromObject(data['ordStatus']);
        }

        if (data.hasOwnProperty('side')) {
          obj['side'] = _Side["default"].constructFromObject(data['side']);
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('lastShares')) {
          obj['lastShares'] = _ApiClient["default"].convertToType(data['lastShares'], 'Number');
        }

        if (data.hasOwnProperty('lastPx')) {
          obj['lastPx'] = _ApiClient["default"].convertToType(data['lastPx'], 'Number');
        }

        if (data.hasOwnProperty('leavesQty')) {
          obj['leavesQty'] = _ApiClient["default"].convertToType(data['leavesQty'], 'Number');
        }

        if (data.hasOwnProperty('cumQty')) {
          obj['cumQty'] = _ApiClient["default"].convertToType(data['cumQty'], 'Number');
        }

        if (data.hasOwnProperty('avgPx')) {
          obj['avgPx'] = _ApiClient["default"].convertToType(data['avgPx'], 'Number');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrderSummary;
}();
/**
 * The unique order id assigned by the exchange
 * @member {Number} exOrdId
 */


OrderSummary.prototype['exOrdId'] = undefined;
/**
 * Reference field provided by client. Cannot exceed 20 characters, only alphanumeric characters are allowed.
 * @member {String} clOrdId
 */

OrderSummary.prototype['clOrdId'] = undefined;
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrdType} ordType
 */

OrderSummary.prototype['ordType'] = undefined;
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderStatus} ordStatus
 */

OrderSummary.prototype['ordStatus'] = undefined;
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Side} side
 */

OrderSummary.prototype['side'] = undefined;
/**
 * The limit price for the order
 * @member {Number} price
 */

OrderSummary.prototype['price'] = undefined;
/**
 * The reason for rejecting the order, if applicable
 * @member {String} text
 */

OrderSummary.prototype['text'] = undefined;
/**
 * Blockchain symbol identifier
 * @member {String} symbol
 */

OrderSummary.prototype['symbol'] = undefined;
/**
 * The executed quantity for the order's last fill
 * @member {Number} lastShares
 */

OrderSummary.prototype['lastShares'] = undefined;
/**
 * The executed price for the last fill
 * @member {Number} lastPx
 */

OrderSummary.prototype['lastPx'] = undefined;
/**
 * For Open and Partially Filled orders this is the remaining quantity open for execution. For Canceled and Expired orders this is the quantity than was still open before cancellation/expiration. For Rejected order this is equal to orderQty. For other states this is always zero.
 * @member {Number} leavesQty
 */

OrderSummary.prototype['leavesQty'] = undefined;
/**
 * The quantity of the order which has been filled
 * @member {Number} cumQty
 */

OrderSummary.prototype['cumQty'] = undefined;
/**
 * Calculated the Volume Weighted Average Price of all fills for this order
 * @member {Number} avgPx
 */

OrderSummary.prototype['avgPx'] = undefined;
/**
 * Time in ms since 01/01/1970 (epoch)
 * @member {Number} timestamp
 */

OrderSummary.prototype['timestamp'] = undefined;
var _default = OrderSummary;
exports["default"] = _default;