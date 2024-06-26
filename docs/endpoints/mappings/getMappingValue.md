# getMappingValue

## Description

Returns value of a mapping at a specific key.

## Method Parameters

- **`params`** - *`Object`*:
  - **`program_id`** - *`string`*: Program ID where the mapping is defined.
  - **`mapping_name`** - *`string`*: Name of the mapping.
  - **`key`** - *`string`*: Key to get the value from (Aleo object).

## Returns

- **`result`** - *`string`*: Aleo object stored in mapping encoded in string.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "getMappingValue",
     "params": {
        "program_id": "credits.aleo",
        "mapping_name": "account",
        "key": "aleo1uran94ddjnvdr0neh8d0mzxuvv77pyprnp7jmzpkuh7950t46qyqnsadey"
      }
  }'
```

### Response

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result": "7225236u64"
}
```
