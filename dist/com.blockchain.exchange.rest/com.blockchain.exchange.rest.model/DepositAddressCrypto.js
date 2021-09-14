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
 * The DepositAddressCrypto model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositAddressCrypto
 * @version 1.0.0
 */
var DepositAddressCrypto = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DepositAddressCrypto</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositAddressCrypto
   * @param type {String} 
   * @param address {String} Address to deposit to. If a tag or memo must be used, it is separated by a colon.
   */
  function DepositAddressCrypto(type, address) {
    _classCallCheck(this, DepositAddressCrypto);

    DepositAddressCrypto.initialize(this, type, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DepositAddressCrypto, null, [{
    key: "initialize",
    value: function initialize(obj, type, address) {
      obj['type'] = type;
      obj['address'] = address;
    }
    /**
     * Constructs a <code>DepositAddressCrypto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositAddressCrypto} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositAddressCrypto} The populated <code>DepositAddressCrypto</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DepositAddressCrypto();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DepositAddressCrypto;
}();
/**
 * @member {String} type
 */


DepositAddressCrypto.prototype['type'] = undefined;
/**
 * Address to deposit to. If a tag or memo must be used, it is separated by a colon.
 * @member {String} address
 */

DepositAddressCrypto.prototype['address'] = undefined;
var _default = DepositAddressCrypto;
exports["default"] = _default;