# records/byTransitionAndIndex

Returns a specific record from id of transition where it got generarated and output index of it in this transition.

## Method Parameters

- **`params`** - *`Object`*:
  - **`recordInfo`** - *`Array`*: Start block height of desired range (incuded).
    - *`string`*: The transition ID that generated the record encoded as bech32 (prefix: `au`).
    - *`number`*: The index of the output within the transition.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "records/byTransitionAndIndex",
    "params": {
      "recordInfo": [
        "au167pnvudhda4wed2amc5jc4pxz0pgdf8au3jq2g6h9x5jdm3rf58snzfzqd",
        0
      ]
    }
  }'
```
