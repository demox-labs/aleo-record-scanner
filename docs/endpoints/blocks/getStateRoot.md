# getStateRoot

## Description

Returns the latest state root.

## Method Parameters

- `<empty>`

## Returns

- **`result`** - *`string`*: Bech 32 representation of latest state root (prefix: `sr`).

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "getStateRoot"
 }'
```

### Response

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "result": "sr1y9hyscq2ze83nwdwjpz6tc9lfzxpacgpud6mc5xhu22xf32azupserq7ys"
}
```
