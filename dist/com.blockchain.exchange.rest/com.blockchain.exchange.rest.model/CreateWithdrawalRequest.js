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
 * The CreateWithdrawalRequest model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CreateWithdrawalRequest
 * @version 1.0.0
 */
var CreateWithdrawalRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateWithdrawalRequest</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CreateWithdrawalRequest
   * @param currency {String} 
   * @param beneficiary {String} 
   */
  function CreateWithdrawalRequest(currency, beneficiary) {
    _classCallCheck(this, CreateWithdrawalRequest);

    CreateWithdrawalRequest.initialize(this, currency, beneficiary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateWithdrawalRequest, null, [{
    key: "initialize",
    value: function initialize(obj, currency, beneficiary) {
      obj['currency'] = currency;
      obj['beneficiary'] = beneficiary;
    }
    /**
     * Constructs a <code>CreateWithdrawalRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CreateWithdrawalRequest} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CreateWithdrawalRequest} The populated <code>CreateWithdrawalRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateWithdrawalRequest();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('beneficiary')) {
          obj['beneficiary'] = _ApiClient["default"].convertToType(data['beneficiary'], 'String');
        }

        if (data.hasOwnProperty('sendMax')) {
          obj['sendMax'] = _ApiClient["default"].convertToType(data['sendMax'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CreateWithdrawalRequest;
}();
/**
 * The amount to withdraw in the currency specified
 * @member {Number} amount
 */


CreateWithdrawalRequest.prototype['amount'] = undefined;
/**
 * @member {String} currency
 */

CreateWithdrawalRequest.prototype['currency'] = undefined;
/**
 * @member {String} beneficiary
 */

CreateWithdrawalRequest.prototype['beneficiary'] = undefined;
/**
 * If set, sends the full available amount, minus fees. Amount may not be specified in that case. 
 * @member {Boolean} sendMax
 */

CreateWithdrawalRequest.prototype['sendMax'] = undefined;
var _default = CreateWithdrawalRequest;
exports["default"] = _default;