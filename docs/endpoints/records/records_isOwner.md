# records/isOwner

Retrieves ownership information for records within a given block range on the Aleo blockchain. This provides the minimal information needed to verify ownership of a record.

## Method Parameters

- **`params`** - *`Object`*:
  - **`start`** - *`number`*: Start block height of desired range (incuded).
  - **`end`** - *`number`*: End block height of desired range (excuded).
  - **`page`** (optional, default: `0`) - *`number`*: Page number to get.
  - **`recordsPerRequest`** (optional, default: `10000`) - *`number`*: Maximum amount of records returned by the request

## Returns

- **`result`** - *`Array<Object>`*: An array of record ownership details objects within the specified block range.
  - Ownership record object:
    - **`nonce_x`** - *`string`*: The x-coordinate of the nonce group element of the record.
    - **`nonce_y`** - *`string`*: The y-coordinate of the nonce of record.
    - **`owner_x`** - *`string`*: The x-coordinate of the multiplication of owner view key scalar and record nonce group element.
    - **`transition_id`** - *`string`*: The transition ID that generated the record.
    - **`output_index`** - *`number`*: The index of the output within the transition.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "records/isOwner",
    "params": {
      "start": 200000,
      "end": 200010,
      "page": 0,
      "recordsPerRequest": 1
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
      "nonce_x": "3918260195754394906908448854241869844389922307214581830273887322761200254253",
      "nonce_y": "7997215931412234159324234003801179947383733585077821788123487965593846252836",
      "owner_x": "1160900936987360956711220277753062897817177577088544272416308744862042451437",
      "transition_id": "as1525qhq69f3v4gwktcyahzsu9faee72eu7cqqexru9eq79k3p9q9q5pws3n",
      "output_index": 0
    }
  ]
}
```
