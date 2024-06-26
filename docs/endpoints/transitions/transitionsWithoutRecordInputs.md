# transitionsWithoutRecordInputs

## Description

Returns details of transitions that do not have record inputs within a range of heights from Aleo blockchain.

## Method Parameters

- **`params`** - *`Object`*:
  - **`start`** - *`number`*: Start height of desired range (incuded).
  - **`end`** - *`number`*: End height of desired range (excuded).
  - **`page`** (optional) - *`number`*: Page number to get.
  - **`transitionsPerRequest`** (optional) - *`number`*: Maximum amount of transitions returned by the request.

## Returns

- **`result`** - *`Array<Object>`*: An array of transition objects without record inputs.
  - Transition object:
    - **`transition_id`** - *`string`*: The unique identifier of the transition.
    - **`transaction_id`** - *`string`*: The unique identifier of the transaction containing the transition.
    - **`program`** - *`string`*: The program code associated with the transition.
    - **`function_name`** - *`string`*: The name of the function executed in the transition.
    - **`height`** - *`string`*: The block height where the transition occurred.
    - **`tpk`** - *`string`*: The transition public key.
    - **`tcm`** - *`string`*: The transition commitment.
    - **`timestamp`** - *`string`*: The timestamp of the transition.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "transitionsWithoutRecordInputs",
     "params": {
        "start": 8065,
        "end": 8066,
        "page": 0,
        "transitionsPerRequest": 1
      }
 }'
```

### Response

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":[
    {
      "transition_id":"au14h0ljqfnxq5s3ec2rnugzczknppgz3uz8mdh8a8akh8mcz5zpvfqknh73g",
      "transaction_id":"at1wlv8kned8wcndtwz53qcsk96fzylwj2r4lwr26ckz78twgh5fg9qxdqzfq",
      "program":"program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n",
      "function_name":"hello",
      "height":"8065",
      "tpk":"5781052967258965210115266473022349918417471361025742024559562010035870282400group",
      "tcm":"3777746460910070837869129394435538597688343703944124315365175098063001496851field",
      "timestamp":"1697865738"
    }
  ]
}
```
