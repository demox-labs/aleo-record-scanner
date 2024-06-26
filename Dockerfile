FROM node:20 AS build

WORKDIR /aleo-rpc

COPY . .

RUN yarn install && yarn build:prod

FROM build AS test
EXPOSE 8080
EXPOSE 3000
EXPOSE 5432
# CMD ["yarn", "test-db-already-up"]

FROM node:20-alpine3.19 as production
WORKDIR /aleo-rpc
COPY --from=build /aleo-rpc/src ./src
COPY --from=build /aleo-rpc/views ./views
COPY --from=build /aleo-rpc/node_modules ./node_modules
COPY --from=build /aleo-rpc/dist ./dist
COPY --from=build /aleo-rpc/package.json .
COPY --from=build /aleo-rpc/tsconfig.json .
COPY --from=build /aleo-rpc/.env .
EXPOSE 8080
EXPOSE 3000
EXPOSE 5432
CMD ["yarn", "start:prod"]