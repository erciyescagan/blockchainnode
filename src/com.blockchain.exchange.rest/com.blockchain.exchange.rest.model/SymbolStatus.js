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

import ApiClient from '../ApiClient';

/**
 * The SymbolStatus model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/SymbolStatus
 * @version 1.0.0
 */
class SymbolStatus {
    /**
     * Constructs a new <code>SymbolStatus</code>.
     * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/SymbolStatus
     */
    constructor() { 
        
        SymbolStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SymbolStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/SymbolStatus} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/SymbolStatus} The populated <code>SymbolStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SymbolStatus();

            if (data.hasOwnProperty('base_currency')) {
                obj['base_currency'] = ApiClient.convertToType(data['base_currency'], 'String');
            }
            if (data.hasOwnProperty('base_currency_scale')) {
                obj['base_currency_scale'] = ApiClient.convertToType(data['base_currency_scale'], 'Number');
            }
            if (data.hasOwnProperty('counter_currency')) {
                obj['counter_currency'] = ApiClient.convertToType(data['counter_currency'], 'String');
            }
            if (data.hasOwnProperty('counter_currency_scale')) {
                obj['counter_currency_scale'] = ApiClient.convertToType(data['counter_currency_scale'], 'Number');
            }
            if (data.hasOwnProperty('min_price_increment')) {
                obj['min_price_increment'] = ApiClient.convertToType(data['min_price_increment'], 'Number');
            }
            if (data.hasOwnProperty('min_price_increment_scale')) {
                obj['min_price_increment_scale'] = ApiClient.convertToType(data['min_price_increment_scale'], 'Number');
            }
            if (data.hasOwnProperty('min_order_size')) {
                obj['min_order_size'] = ApiClient.convertToType(data['min_order_size'], 'Number');
            }
            if (data.hasOwnProperty('min_order_size_scale')) {
                obj['min_order_size_scale'] = ApiClient.convertToType(data['min_order_size_scale'], 'Number');
            }
            if (data.hasOwnProperty('max_order_size')) {
                obj['max_order_size'] = ApiClient.convertToType(data['max_order_size'], 'Number');
            }
            if (data.hasOwnProperty('max_order_size_scale')) {
                obj['max_order_size_scale'] = ApiClient.convertToType(data['max_order_size_scale'], 'Number');
            }
            if (data.hasOwnProperty('lot_size')) {
                obj['lot_size'] = ApiClient.convertToType(data['lot_size'], 'Number');
            }
            if (data.hasOwnProperty('lot_size_scale')) {
                obj['lot_size_scale'] = ApiClient.convertToType(data['lot_size_scale'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('auction_price')) {
                obj['auction_price'] = ApiClient.convertToType(data['auction_price'], 'Number');
            }
            if (data.hasOwnProperty('auction_size')) {
                obj['auction_size'] = ApiClient.convertToType(data['auction_size'], 'Number');
            }
            if (data.hasOwnProperty('auction_time')) {
                obj['auction_time'] = ApiClient.convertToType(data['auction_time'], 'String');
            }
            if (data.hasOwnProperty('imbalance')) {
                obj['imbalance'] = ApiClient.convertToType(data['imbalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Blockchain symbol identifier
 * @member {String} base_currency
 */
SymbolStatus.prototype['base_currency'] = undefined;

/**
 * The number of decimals the currency can be split in
 * @member {Number} base_currency_scale
 */
SymbolStatus.prototype['base_currency_scale'] = undefined;

/**
 * Blockchain symbol identifier
 * @member {String} counter_currency
 */
SymbolStatus.prototype['counter_currency'] = undefined;

/**
 * The number of decimals the currency can be split in
 * @member {Number} counter_currency_scale
 */
SymbolStatus.prototype['counter_currency_scale'] = undefined;

/**
 * The price of the instrument must be a multiple of min_price_increment * (10^-min_price_increment_scale)
 * @member {Number} min_price_increment
 */
SymbolStatus.prototype['min_price_increment'] = undefined;

/**
 * @member {Number} min_price_increment_scale
 */
SymbolStatus.prototype['min_price_increment_scale'] = undefined;

/**
 * The minimum quantity for an order for this instrument must be min_order_size*(10^-min_order_size_scale)
 * @member {Number} min_order_size
 */
SymbolStatus.prototype['min_order_size'] = undefined;

/**
 * @member {Number} min_order_size_scale
 */
SymbolStatus.prototype['min_order_size_scale'] = undefined;

/**
 * The maximum quantity for an order for this instrument is max_order_size*(10^-max_order_size_scale). If this equal to zero, there is no limit
 * @member {Number} max_order_size
 */
SymbolStatus.prototype['max_order_size'] = undefined;

/**
 * @member {Number} max_order_size_scale
 */
SymbolStatus.prototype['max_order_size_scale'] = undefined;

/**
 * @member {Number} lot_size
 */
SymbolStatus.prototype['lot_size'] = undefined;

/**
 * @member {Number} lot_size_scale
 */
SymbolStatus.prototype['lot_size_scale'] = undefined;

/**
 * Symbol status; open, close, suspend, halt, halt-freeze.
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/SymbolStatus.StatusEnum} status
 */
SymbolStatus.prototype['status'] = undefined;

/**
 * @member {Number} id
 */
SymbolStatus.prototype['id'] = undefined;

/**
 * If the symbol is halted and will open on an auction, this will be the opening price.
 * @member {Number} auction_price
 */
SymbolStatus.prototype['auction_price'] = undefined;

/**
 * Opening size
 * @member {Number} auction_size
 */
SymbolStatus.prototype['auction_size'] = undefined;

/**
 * Opening time in HHMM format
 * @member {String} auction_time
 */
SymbolStatus.prototype['auction_time'] = undefined;

/**
 * Auction imbalance. If > 0 then there will be buy orders left over at the auction price. If < 0 then there will be sell orders left over at the auction price.
 * @member {Number} imbalance
 */
SymbolStatus.prototype['imbalance'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SymbolStatus['StatusEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "close"
     * @const
     */
    "close": "close",

    /**
     * value: "suspend"
     * @const
     */
    "suspend": "suspend",

    /**
     * value: "halt"
     * @const
     */
    "halt": "halt",

    /**
     * value: "halt-freeze"
     * @const
     */
    "halt-freeze": "halt-freeze"
};



export default SymbolStatus;
