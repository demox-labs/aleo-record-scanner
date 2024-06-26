# records/all

Fetches all records generated within a range of blocks from the server.

## Method Parameters

- **`params`** - *`Object`*:
  - **`start`** - *`number`*: Start block height of desired range (incuded).
  - **`end`** - *`number`*: End block height of desired range (excuded).
  - **`page`** (optional, default: `0`) - *`number`*: Page number to get.
  - **`recordsPerRequest`** (optional, default: `10000`) - *`number`*: Maximum amount of records returned by the request

## Returns

- **`result`** - *`Array<Object>`*: An array of record objects produced within the specified block range.
  - Record object:
    - **`record_ciphertext`** - *`string`*: The ciphertext of the record.
    - **`program_id`** - *`string`*: The ID of the program that generated the record.
    - **`block_id`** - *`number`*: The height of the block containing the record.
    - **`height`** - *`number`*: The block height where the record was produced.
    - **`id`** - *`number`*: Unique identifier for the record.
    - **`timestamp`** - *`string`*: The timestamp when the record was created.
    - **`block_hash`** - *`string`*: The hash of the block containing the record.
    - **`transition_id`** - *`string`*: The transition ID that generated the record.
    - **`transaction_id`** - *`string`*: The transaction ID that generated the record.
    - **`function_name`** - *`string`*: The name of the function executed in the transition.
    - **`output_index`** - *`number`*: The index of the output within the transition.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "records/all",
    "params": {
      "start": 300000,
      "end": 350000,
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
      "record_ciphertext": "record1qyqsq2fqmrtvrw3wflyzyz7er8sgyly0363n60uh7umxxfr7sdstjeqyqyxx66trwfhkxun9v35hguerqqpqzq8crs8qc7te98vjr35ktgx9jj7a8fdajh4ejvx7zgvnj75vlaf8p54yg5kgxz59c3g0qlenfcs0m569ngzjw2dgsyw50xr40vl74qcskek0l3t",
      "program_id": "credits.aleo",
      "block_id": 341921,
      "height": 300000,
      "id": 430855,
      "timestamp": "1691195921",
      "block_hash": "ab1evk49za28hnhxq8jef4qedy4kmcwyutwzkmpyr0shs6at0402u8szm5hey",
      "transition_id": "as1ndw987tlqlq0fe9h9r4twrw5ff0e4cqhyv8ja8pdsa3zpux3w5xqhmsf2q",
      "transaction_id": "at12nqxmeu4epk9zkrqgwpnqkckvydafumdx9566yqxwvs96vazduzq3d6r8s",
      "function_name": "mint",
      "output_index": 0
    }
  ]
 }
```
