"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrdType = _interopRequireDefault(require("./OrdType"));

var _Side = _interopRequireDefault(require("./Side"));

var _TimeInForce = _interopRequireDefault(require("./TimeInForce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseOrder model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BaseOrder
 * @version 1.0.0
 */
var BaseOrder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseOrder</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BaseOrder
   * @param clOrdId {String} Reference field provided by client. Cannot exceed 20 characters, only alphanumeric characters are allowed.
   * @param ordType {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrdType} 
   * @param symbol {String} Blockchain symbol identifier
   * @param side {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Side} 
   * @param orderQty {Number} The order size in the terms of the base currency
   */
  function BaseOrder(clOrdId, ordType, symbol, side, orderQty) {
    _classCallCheck(this, BaseOrder);

    BaseOrder.initialize(this, clOrdId, ordType, symbol, side, orderQty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseOrder, null, [{
    key: "initialize",
    value: function initialize(obj, clOrdId, ordType, symbol, side, orderQty) {
      obj['clOrdId'] = clOrdId;
      obj['ordType'] = ordType;
      obj['symbol'] = symbol;
      obj['side'] = side;
      obj['orderQty'] = orderQty;
    }
    /**
     * Constructs a <code>BaseOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BaseOrder} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BaseOrder} The populated <code>BaseOrder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseOrder();

        if (data.hasOwnProperty('clOrdId')) {
          obj['clOrdId'] = _ApiClient["default"].convertToType(data['clOrdId'], 'String');
        }

        if (data.hasOwnProperty('ordType')) {
          obj['ordType'] = _OrdType["default"].constructFromObject(data['ordType']);
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('side')) {
          obj['side'] = _Side["default"].constructFromObject(data['side']);
        }

        if (data.hasOwnProperty('orderQty')) {
          obj['orderQty'] = _ApiClient["default"].convertToType(data['orderQty'], 'Number');
        }

        if (data.hasOwnProperty('timeInForce')) {
          obj['timeInForce'] = _TimeInForce["default"].constructFromObject(data['timeInForce']);
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('expireDate')) {
          obj['expireDate'] = _ApiClient["default"].convertToType(data['expireDate'], 'Number');
        }

        if (data.hasOwnProperty('minQty')) {
          obj['minQty'] = _ApiClient["default"].convertToType(data['minQty'], 'Number');
        }

        if (data.hasOwnProperty('stopPx')) {
          obj['stopPx'] = _ApiClient["default"].convertToType(data['stopPx'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BaseOrder;
}();
/**
 * Reference field provided by client. Cannot exceed 20 characters, only alphanumeric characters are allowed.
 * @member {String} clOrdId
 */


BaseOrder.prototype['clOrdId'] = undefined;
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrdType} ordType
 */

BaseOrder.prototype['ordType'] = undefined;
/**
 * Blockchain symbol identifier
 * @member {String} symbol
 */

BaseOrder.prototype['symbol'] = undefined;
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Side} side
 */

BaseOrder.prototype['side'] = undefined;
/**
 * The order size in the terms of the base currency
 * @member {Number} orderQty
 */

BaseOrder.prototype['orderQty'] = undefined;
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/TimeInForce} timeInForce
 */

BaseOrder.prototype['timeInForce'] = undefined;
/**
 * The limit price for the order
 * @member {Number} price
 */

BaseOrder.prototype['price'] = undefined;
/**
 * expiry date in the format YYYYMMDD
 * @member {Number} expireDate
 */

BaseOrder.prototype['expireDate'] = undefined;
/**
 * The minimum quantity required for an IOC fill
 * @member {Number} minQty
 */

BaseOrder.prototype['minQty'] = undefined;
/**
 * The limit price for the order
 * @member {Number} stopPx
 */

BaseOrder.prototype['stopPx'] = undefined;
var _default = BaseOrder;
exports["default"] = _default;