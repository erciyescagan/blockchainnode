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
 * The CancelOrderRequest model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CancelOrderRequest
 * @version 1.0.0
 */
var CancelOrderRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CancelOrderRequest</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CancelOrderRequest
   * @param action {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CancelOrderRequest.ActionEnum} 
   * @param orderID {Number} The unique order id assigned by the exchange
   */
  function CancelOrderRequest(action, orderID) {
    _classCallCheck(this, CancelOrderRequest);

    CancelOrderRequest.initialize(this, action, orderID);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelOrderRequest, null, [{
    key: "initialize",
    value: function initialize(obj, action, orderID) {
      obj['action'] = action;
      obj['orderID'] = orderID;
    }
    /**
     * Constructs a <code>CancelOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CancelOrderRequest} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CancelOrderRequest} The populated <code>CancelOrderRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelOrderRequest();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('orderID')) {
          obj['orderID'] = _ApiClient["default"].convertToType(data['orderID'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CancelOrderRequest;
}();
/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CancelOrderRequest.ActionEnum} action
 */


CancelOrderRequest.prototype['action'] = undefined;
/**
 * The unique order id assigned by the exchange
 * @member {Number} orderID
 */

CancelOrderRequest.prototype['orderID'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

CancelOrderRequest['ActionEnum'] = {
  /**
   * value: "CancelOrderRequest"
   * @const
   */
  "CancelOrderRequest": "CancelOrderRequest"
};
var _default = CancelOrderRequest;
exports["default"] = _default;