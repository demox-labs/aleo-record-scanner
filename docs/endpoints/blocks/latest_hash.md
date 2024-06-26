# latest/hash

## Description

Returns the latest block hash from Aleo blockchain.

## Method Parameters

- `<empty>`

## Returns

- **`result`** - *`Object`*:
  - **`block_hash`** - *`string`*: Bech32 representation of Aleo block hash, `ab` prefix.

## Example

### Request

```bash
curl --location --request POST 'https://testnetbeta.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "latest/hash"
 }'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
      "block_hash": "ab170wtnaqf6yr8xtnknxdgexryc75tzqd0q9qv8k2cv6g907pdqvrqpjyh3e"
    }
}
```
