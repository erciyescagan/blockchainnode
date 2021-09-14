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
 * The OrderBookEntry model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBookEntry
 * @version 1.0.0
 */
var OrderBookEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderBookEntry</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBookEntry
   */
  function OrderBookEntry() {
    _classCallCheck(this, OrderBookEntry);

    OrderBookEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderBookEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderBookEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBookEntry} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBookEntry} The populated <code>OrderBookEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderBookEntry();

        if (data.hasOwnProperty('px')) {
          obj['px'] = _ApiClient["default"].convertToType(data['px'], 'Number');
        }

        if (data.hasOwnProperty('qty')) {
          obj['qty'] = _ApiClient["default"].convertToType(data['qty'], 'Number');
        }

        if (data.hasOwnProperty('num')) {
          obj['num'] = _ApiClient["default"].convertToType(data['num'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrderBookEntry;
}();
/**
 * @member {Number} px
 */


OrderBookEntry.prototype['px'] = undefined;
/**
 * @member {Number} qty
 */

OrderBookEntry.prototype['qty'] = undefined;
/**
 * Either the quantity of orders on this price level for L2, or the individual order id for L3
 * @member {Number} num
 */

OrderBookEntry.prototype['num'] = undefined;
var _default = OrderBookEntry;
exports["default"] = _default;