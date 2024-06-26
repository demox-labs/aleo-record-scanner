# getStakedBalanceForAddress

## Description

Returns the amount of Aleo credits a specific address has staked.

## Method Parameters

- **`params`** - *`Object`*:
  - **`address`** - *`string`*: The Aleo address to retrieve staked balance encoded in bech32 (prefix: `aleo`).

## Returns

- **`result`** - *`number`*: Amount of Aleo microcredits staked.

## Example

### Request

```bash
curl --location --request POST 'https://dev.aleorpc.com' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getStakedBalanceForAddress",
    "params": {
        "address": "aleo1wamjqlka7d0gazlxdys6n8e8zeee3ymedwvw8elvh7529kwd45rq0plgax"
    }
}'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": -6702023
}
```
