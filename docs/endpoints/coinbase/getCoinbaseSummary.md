# getCoinbaseSummary

## Description

Retrieves the coinbase summary for a given address from the Aleo blockchain.

## Method Parameters

- **`params`** - *`Array`*:
  - *`string`*: The Aleo address to retrieve coinbase summary encoded in bech32 (prefix: `aleo`).

## Returns

- **`result`** - *`Object`*: An object containing the coinbase summary.
  - **`address`** - *`string`*: The Aleo address.
  - **`total_reward`** - *`string`*: The total amount of rewards received.
  - **`total_incentive`** - *`string`*: The total amount of incentive.
  - **`summary`** - *`Object`*: A summary object containing the same details.
    - **`address`** - *`string`*: The Aleo address.
    - **`total_reward`** - *`string`*: The total amount of rewards received.
    - **`total_incentive`** - *`string`*: The total amount of incentives received.

## Example

### Request

```bash
curl --location --request POST 'https://dev.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getCoinbaseSummary",
    "params": [
      "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329"
    ]
  }'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
    "total_reward": "10131284806949",
    "total_incentive": "0",
    "summary": {
      "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
      "total_reward": "10131284806949",
      "total_incentive": "0"
    }
  }
 }
```
