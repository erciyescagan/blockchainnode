/**
 * Blockchain.com Exchange REST API
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. \\ These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account \\ Select API from the drop down menu \\ Fill out form and click “Create New API Key Now” \\ Once generated you can view your keys under API Settings. \\ Please be aware that the API key can only be used once it was verified via email.  The API key must be set via the \\ `X-API-Token`\\ header.  The base URL to be used for all calls is \\ `https://api.blockchain.com/v3/exchange`  Autogenerated clients for this API can be found [here](https://github.com/blockchain/lib-exchange-client). 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.blockchain.exchange.rest/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.blockchain.exchange.rest/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BlockchainComExchangeRestApi);
  }
}(this, function(expect, BlockchainComExchangeRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BlockchainComExchangeRestApi.SymbolStatus();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SymbolStatus', function() {
    it('should create an instance of SymbolStatus', function() {
      // uncomment below and update the code to test SymbolStatus
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be.a(BlockchainComExchangeRestApi.SymbolStatus);
    });

    it('should have the property baseCurrency (base name: "base_currency")', function() {
      // uncomment below and update the code to test the property baseCurrency
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property baseCurrencyScale (base name: "base_currency_scale")', function() {
      // uncomment below and update the code to test the property baseCurrencyScale
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property counterCurrency (base name: "counter_currency")', function() {
      // uncomment below and update the code to test the property counterCurrency
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property counterCurrencyScale (base name: "counter_currency_scale")', function() {
      // uncomment below and update the code to test the property counterCurrencyScale
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property minPriceIncrement (base name: "min_price_increment")', function() {
      // uncomment below and update the code to test the property minPriceIncrement
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property minPriceIncrementScale (base name: "min_price_increment_scale")', function() {
      // uncomment below and update the code to test the property minPriceIncrementScale
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property minOrderSize (base name: "min_order_size")', function() {
      // uncomment below and update the code to test the property minOrderSize
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property minOrderSizeScale (base name: "min_order_size_scale")', function() {
      // uncomment below and update the code to test the property minOrderSizeScale
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property maxOrderSize (base name: "max_order_size")', function() {
      // uncomment below and update the code to test the property maxOrderSize
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property maxOrderSizeScale (base name: "max_order_size_scale")', function() {
      // uncomment below and update the code to test the property maxOrderSizeScale
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property lotSize (base name: "lot_size")', function() {
      // uncomment below and update the code to test the property lotSize
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property lotSizeScale (base name: "lot_size_scale")', function() {
      // uncomment below and update the code to test the property lotSizeScale
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property auctionPrice (base name: "auction_price")', function() {
      // uncomment below and update the code to test the property auctionPrice
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property auctionSize (base name: "auction_size")', function() {
      // uncomment below and update the code to test the property auctionSize
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property auctionTime (base name: "auction_time")', function() {
      // uncomment below and update the code to test the property auctionTime
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

    it('should have the property imbalance (base name: "imbalance")', function() {
      // uncomment below and update the code to test the property imbalance
      //var instane = new BlockchainComExchangeRestApi.SymbolStatus();
      //expect(instance).to.be();
    });

  });

}));
