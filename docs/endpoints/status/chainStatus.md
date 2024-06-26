# chainStatus

## Description

Returns blockchain status details.

## Method Parameters

- `<empty>`

## Returns

- **`result`** - *`Object`*: An object containing the current status of the blockchain.
  - **`online`** - *`boolean`*: Indicates if the blockchain is online.
  - **`statusTitle`** - *`string`*: A brief title describing the current status.
  - **`statusMessage`** - *`string`*: A detailed message about the current status.
  - **`time`** - *`number`*: The timestamp when the status was reported.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "chainStatus"
 }'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "online": true,
    "statusTitle": "Everything is working as expected",
    "statusMessage": "There may be some temporary issues with the blockchain, but everything should be working as expected.",
    "time": 1683831724746
  }
}
```
