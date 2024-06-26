# program

## Description

Returns program source code corresponding to a specific program ID.

## Method Parameters

- **`params`** - *`Object`*:
  - **`id`** - *`string`*: Program ID (example: `credits.aleo`).

## Returns

- **`result`** - *`string`*: Program source code aleo instructions.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type:  application/json' \
  --data-raw '{
      "jsonrpc": "2.0",
      "id": 1,
      "method": "program",
      "params": {
        "id": "helloworld.aleo"
    }
  }'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "program helloworld.aleo;\n\nfunction main:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n"
}
```
