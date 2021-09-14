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
 * The WhitelistEntry model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry
 * @version 1.0.0
 */
var WhitelistEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WhitelistEntry</code>.
   * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry
   */
  function WhitelistEntry() {
    _classCallCheck(this, WhitelistEntry);

    WhitelistEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WhitelistEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WhitelistEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry} The populated <code>WhitelistEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WhitelistEntry();

        if (data.hasOwnProperty('whitelistId')) {
          obj['whitelistId'] = _ApiClient["default"].convertToType(data['whitelistId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WhitelistEntry;
}();
/**
 * Unique ID for each whitelist entry
 * @member {String} whitelistId
 */


WhitelistEntry.prototype['whitelistId'] = undefined;
/**
 * User specified name for this entry
 * @member {String} name
 */

WhitelistEntry.prototype['name'] = undefined;
/**
 * @member {String} currency
 */

WhitelistEntry.prototype['currency'] = undefined;
var _default = WhitelistEntry;
exports["default"] = _default;