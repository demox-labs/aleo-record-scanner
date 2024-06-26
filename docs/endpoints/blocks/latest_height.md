# latest/height

## Description

Returns the latest block height from Aleo blockchain.

## Method Parameters

- `<empty>`

## Returns

- **`result`** - *`number`*: The latest block height.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "latest/height"
 }'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 2758487
}
```
