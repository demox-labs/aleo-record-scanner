# serialNumbers

## Description

Returns details of specific blocks within a range of heights from Aleo blockchain.

1000 blocks can be queried at maximum in a single request.

## Method Parameters

- **`params`** - *`Object`*:
  - **`serialNumbers`** - *`Array<string>`*: An array of serial numbers `field` aleo objects as strings to retrieve information for.

## Returns

- **`result`** - *`Array<Object>`*: An array of objects containing details for each record corresponding to input serial numbers.
  - Record detail object:
    - **`serial_number`** - *`string`*: The serial number of the record.
    - **`program_id`** - *`string`*: The ID of the program that generated the record.
    - **`block_id`** - *`number`*: The height of the block containing the record.
    - **`height`** - *`string`*: The block height where the record was produced.
    - **`timestamp`** - *`string`*: The timestamp when the record was created.
    - **`transaction_id`** - *`string`*: The transaction ID that generated the record.
    - **`transition_id`** - *`string`*: The transition ID that generated the record.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "serialNumbers",
    "params": {
      "serialNumbers": [
        "5870700304294811149033096720219055499575762400180303520383718241817742543235field",
        "4field"
      ]
    }
}'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "serial_number": "5870700304294811149033096720219055499575762400180303520383718241817742543235field",
      "program_id": "credits.aleo",
      "block_id": 90995,
      "height": "90253",
      "timestamp": "1688526707",
      "transaction_id": "at1mzndh3uqf2sv73v4pws3meu8mwdnwwet434w8sjzwj2np9vhl5gquz30n4",
      "transition_id": "as13hec29slea6vy6kgjwpkavvdp0f8qjevc2s06kxg3v4e3ld0sqgsrrxnfu"
    }
  ]
}
```
