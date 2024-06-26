<h1 align="center">
        <img alt="snarkDB" src="./rocket.png" height="50" style="display: inline-block;  vertical-align: middle;">
        <span style="display: inline-block;  vertical-align: middle;">Aleo RPC API</span>
</h1>

<p align="center">
    <a href="https://docs.leo.app/aleo-rpc-api"> <img alt="Website" src="https://img.shields.io/badge/docs-online-blue"></a>
    <a href="https://status.leo.app/"><img src="https://img.shields.io/badge/status-ℹ-green"/></a>
    <a href="https://www.jsonrpc.org/specification"><img src="https://img.shields.io/badge/JSON RPC-2.0-orange"/></a>
</p>

<p align="center">
    An RPC API made to enable more diverse use cases and support many DApps in the Aleo ecosystem. It is currently used to support the <a href="https://leo.app">Leo Wallet</a> and follows the <a href="https://www.jsonrpc.org/specification">JSON-RPC 2.0 specification.</a>
</p>

## Available methods

### 📚 Blocks

- **[latest/height](./endpoints/blocks/latest_height.md)** - Get latest block height.
- **[latest/hash](./endpoints/blocks/latest_hash.md)** - Get latest block hash.
- **[latest/block](./endpoints/blocks/latest_block.md)** - Get latest block details.
- **[getStateRoot](./endpoints/blocks/getStateRoot.md)** - Get current state root.
- **[block](./endpoints/blocks/block.md)** - Get a specific block details.
- **[blocks](./endpoints/blocks/blocks.md)** - Get specific blocks details within a range of heights.
- **[getAleoBlocks](./endpoints/blocks/getAleoBlocks.md)** - Get specific blocks full content within a range of heights.

### 💸 Transactions

- **[transaction](./endpoints/transactions/transaction.md)** - Get transaction details with a specific transaction ID.
- **[aleoTransaction](./endpoints/transactions/aleoTransaction.md)** - Get transaction full content corresponding to a specific transaction ID.
- **[transactions](./endpoints/transactions/transactions.md)** - Get transactions details included in a specific block.
- **[getPublicTransactionsForAddress](./endpoints/transactions/getPublicTransactionsForAddress.md)** - Get IDs of public transactions associated with a given address within a range of block heights.
- **[generateTransaction](./endpoints/transactions/generateTransaction.md)** - Delegate generation of a transaction proof by providing an authorization and transaction inputs.
- **[getGeneratedTransaction](./endpoints/transactions/getGeneratedTransaction.md)** - Get transaction generation job status, result, error message.

### 🔄 Transitions

- **[getTransactionId](./endpoints/transitions/getTransactionId.md)** - Get transaction ID from a transition ID.
- **[transitionsWithoutRecordInputs](./endpoints/transitions/transitionsWithoutRecordInputs.md)** - Get details of transitions that do not have record inputs within a range of heights from Aleo blockchain.

### 📝 Records

- **[records/all](./endpoints/records/records_all.md)** - Get all records generated within a range of blocks from the server.
- **[records/isOwner](./endpoints/records/records_isOwner.md)** - Get minimal information needed to verify ownership for records within a given block range on the Aleo blockchain.
- **[records/byTransitionAndIndex](./endpoints/records/records_byTransitionAndIndex.md)** - Get a specific record from id of transition where it got generarated and output index of it in this transition.
- **[serialNumbers](./endpoints/records/serialNumbers.md)** - Get information for a list of serial numbers.
- **[getStatePath](./endpoints/records/getStatePath.md)** - Get state path for a specific commitment.

### 📑 Programs

- **[program](./endpoints/programs/program.md)** - Get program source code corresponding to a specific program ID.
- **[getProgramTypes](./endpoints/programs/getProgramTypes.md)** - Get type of multiple programs from their IDs, ie: which standard they implement.
- **[transactionsForProgram](./endpoints/programs/transactionsForProgram.md)** - Get all transactions involving a specific program ID and function name.
- **[transactionsForProgramCount](./endpoints/programs/transactionsForProgramCount.md)** - Get the amount of transactions involving a specific program ID and function name.
- **[generateDeployment](./endpoints/deploymentGeneration/generateDeployment.md)** - Delegate proof generation of a program deployment.
- **[getGeneratedDeployment](./endpoints/deploymentGeneration/getGeneratedDeployment.md)**  - Get deployment job status, result, error message.

### 🗺️ Mappings

- **[getMappingValue](./endpoints/mappings/getMappingValue.md)** - Get value of a mapping at a specific key.

### 🎨 NFTs

- **[getPublicNFTsForAddress](./endpoints/NFTs/getPublicNFTsForAddress.md)** - Get public NFTs associated with a given address from Aleo blockchain.
- **[getPublicTokenProgramsForAddress](./endpoints/NFTs/getPublicTokenProgramsForAddress.md)** - Get all the IDs of token programs that an address interracted with publicly.

### 💰 Coinbase

- **[getCoinbaseRewards](./endpoints/coinbase/getCoinbaseRewards.md)** - Get the coinbase rewards associated with a given addres within a block range and page.
- **[getCoinbaseSummary](./endpoints/coinbase/getCoinbaseSummary.md)** - Get the coinbase summary for a given address.

### 🏦 Staking

- **[getStakedBalanceForAddress](./endpoints/staking/getStakedBalanceForAddress.md)** - Get the amount of Aleo credits a specific address has staked.

### 📊 Status

- **[chainStatus](./endpoints/status/chainStatus.md)** - Get blockchain status details.

## Usage

### Call a method

Any method above can be called by submitting a `POST` HTTP request to the unique endpoint corresponding to desired network, as described in [JSON-RPC 2.0 specification.](https://www.jsonrpc.org/specification)

This request should include a body with the following structure:

```json
{ 
  "jsonrpc": "2.0", 
  "id": 1, 
  "method": "...",
  (optional) "params": [...]
}
```

#### Example

Here is an example of such a request using `curl` command line program:

```bash
curl \
  --request POST \
  --location 'https://testnet3.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{ 
    "jsonrpc": "2.0", 
    "id": 1, 
    "method": "getHeight",
  }'
```

Which corresponding response is:

```bash
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 1470801
}
```

## Networks

Networks supported by the API:

| Network  | RPC Endpoint URL |
|:------------|-------------|
| Testnet 3 |`https://testnet3.aleorpc.com` |
| Testnet Beta |`https://testnetbeta.aleorpc.com` |

Status of these endpoints is available on the [Official Leo Status Page.](https://status.leo.app)

## Disclaimer

This API is free to use but **rate limiting may be introduced** to prevent spamming at any point.