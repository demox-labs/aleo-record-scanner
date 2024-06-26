# getPublicTransactionsForAddress

## Description

Retrieves IDs of public transactions associated with a given address from Aleo blockchain, within a range of block heights.

50000 blocks can be queried at maximum in a single request.

## Method Parameters

- **`params`** - *`Object`*:
  - **`address`** - *`string`*: The Aleo address to retrieve the public NFTs for encoded in bech32 (prefix: `aleo`).
  - **`start`** - *`number`*: Start height of desired range (incuded).
  - **`end`** - *`number`*: End height of desired range (excuded).
  - **`page`** (optional) - *`number`*: Page number to get.
  - **`transitionsPerRequest`** (optional) - *`number`*: Maximum amount of transactions returned by the request.

## Returns

- **`result`** - *`Array<Object>`*: Array of corresponding transactions.
  - Transaction - *`Object`*:
    - **`transaction_id`** - *`string`*: Transaction ID encoded in bech32 (prefix: `at`).

## Example

### Request

```bash
curl --location --request POST 'https://dev.aleorpc.com' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getPublicTransactionsForAddress",
    "params": {
        "address": "aleo1uran94ddjnvdr0neh8d0mzxuvv77pyprnp7jmzpkuh7950t46qyqnsadey",
        "start": 1,
        "end": 50000,
        "page": 0,
        "transitionsPerRequest": 1
    }
}'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result":[
    {
      "transaction_id": "at1mpcpfg2487thdue9qn4j5ex8wnrcdlra7nyefgl997lgu9n8zy9sw5j46g"
    },
    {
      "transaction_id": "at1f2sz9y5hn4rgkmuqp5vrqld0qvr2erwguydlwvn4t6hdss26tsrs723rjc"
    },
    {
      "transaction_id": "at1r63pqykkrljzwd0sus9zdvyxcw2s2zywm9xetg2gc9v7762raqzqxrsu5z"
    },
    {
      "transaction_id": "at1r63pqykkrljzwd0sus9zdvyxcw2s2zywm9xetg2gc9v7762raqzqxrsu5z"
    }
  ]
}
```
