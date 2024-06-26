# getCoinbaseRewards

## Description

Retrieves the coinbase rewards associated with a given addres from the Aleo blockchain within a block range and page.

## Method Parameters

- **`params`** - *`Array`*:
  - *`string`*: The Aleo address to retrieve coinbase rewards encoded in bech32 (prefix: `aleo`).
  - *`number`*: Start height of desired range (incuded).
  - *`number`*: End height of desired range (excuded).
  - *`number`*: Page number to get.

## Returns

- **`result`** - *`Object`*: An object containing the rewards.
  - **`rewards`** - *`Array<Object>`*: An array of reward objects.
    - Reward object:
      - **`commitment`** - *`string`*: The commitment of the puzzle that generated the reward.
      - **`reward`** - *`number`*: The reward amount.
      - **`target`** - *`string`*: The target for the reward.
      - **`target_sum`** - *`string`*: The cumulative target sum.
      - **`height`** - *`string`*: The block height where the reward was generated.
      - **`block_hash`** - *`string`*: The hash of the block containing the reward.
      - **`timestamp`** - *`string`*: The timestamp when the reward was generated.
      - **`coinbase_reward`** - *`string`*: The coinbase reward amount.

## Example

### Request

```bash
curl --location --request POST 'https://dev.aleorpc.com' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getCoinbaseRewards",
    "params": [
      "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
      528280,
      528282,
      0
    ]
}'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "rewards": [
      {
        "commitment": "puzzle1emceplthtgfs8l0nm0nqj9d0gnqm8nzjnz9ytp4jd7yvt0xeg2757n5w6k3fse4v7snvkxhjcj8qzezecc2",
        "reward": 2131281,
        "target": "130431080",
        "target_sum": "2471651858",
        "height": "528282",
        "block_hash": "ab18yhglmzf60q35mmdvde0a7wepefkpphk5mh2nqh7crtfc7wp95psjuk2dr",
        "timestamp": "1694087741",
        "coinbase_reward": "80775014"
      }
    ]
  }
 }
```
