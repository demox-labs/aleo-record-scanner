## Installation & Running

1. Install [docker desktop](https://www.docker.com/products/docker-desktop/).
2. Install [Postgres](https://www.postgresql.org/download/).
3. Install protobuf: ` brew install protobuf`.
4. Rename `.env.example` to `.env`.
5. Run `yarn && yarn install`.
6. Start the local aleo database inside of a docker container: `yarn local-db-up`.
7. Apply database migrations: `yarn migrate`.
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
