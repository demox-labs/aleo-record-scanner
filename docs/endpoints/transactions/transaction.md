# transaction

## Description

Returns transaction details corresponding to a specific transaction ID.

## Method Parameters

- **`params`** - *`Object`*:
  - **`id`** - *`string`*: Transaction ID encoded as bech32 (prefix: `at`).

## Returns

- **`result`** - *`Object`*: An object containing details of the transaction.
  - **`id`** - *`number`*: Unique identifier for the transaction.
  - **`block_id`** - *`number`*: The unique identifier of the block containing the transaction.
  - **`transaction_id`** - *`string`*: The transaction ID.
  - **`type`** - *`string`*: The type of the transaction.
  - **`index`** - *`number`*: The index of the transaction within the block.
  - **`status`** - *`string`*: The status of the transaction.
  - **`timestamp`** - *`string`*: The timestamp of the transaction.
  - **`height`** - *`string`*: The block height at which the transaction occurred.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "transaction",
     "params": {
        "id": "at1qf0rdpte850dp2nfqfwcr6qsz7akhdltfww4vgqe89z0yehquuzs5qy30j"
      }

 }'
```

### Response

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result": {
    "id": 12899947,
    "block_id": 2823859,
    "transaction_id": "at1qf0rdpte850dp2nfqfwcr6qsz7akhdltfww4vgqe89z0yehquuzs5qy30j",
    "type": "Execute",
    "index": 1,
    "status": "accepted",
    "timestamp": "1717328209",
    "height": "2758584"
  }
}
```
