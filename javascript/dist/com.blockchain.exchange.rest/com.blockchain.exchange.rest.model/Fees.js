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
 * The Fees model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Fees
 * @version 1.0.0
 */
var Fees = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Fees</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Fees
   * @param makerRate {Number} 
   * @param takerRate {Number} 
   * @param volumeInUSD {Number} 
   */
  function Fees(makerRate, takerRate, volumeInUSD) {
    _classCallCheck(this, Fees);

    Fees.initialize(this, makerRate, takerRate, volumeInUSD);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Fees, null, [{
    key: "initialize",
    value: function initialize(obj, makerRate, takerRate, volumeInUSD) {
      obj['makerRate'] = makerRate;
      obj['takerRate'] = takerRate;
      obj['volumeInUSD'] = volumeInUSD;
    }
    /**
     * Constructs a <code>Fees</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Fees} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Fees} The populated <code>Fees</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Fees();

        if (data.hasOwnProperty('makerRate')) {
          obj['makerRate'] = _ApiClient["default"].convertToType(data['makerRate'], 'Number');
        }

        if (data.hasOwnProperty('takerRate')) {
          obj['takerRate'] = _ApiClient["default"].convertToType(data['takerRate'], 'Number');
        }

        if (data.hasOwnProperty('volumeInUSD')) {
          obj['volumeInUSD'] = _ApiClient["default"].convertToType(data['volumeInUSD'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Fees;
}();
/**
 * @member {Number} makerRate
 */


Fees.prototype['makerRate'] = undefined;
/**
 * @member {Number} takerRate
 */

Fees.prototype['takerRate'] = undefined;
/**
 * @member {Number} volumeInUSD
 */

Fees.prototype['volumeInUSD'] = undefined;
var _default = Fees;
exports["default"] = _default;