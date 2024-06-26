## Installation & Running

1. Install [docker desktop](https://www.docker.com/products/docker-desktop/).
2. Install [Postgres](https://www.postgresql.org/download/).
3. Install rust: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
4. Install protobuf: ` brew install protobuf`
5. Rename `.env.example` to `.env`.
6. Run `yarn && yarn install`. 
7. Start the local aleo database inside of a docker container: `yarn local-db-up`
8. Run `yarn start:dev`.

Tests:
Run `yarn test`.

## Examples

### Get Height 
```
curl --location --request POST 'localhost:3000' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getHeight"
}'
```

>>>
```
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "height": "120087"
    }
}
```
