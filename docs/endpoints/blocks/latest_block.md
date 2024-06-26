# latest/block

## Description

Returns the latest block details from Aleo blockchain.

## Method Parameters

- `<empty>`

## Returns

- **`result`** - *`Object`*: An object containing details of the latest block.
  - **`id`** - *`number`*: Unique identifier for the block.
  - **`height`** - *`string`*: The height of the block in the blockchain.
  - **`block_hash`** - *`string`*: The hash of the block.
  - **`previous_hash`** - *`string`*: The hash of the previous block.
  - **`previous_state_root`** - *`string`*: The root hash of the previous state.
  - **`transactions_root`** - *`string`*: The root hash of the transactions in the block.
  - **`round`** - *`string`*: The round number of the block.
  - **`coinbase_target`** - *`string`*: The target for coinbase.
  - **`proof_target`** - *`string`*: The proof target.
  - **`last_coinbase_target`** - *`string`*: The target for the last coinbase.
  - **`last_coinbase_timestamp`** - *`string`*: The timestamp of the last coinbase.
  - **`timestamp`** - *`string`*: The timestamp of the block.s
  - **`coinbase_reward`** - *`null | string`*: The reward for the coinbase.
  - **`finalize_root`** - *`string`*: The finalize root hash.
  - **`network`** - *`number`*: The network identifier.
  - **`ratifications_root`** - *`string`*: The root hash of ratifications.
  - **`solutions_root`** - *`string`*: The root hash of solutions.
  - **`subdag_root`** - *`string`*: The subdag root hash.
  - **`cumulative_weight`** - *`string`*: The cumulative weight of the block.
  - **`cumulative_proof_target`** - *`string`*: The cumulative proof target.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "latest/block"
 }'
```

### Response

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "result":{
      "id":2823859,
      "height":"2758584",
      "block_hash":"ab17uppp4gpxysdduzexch5gekkg09lxsdsswmpllxp0028sv2xvczsc2zv99",
      "previous_hash":"ab1h8wss9hvagjafrmqpfael2ka8sp9ujhlwm3cxy7dj90xpn2905zsjgfg94",
      "previous_state_root":"sr1fthuyd9qhswzlkd6f9jxsqpjdj6j4nfnzx02z6x4uj9wpefn4qqqatzzpk",
      "transactions_root":"5921516920880609316862456430090842775173766057023337047347451140512518961075field",
      "round":"5925654",
      "coinbase_target":"4294967295",
      "proof_target":"33554432",
      "last_coinbase_target":"4308271102",
      "last_coinbase_timestamp":"1711968633",
      "timestamp":"1717328209",
      "coinbase_reward":null,
      "finalize_root":"6782937905510142338894567209948077657217225961237793603538433212746202312880field",
      "network":3,
      "ratifications_root":"4710405186992022735262004958522644990224161834463249249031636047654518734485field",
      "solutions_root":"0field",
      "subdag_root":"2786039085244220585595328072521002856783567900190360046892230183363703801925field",
      "cumulative_weight":"3822692583719879",
      "cumulative_proof_target":"3468602439"
   }
}
```
