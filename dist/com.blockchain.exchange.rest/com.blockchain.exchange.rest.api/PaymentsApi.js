"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Balance = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/Balance"));

var _BalanceMap = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/BalanceMap"));

var _CreateWithdrawalRequest = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/CreateWithdrawalRequest"));

var _DepositAddressCrypto = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/DepositAddressCrypto"));

var _DepositInfo = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/DepositInfo"));

var _WhitelistEntry = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/WhitelistEntry"));

var _WithdrawalInfo = _interopRequireDefault(require("../com.blockchain.exchange.rest.model/WithdrawalInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Payments service.
* @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi
* @version 1.0.0
*/
var PaymentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentsApi. 
  * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi
  * @class
  * @param {module:com.blockchain.exchange.rest/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.blockchain.exchange.rest/ApiClient#instance} if unspecified.
  */
  function PaymentsApi(apiClient) {
    _classCallCheck(this, PaymentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createWithdrawal operation.
   * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~createWithdrawalCallback
   * @param {String} error Error message, if any.
   * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Request a withdrawal
   * Call `GET /whitelist` first to retrieve the ID of the beneficiary. To add a beneficiary to the whitelist, please visit the profile page in the Exchange. This call only works if 2FA is enabled on the account.
   * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CreateWithdrawalRequest} createWithdrawalRequest 
   * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~createWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo}
   */


  _createClass(PaymentsApi, [{
    key: "createWithdrawal",
    value: function createWithdrawal(createWithdrawalRequest, callback) {
      var postBody = createWithdrawalRequest; // verify the required parameter 'createWithdrawalRequest' is set

      if (createWithdrawalRequest === undefined || createWithdrawalRequest === null) {
        throw new Error("Missing the required parameter 'createWithdrawalRequest' when calling createWithdrawal");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WithdrawalInfo["default"];
      return this.apiClient.callApi('/withdrawals', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAccountByTypeAndCurrency operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getAccountByTypeAndCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive current account balances
     * @param {String} account Account
     * @param {String} currency Currency
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getAccountByTypeAndCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance}
     */

  }, {
    key: "getAccountByTypeAndCurrency",
    value: function getAccountByTypeAndCurrency(account, currency, callback) {
      var postBody = null; // verify the required parameter 'account' is set

      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling getAccountByTypeAndCurrency");
      } // verify the required parameter 'currency' is set


      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getAccountByTypeAndCurrency");
      }

      var pathParams = {
        'account': account,
        'currency': currency
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Balance["default"];
      return this.apiClient.callApi('/accounts/{account}/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAccounts operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BalanceMap} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive current account balances
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BalanceMap}
     */

  }, {
    key: "getAccounts",
    value: function getAccounts(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BalanceMap["default"];
      return this.apiClient.callApi('/accounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getDepositAddress operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositAddressCrypto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a deposit address. Currently only crypto currencies are supported
     * @param {String} currency Currency
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositAddressCrypto}
     */

  }, {
    key: "getDepositAddress",
    value: function getDepositAddress(currency, callback) {
      var postBody = null; // verify the required parameter 'currency' is set

      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getDepositAddress");
      }

      var pathParams = {
        'currency': currency
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DepositAddressCrypto["default"];
      return this.apiClient.callApi('/deposits/{currency}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getDepositById operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status about a deposit
     * @param {String} depositId Deposit ID
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo}
     */

  }, {
    key: "getDepositById",
    value: function getDepositById(depositId, callback) {
      var postBody = null; // verify the required parameter 'depositId' is set

      if (depositId === undefined || depositId === null) {
        throw new Error("Missing the required parameter 'depositId' when calling getDepositById");
      }

      var pathParams = {
        'depositId': depositId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DepositInfo["default"];
      return this.apiClient.callApi('/deposits/{depositId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getDeposits operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of deposits
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from Epoch timestamp in ms
     * @param {Number} opts.to Epoch timestamp in ms
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo>}
     */

  }, {
    key: "getDeposits",
    value: function getDeposits(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_DepositInfo["default"]];
      return this.apiClient.callApi('/deposits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWhitelist operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWhitelistCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all whitelisted withdrawal accounts
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWhitelistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry>}
     */

  }, {
    key: "getWhitelist",
    value: function getWhitelist(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WhitelistEntry["default"]];
      return this.apiClient.callApi('/whitelist', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWhitelistByCurrency operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWhitelistByCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all whitelisted withdrawal accounts
     * @param {String} currency Currency
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWhitelistByCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry>}
     */

  }, {
    key: "getWhitelistByCurrency",
    value: function getWhitelistByCurrency(currency, callback) {
      var postBody = null; // verify the required parameter 'currency' is set

      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getWhitelistByCurrency");
      }

      var pathParams = {
        'currency': currency
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WhitelistEntry["default"]];
      return this.apiClient.callApi('/whitelist/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWithdrawalById operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWithdrawalByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status about a withdrawal
     * @param {String} withdrawalId Withdrawal ID
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWithdrawalByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo}
     */

  }, {
    key: "getWithdrawalById",
    value: function getWithdrawalById(withdrawalId, callback) {
      var postBody = null; // verify the required parameter 'withdrawalId' is set

      if (withdrawalId === undefined || withdrawalId === null) {
        throw new Error("Missing the required parameter 'withdrawalId' when calling getWithdrawalById");
      }

      var pathParams = {
        'withdrawalId': withdrawalId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WithdrawalInfo["default"];
      return this.apiClient.callApi('/withdrawals/{withdrawalId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWithdrawals operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWithdrawalsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of withdrawals
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from Epoch timestamp in ms
     * @param {Number} opts.to Epoch timestamp in ms
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWithdrawalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo>}
     */

  }, {
    key: "getWithdrawals",
    value: function getWithdrawals(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WithdrawalInfo["default"]];
      return this.apiClient.callApi('/withdrawals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PaymentsApi;
}();

exports["default"] = PaymentsApi;