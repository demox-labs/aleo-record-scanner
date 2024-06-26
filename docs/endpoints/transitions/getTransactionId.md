# getTransactionId

## Description

Returns ID of the transaction containing a transition with specific ID.

## Method Parameters

- **`params`** - *`Object`*:
  - **`transition_id`** - *`string`*: Transition ID encoded as bech32 (prefix: `au`).

## Returns

- **`result`** - *`string`*: Transaction ID encoded as bech32 (prefix: `at`).

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "getTransactionId",
     "params": {
        "transition_id": "au1lcmxhkgq47elf88kwkxt94u3l5upzknk0p9xtkyyscujjpnpngxsrfsxzf"
      }

 }'
```

### Response

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result": "at1qf0rdpte850dp2nfqfwcr6qsz7akhdltfww4vgqe89z0yehquuzs5qy30j"
}
```
