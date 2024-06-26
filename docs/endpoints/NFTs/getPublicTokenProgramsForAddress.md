# getPublicTokenProgramsForAddress

## Description

Retrieves all the IDs of token programs that an address interracted with publicly.

## Method Parameters

- **`params`** - *`Object`*:
  - **`address`** - *`string`*: The Aleo address to retrieve the token programs it interacted with encoded in bech32 (prefix: `aleo`).

## Returns

- **`result`** - *`Array<string>`*: Array of retrieved program IDs.

## Example

### Request

```bash
curl --location --request POST 'https://dev.aleorpc.com' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getPublicTokenProgramsForAddress",
    "params": {
        "address": "aleo1uran94ddjnvdr0neh8d0mzxuvv77pyprnp7jmzpkuh7950t46qyqnsadey"
    }
}'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    "credits.aleo"
  ]
}
```
