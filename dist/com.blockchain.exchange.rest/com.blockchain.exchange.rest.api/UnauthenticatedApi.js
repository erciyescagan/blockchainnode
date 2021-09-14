"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderBook = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/OrderBook"));

var _PriceEvent = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/PriceEvent"));

var _SymbolStatus = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/SymbolStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Unauthenticated service.
* @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi
* @version 1.0.0
*/
var UnauthenticatedApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UnauthenticatedApi. 
  * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi
  * @class
  * @param {module:com.blockchain.exchange.rest/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.blockchain.exchange.rest/ApiClient#instance} if unspecified.
  */
  function UnauthenticatedApi(apiClient) {
    _classCallCheck(this, UnauthenticatedApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getL2OrderBook operation.
   * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getL2OrderBookCallback
   * @param {String} error Error message, if any.
   * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBook} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * L2 Order Book
   * Level 2 Order Book data is available through the l2 channel. Each entry in bids and asks arrays is a price level, along with its price (px), quantity (qty) and number of orders (num) attributes.
   * @param {String} symbol Symbol
   * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getL2OrderBookCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBook}
   */


  _createClass(UnauthenticatedApi, [{
    key: "getL2OrderBook",
    value: function getL2OrderBook(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getL2OrderBook");
      }

      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderBook["default"];
      return this.apiClient.callApi('/l2/{symbol}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getL3OrderBook operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getL3OrderBookCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * L3 Order Book
     * Level 3 Order Book data is available through the l3 channel. Each entry in bids and asks arrays is an order, along with its id (id), price (px) and quantity (qty) attributes. In contrast to the L2 order book, the L3 order book contains all individual orders without aggregation.
     * @param {String} symbol Symbol
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getL3OrderBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderBook}
     */

  }, {
    key: "getL3OrderBook",
    value: function getL3OrderBook(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getL3OrderBook");
      }

      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderBook["default"];
      return this.apiClient.callApi('/l3/{symbol}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSymbolByName operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getSymbolByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/SymbolStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Symbols
     * When the symbol is not halted the auction data in the message may be blank. When a symbol is in a halt state the auction data will populate as the book builds. When an opening time has been chosen, the auction-time field will show the opening time. Subsequent updates will be sent only if the symbol status changes in any way.
     * @param {String} symbol Symbol
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getSymbolByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/SymbolStatus}
     */

  }, {
    key: "getSymbolByName",
    value: function getSymbolByName(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getSymbolByName");
      }

      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SymbolStatus["default"];
      return this.apiClient.callApi('/symbols/{symbol}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSymbols operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getSymbolsCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/{String: SymbolStatus}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Symbols
     * When the symbol is not halted the auction data in the message may be blank. When a symbol is in a halt state the auction data will populate as the book builds. When an opening time has been chosen, the auction-time field will show the opening time. Subsequent updates will be sent only if the symbol status changes in any way.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getSymbolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/{String: SymbolStatus}>}
     */

  }, {
    key: "getSymbols",
    value: function getSymbols(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': _SymbolStatus["default"]
      };
      return this.apiClient.callApi('/symbols', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTickerBySymbol operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getTickerBySymbolCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price
     * @param {String} symbol Symbol
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getTickerBySymbolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent}
     */

  }, {
    key: "getTickerBySymbol",
    value: function getTickerBySymbol(symbol, callback) {
      var postBody = null; // verify the required parameter 'symbol' is set

      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getTickerBySymbol");
      }

      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PriceEvent["default"];
      return this.apiClient.callApi('/tickers/{symbol}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTickers operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getTickersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/UnauthenticatedApi~getTickersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent>}
     */

  }, {
    key: "getTickers",
    value: function getTickers(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_PriceEvent["default"]];
      return this.apiClient.callApi('/tickers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UnauthenticatedApi;
}();

exports["default"] = UnauthenticatedApi;