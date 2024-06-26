# getProgramTypes

Returns type of multiple programs from their IDs, ie: which standard they implement.

## Description

## Method Parameters

- **`params`** - *`Object`*:
  - **`programs`** - *`Array<string>`*: List of Program IDs (example: `credits.aleo`).

## Returns

- **`result`** - *`Object`*: An object with requested program IDs as keys and implemented standard as value.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type:  application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getProgramTypes",
    "params": {
      "programs": [
        "hello_world.aleo"
        "arcane_nft_v00002.aleo"
      ]
    }
  }'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "hello_world.aleo": "untyped",
    "arcane_nft_v00002.aleo": "nft"
  }
}
```
