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
 * The PriceEvent model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent
 * @version 1.0.0
 */
var PriceEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PriceEvent</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent
   */
  function PriceEvent() {
    _classCallCheck(this, PriceEvent);

    PriceEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PriceEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PriceEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent} The populated <code>PriceEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PriceEvent();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('price_24h')) {
          obj['price_24h'] = _ApiClient["default"].convertToType(data['price_24h'], 'Number');
        }

        if (data.hasOwnProperty('volume_24h')) {
          obj['volume_24h'] = _ApiClient["default"].convertToType(data['volume_24h'], 'Number');
        }

        if (data.hasOwnProperty('last_trade_price')) {
          obj['last_trade_price'] = _ApiClient["default"].convertToType(data['last_trade_price'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PriceEvent;
}();
/**
 * Blockchain symbol identifier
 * @member {String} symbol
 */


PriceEvent.prototype['symbol'] = undefined;
/**
 * @member {Number} price_24h
 */

PriceEvent.prototype['price_24h'] = undefined;
/**
 * @member {Number} volume_24h
 */

PriceEvent.prototype['volume_24h'] = undefined;
/**
 * @member {Number} last_trade_price
 */

PriceEvent.prototype['last_trade_price'] = undefined;
var _default = PriceEvent;
exports["default"] = _default;