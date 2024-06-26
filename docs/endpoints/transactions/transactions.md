# transactions

## Description

Returns transactions details included in a specific block.

## Method Parameters

- **`params`** - *`Object`*:
  - **`blockId`** - *`number`*: Height of desired block.

## Returns

- **`result`** - *`Array<Object>`*: An array of transaction objects included in the specified block.
  - Transaction object:
    - **`id`** - *`number`*: Unique identifier for the transaction.
    - **`block_id`** - *`number`*: The height of the block containing the transaction.
    - **`transaction_id`** - *`string`*: The transaction ID.
    - **`type`** - *`string`*: The type of the transaction.
    - **`index`** - *`number`*: The index of the transaction within the block.
    - **`status`** - *`string`*: The status of the transaction.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "transactions",
     "params": {
        "blockId": 2758584
      }

 }'
```

### Response

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":[
    {
      "id":12676613,
      "block_id":2758584,
      "transaction_id":"at1szl2e4k23q2smhuwwvhusw77v0uvgw26z47gmwspft5auedxqv9su2vxxa",
      "type":"Execute",
      "index":0,
      "status":"accepted"
    },
    {
      "id":12676614,
      "block_id":2758584,
      "transaction_id":"at1ewfkufwfvp8ja64wz9gjq47stfs6lrk4c5ugvt3ms224qdw4hv8sm8synv",
      "type":"Execute",
      "index":1,
      "status":"accepted"
    },
    {
      "id":12676615,
      "block_id":2758584,
      "transaction_id":"at1r5an34szym9ghg0hhdmv9faw25at6d44tzl093p3273tkg9rls8sc0mmrz",
      "type":"Execute",
      "index":2,
      "status":"accepted"
    },
    {
      "id":12676616,
      "block_id":2758584,
      "transaction_id":"at1s3f9hvk2qyxmt4gxyq7fnz4sfe6ygvs3k2e9h9znunygyzs2uqrspph9x5",
      "type":"Execute",
      "index":3,
      "status":"accepted"
    },
    {
      "id":12676617,
      "block_id":2758584,
      "transaction_id":"at10gjy8v8a6wj8mfsftexqq0480nl5j9ch4pdzhqerce4u9y9dqgpsfsz4ge",
      "type":"Execute",
      "index":4,
      "status":"accepted"
    }
  ]
}
```
