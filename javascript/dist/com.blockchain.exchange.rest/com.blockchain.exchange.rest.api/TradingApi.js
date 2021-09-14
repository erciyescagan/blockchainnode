"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseOrder = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/BaseOrder"));

var _Fees = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/Fees"));

var _OrderStatus = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/OrderStatus"));

var _OrderSummary = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/OrderSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Trading service.
* @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi
* @version 1.0.0
*/
var TradingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TradingApi. 
  * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi
  * @class
  * @param {module:com.blockchain.exchange.rest/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.blockchain.exchange.rest/ApiClient#instance} if unspecified.
  */
  function TradingApi(apiClient) {
    _classCallCheck(this, TradingApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createOrder operation.
   * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~createOrderCallback
   * @param {String} error Error message, if any.
   * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add an order
   * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BaseOrder} baseOrder Trade
   * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~createOrderCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary}
   */


  _createClass(TradingApi, [{
    key: "createOrder",
    value: function createOrder(baseOrder, callback) {
      var postBody = baseOrder; // verify the required parameter 'baseOrder' is set

      if (baseOrder === undefined || baseOrder === null) {
        throw new Error("Missing the required parameter 'baseOrder' when calling createOrder");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderSummary["default"];
      return this.apiClient.callApi('/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteAllOrders operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~deleteAllOrdersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all open orders (of a symbol, if specified)
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~deleteAllOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteAllOrders",
    value: function deleteAllOrders(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orders', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteOrder operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~deleteOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a trade
     * @param {Number} orderId Order ID
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~deleteOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteOrder",
    value: function deleteOrder(orderId, callback) {
      var postBody = null; // verify the required parameter 'orderId' is set

      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteOrder");
      }

      var pathParams = {
        'orderId': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orders/{orderId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFees operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~getFeesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Fees} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current fee level
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~getFeesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Fees}
     */

  }, {
    key: "getFees",
    value: function getFees(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Fees["default"];
      return this.apiClient.callApi('/fees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFills operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~getFillsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of filled orders
     * Returns filled orders, including partial fills. Returns at most 100 results, use timestamp to paginate for further results
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Only return results for this symbol
     * @param {Number} opts.from Epoch timestamp in ms
     * @param {Number} opts.to Epoch timestamp in ms
     * @param {Number} opts.limit Maximum amount of results to return in a single call. If omitted, 100 results are returned by default. 
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~getFillsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary>}
     */

  }, {
    key: "getFills",
    value: function getFills(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'from': opts['from'],
        'to': opts['to'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_OrderSummary["default"]];
      return this.apiClient.callApi('/trades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrderById operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~getOrderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific order
     * @param {Number} orderId Order ID
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~getOrderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary}
     */

  }, {
    key: "getOrderById",
    value: function getOrderById(orderId, callback) {
      var postBody = null; // verify the required parameter 'orderId' is set

      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderById");
      }

      var pathParams = {
        'orderId': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderSummary["default"];
      return this.apiClient.callApi('/orders/{orderId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrders operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~getOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list orders
     * Returns live and historic orders, defaulting to live orders. Returns at most 100 results, use timestamp to paginate for further results
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Only return results for this symbol
     * @param {Number} opts.from Epoch timestamp in ms
     * @param {Number} opts.to Epoch timestamp in ms
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderStatus} opts.status Order Status
     * @param {Number} opts.limit Maximum amount of results to return in a single call. If omitted, 100 results are returned by default. 
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/TradingApi~getOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/OrderSummary>}
     */

  }, {
    key: "getOrders",
    value: function getOrders(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'symbol': opts['symbol'],
        'from': opts['from'],
        'to': opts['to'],
        'status': opts['status'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_OrderSummary["default"]];
      return this.apiClient.callApi('/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TradingApi;
}();

exports["default"] = TradingApi;