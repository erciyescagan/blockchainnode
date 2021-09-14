"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderBookEntry = _interopRequireDefault(require("./OrderBookEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrderBook model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBook
 * @version 1.0.0
 */
var OrderBook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderBook</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBook
   */
  function OrderBook() {
    _classCallCheck(this, OrderBook);

    OrderBook.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderBook, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderBook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBook} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBook} The populated <code>OrderBook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderBook();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('bids')) {
          obj['bids'] = _ApiClient["default"].convertToType(data['bids'], [_OrderBookEntry["default"]]);
        }

        if (data.hasOwnProperty('asks')) {
          obj['asks'] = _ApiClient["default"].convertToType(data['asks'], [_OrderBookEntry["default"]]);
        }
      }

      return obj;
    }
  }]);

  return OrderBook;
}();
/**
 * Blockchain symbol identifier
 * @member {String} symbol
 */


OrderBook.prototype['symbol'] = undefined;
/**
 * @member {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBookEntry>} bids
 */

OrderBook.prototype['bids'] = undefined;
/**
 * @member {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBookEntry>} asks
 */

OrderBook.prototype['asks'] = undefined;
var _default = OrderBook;
exports["default"] = _default;