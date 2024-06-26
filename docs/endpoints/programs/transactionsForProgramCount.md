# transactionsForProgramCount

## Description

Returns the amount of transactions involving a specific program ID and function name.

## Method Parameters

- **`params`** - *`Object`*:
  - **`programId`** - *`string`*: Program ID (example: `credits.aleo`).
  - **`functionName`** - *`string`*: Name of the program function.

## Returns

- **`result`** - *`number`*: Amount of transactions found.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transactionsForProgramCount",
    "params": {
      "programId": "hello_world.aleo",
      "functionName": "hello"
    }
}'
```

### Result

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 1
}
```
