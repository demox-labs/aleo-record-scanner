# getPublicNFTsForAddress

## Description

Retrieves public NFTs associated with a given address from Aleo blockchain.

## Method Parameters

- **`params`** - *`Object`*:
  - **`address`** - *`string`*: The Aleo address to retrieve the public NFTs for encoded in bech32 (prefix: `aleo`).

## Returns

- **`result`** - *`Array<Object>`*: An array of NFT objects.
  - NFT object - *`Object`*:
    - **`transactionId`** - *`string`*: Mint transaction ID.
    **`timestamp`** - *`string`*: Mint timestamp (in seconds) as string.
    **`programId`** - *`string`*: Collection, Program ID that minted the NFT record.
    **`tokenId`** - *`string`*: Token record data field, metadata URI, as Aleo struct.
    **`baseUri`** - *`string`*: Token collection metadata URI prefix.
    **`symbol`** - *`string`*: Token collection symbol.
    **`tokenIdString`** - *`string`*: Token record data field, metadata URI, parsed as string.
    **`edition`** - *`string`*: Token record edition scalar allowing for several NFTs from same collection to share the same data.

## Example

### Request

```bash
curl --location --request POST 'https://dev.aleorpc.com' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getPublicNFTsForAddress",
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
    {
      "transactionId": "at1hvfaccddwmawt0xexd5tfwg7n9jkfx4dhpgzhzu5rpmvjkest5qsy3zw5x",
      "timestamp": "1695098011",
      "programId": "privacy_pride_nft_test13.aleo",
      "tokenId": "{\n  data1: 61399871658546100888866327366761804400u128,\n  data2: 1852797802u128\n}",
      "baseUri": "aleo-public.s3.us-west-2.amazonaws.com/testnet3/",
      "symbol": "CUBS",
      "tokenIdString": "privacy-pride/1.json",
      "edition": "0scalar"
    }
  ]
}
```
