import { JSONRPCErrorCode, JSONRPCErrorException, JSONRPCRequest, JSONRPCResponse, JSONRPCServer, createJSONRPCErrorResponse } from 'json-rpc-2.0';
import logger from './shared/logger';
import {
  getAleoTransaction,
  getBlockRange,
  getBlockTransactions,
  getCoinbaseRewards,
  getCoinbaseSummary,
  getLatestBlock,
  getLatestHash,
  getTransaction,
  getAllRecords,
  getRecordOwnerInfos,
  getSerialNumberData,
  getProgram,
  getTransitionsWithoutRecordInputs,
  getTransactionsForProgram,
  getRecordsByTransitionAndIndex,
  getPublicNFTsForAddress,
  getPublicTransactionsForAddress,
  getFullBlocks,
  getTransactionId,
  getPublicTokenProgramsForAddress,
  getProgramTypes,
  getTransactionsForProgramCount,
  getStakedBalanceForAddress,
  MAX_NUM_RECORD_METADATA,
  getRecordMetadata
} from './db/db-queries';
import { getHeightCached, getLastIdCached } from './db/cached-db-queries';
import { redisDb } from './middleware/redisDb';
import { STATE_PATH_PATH, STATE_ROOT_PATH, fetchEndpoint, mappingValuePath } from './endpoints';

const server = new JSONRPCServer();

const exceptionMiddleware = async (next: any, request: JSONRPCRequest, serverParams: any) => {
  try {
    return await next(request, serverParams);
  } catch (error) {
    logger.error(error, request);
    if (error.code) {
      return createJSONRPCErrorResponse(request.id, error.code, error.message);
    } else {
      throw error;
    }
  }
};

const loggingMiddleware = async (next: any, request: JSONRPCRequest, serverParams: any) => {
  logger.info("Processing rpc request.", request);
  return await next(request, serverParams);
}

const requestTimeMiddleware = async (next: any, request: JSONRPCRequest, serverParams: any) => {
  const start = new Date().getTime();
  return await next(request, serverParams).then((response: JSONRPCResponse) => {
    const timeTaken = new Date().getTime() - start;
    logger.info(`Request handled in ${timeTaken}ms`, {"requestTime": timeTaken, ...request});
    return response;
  });
}

server.applyMiddleware(requestTimeMiddleware, loggingMiddleware, exceptionMiddleware);

/**
 * Retrieves the latest block height from the Aleo blockchain.
 * @param None
 * @returns {number} - The latest block height.
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "getHeight"
 * }'
 * 
 * @response
 * {
 *   "jsonrpc": "2.0",
 *   "id": 1,
 *   "result": 1470801
 * }
 */
server.addMethod("getHeight", async () => {
  return await getHeightCached();
});

server.addMethod("getLastRecordId", async () => {
  return await getLastIdCached();
});

/**
 * Retrieves a range of blocks from the Aleo blockchain.
 * @param {Array<number>} params - The method parameters, consisting of two numbers: the start block and end block.
 *
 * @returns {Promise<Object[]>} - A promise that resolves to an array of block objects.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "getBlocks",
 *     "params": [200000, 200001]
 * }'
 *
 * @response
 * {
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "result": [
 *         {
 *             "id": 215244,
 *             "height": "200000",
 *             "block_hash": "ab14dawgu4fums8f04ndfgk93ya8j6dwusclsa6twjcgxgtuafn95gsf5u3xu",
 *             "previous_hash": "ab1q3k6xymnm33k045avefjgah8w9vu8cu3s34qc54qkam0gksn6szs2d98zu",
 *             "previous_state_root": "700735652732762902674931888851725364821874726220465884814308091797200591223field",
 *             "transactions_root": "7939100830130035360236424809508276358238435468475552271174020071340942548183field",
 *             "coinbase_accumulator_point": "0field",
 *             "round": "200000",
 *             "coinbase_target": "751336503",
 *             "proof_target": "5869817",
 *             "last_coinbase_target": "749712066",
 *             "last_coinbase_timestamp": "1689928695",
 *             "timestamp": "1689928710",
 *             "signature": "sign18f6mdld5mysfym7fmdnlsfjcwfg6xfn0px37mvmc7zzl3kcfvcqerhulm7q4tdytjaar2y0kuvug30z4q3cfmmqzqjr2he9h3x0hzqm7rawvssddfv078wthdpqynfu3jh5qeruups7t7vyls3jxccnypxa5z55an3zwd9em29wrjxmpyymwflclchtzhr62hwthyumkge2qgutge4z",
 *             "coinbase_reward": null,
 *             "finalize_root": "2347499756727239097527357730627929185508370696360031054030113664724940109165field"
 *         }
 *     ]
 * }
 */
server.addMethod("getBlocks", async (params: any) => {
  const start = params![0];
  const end = params![1];
  return await getBlockRange(start, end);
});

/**
 * Retrieves the coinbase summary for a given public key from the Aleo blockchain.
 * @param {Array<any>} params - The method parameters, consisting of the public key.
 *
 * @returns {Promise<Object>} - A promise that resolves to an object containing the coinbase summary.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "getCoinbaseSummary",
 *     "params": [ "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329" ]
 * }'
 *
 * @response
 * {
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "result": {
 *         "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
 *         "total_reward": "10131284806949",
 *         "total_incentive": "0",
 *         "summary": {
 *             "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
 *             "total_reward": "10131284806949",
 *             "total_incentive": "0"
 *         }
 *     }
 * }
 */
server.addMethod("getCoinbaseSummary", async (params: any) => {
  const publicKey = params![0];
  return await getCoinbaseSummary(publicKey);
})

/**
 * Retrieves the coinbase rewards associated with a given public key from the Aleo blockchain within a block range and page.
 * @param {Array<any>} params - The method parameters, consisting of the public key, start block, end block, and page.
 *
 * @returns {Promise<Object>} - A promise that resolves to an object containing rewards information.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "getCoinbaseRewards",
 *     "params": [
 *         "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
 *         528280,
 *         528282,
 *         0
 *     ]
 * }'
 *
 * @response
 * {
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "result": {
 *         "rewards": [
 *             {
 *                 "commitment": "puzzle1emceplthtgfs8l0nm0nqj9d0gnqm8nzjnz9ytp4jd7yvt0xeg2757n5w6k3fse4v7snvkxhjcj8qzezecc2",
 *                 "reward": 2131281,
 *                 "target": "130431080",
 *                 "target_sum": "2471651858",
 *                 "height": "528282",
 *                 "block_hash": "ab18yhglmzf60q35mmdvde0a7wepefkpphk5mh2nqh7crtfc7wp95psjuk2dr",
 *                 "timestamp": "1694087741",
 *                 "coinbase_reward": "80775014"
 *             }
 *         ]
 *     }
 * }
 */
server.addMethod("getCoinbaseRewards", async (params: any) => {
  const publicKey = params![0];
  const startBlock = params![1];
  const endBlock = params![2];
  const page = params![3];
  return await getCoinbaseRewards(publicKey, startBlock, endBlock, page);
});

/// aleo rpc methods

server.addMethod("latest/height", async () => {
  return await getHeightCached();
});

server.addMethod("latest/hash", async () => {
  return await getLatestHash();
});

server.addMethod("latest/block", async () => {
  return await getLatestBlock();
});

server.addMethod("block", async (params: { block: number }) => {
  const blockNumber = params.block;
  return await getBlockRange(blockNumber, blockNumber + 1);
});

// Inclusive start, exclusive end
server.addMethod("blocks", async (params: { startHeight: number, endHeight: number }) => {
  const start = params.startHeight;
  const end = params.endHeight;
  return await getBlockRange(start, end);
});

server.addMethod("transactions", async (params: { blockId: number }) => {
  const blockId = params.blockId;
  return await getBlockTransactions(blockId);
});

server.addMethod("transaction", async (params: { id: string }) => {
  const txId = params.id;
  return await getTransaction(txId);
});

/**
 * Retrieves an Aleo transaction by its ID from the Aleo blockchain.
 *
 * @param {Object} params - The method parameters, consisting of the transaction ID.
 * @param {string} params.id - The transaction ID to retrieve.
 *
 * @returns {Promise<Object>} - A promise that resolves to an object containing the Aleo transaction details.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "aleoTransaction",
 *     "params": {
 *         "id": "at1x9v698ygmluvpufwf7fkmz4gwr7ylw9jd8mgesktegnh4a938gzsn4mfxa"
 *     }
 * }'
 *
 * @response
 * {
 *   "jsonrpc": "2.0",
 *   "id": 1,
 *   "result": {
 *       "status": null,
 *       "type": "execute",
 *       "index": 0,
 *       "transaction": {
 *           "type": "execute",
 *           "id": "at1x9v698ygmluvpufwf7fkmz4gwr7ylw9jd8mgesktegnh4a938gzsn4mfxa",
 *           "execution": {
 *               "transitions": [
 *                   {
 *                       "id": "as1dh69dwcdkax8zwtq3wmf9acrf2m65ytmysj3da3pwfqymggz5ggs0syate",
 *                       "program": "credits.aleo",
 *                       "function": "transfer_private",
 *                       "inputs": [
 *                           {
 *                               "type": "record",
 *                               "id": "1141785531037140725332743409597454930681697709339181481074265705380657033744field",
 *                               "value": "",
 *                               "tag": "5087441509477478586323216785399060747448598403764243260437665826277965751021field"
 *                           },
 *                           {
 *                               "type": "private",
 *                               "id": "2484682552830238655845527500423515980824499564078678684469850739485503971842field",
 *                               "value": "ciphertext1qgqgdl7rxdyd8g3sls7krw0yqykfavhyec4e69k2hljgyjqr2d546q22g2txzwuqdsty7ntalrzdgh6098jpgjm7kfds6qwsn8r5q93vzgtsrjyh"
 *                           },
 *                           {
 *                               "type": "private",
 *                               "id": "3981076883124325449074725082853606804326416893523500736196848009668905564532field",
 *                               "value": "ciphertext1qyqxjplpkxev5mht67pm59wch6h2s9yltm3r0up2hlfjml32e8sfqrgz3ychn"
 *                           }
 *                       ],
 *                       "outputs": [
 *                           {
 *                               "type": "record",
 *                               "id": "3782008484785590245347242950668133394619177287678859285070481306847972794087field",
 *                               "checksum": "7185850345248089221140749546323184127187973082673955313766029922282129778789field",
 *                               "value": "record1qyqspdnuhm7q5wmxed6shxzcwmcwpflzrg92d7gzg9xmxwyz05dsxsqdqyxx66trwfhkxun9v35hguerqqpqzqxfpf9hzmsp7e56ha5yf4tjm5ezuxrggqqth392cxxpu5fmmvp8q7r7vvqpdhskzg08p8jkgyxtkjdtw4w25ktsmce4l5r380gd4m23qxjdk3g"
 *                           },
 *                           {
 *                               "type": "record",
 *                               "id": "2918354870734454560500036519819579046245650208684173203558189851812080057001field",
 *                               "checksum": "3020456040716143457050840719957317984835680180754800799743261113147861206723field",
 *                               "value": "record1qyqsqs7vaffxsc8xd65gd58us6v6xvc9gl6unte4zlyq92tv2zmgnzqdqyxx66trwfhkxun9v35hguerqqpqzq8hcqgzwa7huugwnk04835eyzjutr4j4sgnrh2005lne0tm6ycnq0es7k2c8q6eqwr9azjcdl7tzye9x4487260s25fz07gxl3qym5qxest5j9"
 *                           }
 *                       ],
 *                       "finalize": [],
 *                       "tpk": "17512975568062124187162895567355080436617523129841080864774794170684560917group",
 *                       "tcm": "8250414252976438672200298854801467879432616178169478955786756673972199189565field",
 *                       "fee": "0"
 *                   }
 *               ],
 *               "global_state_root": "ar1mpxfq6qfm234f2ppwchjahwsxpncpl4aa4c0g40he5m29hqn4ggsxfjecl",
 *               "proof": "proof1qqpqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqj53fyulsmg3ymzj8n26qtf0uwc0cdk0zva0gav7tggklc4kutn27dhacufcjkwh4mrzpxepr8gwgqktv22geueaaq7wmu7703u7m43yzasqedha0qey9mz7fuzvwlk9z4ef5klgt9utavu9ksh2na4jgsqw8e0mfnx7qhu7hrtqywkhp0284uu9rpz7q8q5nc4523mx7q8yrwmewuwljf5g2ylzhwhxkc72z6qgt2uex7tzhuyhqgstge4hgge6hu86hvrp4hfqkjmsqgc79xchgjstywgfyntks0nggv4h4vxm6w7qpc0mz8wxrldkwh0jhgh7q0n04ftaqlexp4pmu4ew6jsksqg2hrp92frtf4zu0maed82rmer5tgkupgcadq40p42az5tz73x8vrvedxyah3gxguw9ec9rl50d9f7pzpc622pegcj5te342gl556c5w4fhgzqg2mfrzkkfg3grxg07fzvtysxr4u0rqvcrxnmehv8mme46t67649j6eqyg42qlhhlxgrv35x7pfa5q9amfqq96djej7tgwy3l3nfygs8jh47d39ewa0utdwf02dvm3vupnl6nt5mghks96q4xssl7r0jquqya6np80tdfvz0jw7psxam2jgdf2cxwz257qe26ljujpvk797j85zp6q4r69nvgar6nqpkdusvknqz8zku4r6zkv0sswtuchpt7nflpuqz9gyuj05j3www5gpeuh83mwcku6ff62ukltzx0h50mm8kkqkszumt97l9nzvmkztse2j2xwznmx4klkm20syxw644tnnn3wrkr3xqs9caj8tgrxmq3p8f8fmmjtc4qpwxj3qwqx4nhs7ga668agj72j7sxfskalf0y5glnpa8tss2g8644ql5emg52n0kwg760ussswfksq2zxztp6jhayrlf3jfp7zrjm2je2clngpa84nf44gkx7kvefsuv35k674mzx3ly5e20pf6qcf5q6yp7l3lz0xxf6w9469hrrsd27gnlltcyc2j36rhrg364e34gzhz3nm6ktxv6dm7y4625z5wfxnle45sqfgmd3tggzvm844ew9hecr4wv2m8j2l3g57mv44uy363h50cusdkcu5w6pfrevq5nzf3x5hj4y04sq0kmrnuhxd9d00yuq2uh2hvm9e680mldsptvc65dcakh0389t8k37cu5rphja67s6esyel5wca4zq8re8eh62hktc7epncz9fft8xecnzmww02ydu4uw5q8cmxc8uwcqjzl7z94er94umaaen22n5mkgnwrhzqn6vmgvcyjnfyn9t48grfq2xcjdgztwrh40v8n3c35vddeef7vctx4hy5v7xfne0s5s4kw7hg2kmgmqfxzs0j8u9rxchvvmlckgdesqhwtfj8yus60dhc8sgp0jvr7vkwcwpva839jg8hphjx9f78psvdgc3d9smvtdr4u5xch7f0nvrdp3h4vg865730lc446y63a2u46te7qftk6ez7nmyxqsfjlf5vzq9zeg5rz5ws7rf74jyvlsux7an4zgvn82l0k9k5hlcnzmddf4gmsz9jl2vq8jnrpxk588p9shzueet2l396836fty548v9349gtqg4swkjquzhszkp8ztauj5cr04waspyuxqla2cvkcqac9hu67djxkny9qyqqqqqqqqqqqsk7dldz6uzvpkr8vuh3jjsvwm4hurpk0qc45tn2rq35ekl4yzv9a20etsnuyyzurcj2sq2t2p5n08w6whhpgkau93y30vs96ems3gp9wuzrrlh670rakmu03vkdfu7awx29v4tpj8wmye2pp7683cn6pppslmedczmvwkajn5gqlf8rglmrqj4vfu7eqypw3mm95vyaehp0se3qr75nys49nc57fdpvw8ekd3jjj07duj0jnussauzkdzwfactc8cn6tg64wuxrh55ux2dk6guskfv3njxt8z7ywenzd47urfn532q9syqqqqqqqqqqq3fac4c2jszwzu4gydeaaxl74s74t9fcp5r2y6tlutc7lga208ycv5nmcclfm700f2wjnrmjmvaqgqq2htv2gnt9f84n8xpxfktw6ylj0v2cuapyx78vfd90xyegqeyhwpquk6qpv3pc553rjj0u02d2n9m0rf6rlkpld4gry2c8zq5fu753utnnc4spnklf0rhka9vvh6dcrvqgqqqszadd3"
 *           },
 *           "fee": {
 *               "transition": {
 *                   "id": "as14mwxrhae6l2mza48sgta5644zggkm7lyc967fjawamxtc7h68grstuqu8x",
 *                   "program": "credits.aleo",
 *                   "function": "fee",
 *                   "inputs": [
 *                       {
 *                           "type": "record",
 *                           "id": "1456741384380246863251479616522956582628894645199160697787701727188071677699field",
 *                           "value": "",
 *                           "tag": "3284259701528706206769943072978079919834252738378367398948932125437174223602field"
 *                       },
 *                       {
 *                           "type": "public",
 *                           "id": "8042167727433712627080693804699772252060367279033321545963654522887449534819field",
 *                           "value": "5000u64"
 *                       },
 *                       {
 *                           "type": "public",
 *                           "id": "7667006710605046477021008086210076282303906800273960430115395365434814109534field",
 *                           "value": "116179951253620902246294436000361954827443370802185164482447663010599471624field"
 *                       }
 *                   ],
 *                   "outputs": [
 *                       {
 *                           "type": "record",
 *                           "id": "8014433268720113169720116732057440221855487448430065528764681687988960275903field",
 *                           "checksum": "5152454630060352809522351688360617522722385055672167691180575272269804996740field",
 *                           "value": "record1qyqsq0vx43fgdp48hq2n5jsvecetnnemsm62d777p553tvt0ugz8njsgqyxx66trwfhkxun9v35hguerqqpqzqpccvdxnlu5czadx08cfl9arr8q55naw60vet8twqdlfppm44wvqg2xl4dsxm4ekj5g4mlnux7dvpt583ktznulzx2llgh7e905njpqzqcgkex"
 *                       }
 *                   ],
 *                   "finalize": [],
 *                   "tpk": "6154204828493903068061213165894508480271002087369686503294726414246974853346group",
 *                   "tcm": "7199611488133526426391751070943942360147639014055446333544125236186026007679field",
 *                   "fee": "5000"
 *               },
 *               "global_state_root": "ar135tagq3rhxsx96yax987vyv0ul3tyez9uhvd4mcwjrrhu0arug9qju054n",
 *               "proof": "proof1qqpqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqq0y0exfdef7mu44ymnueywmamsq30dznkgf4h4d8tkcrsa2wa0jtxaa2n9pttaj8npk90wapx6a4cq4fv4wd8khjanzff76nnvj34t5gl7dc0pdkdga0x24aumsfmsdf923jxcwavptmpk6zr78sd72n3spp308c03dg8tzwfzs2dfcdxqwlstzx9pgxa628qh6j8d30jrm3zvgzwh6nwn0fr59uz2v2e3rzjjqxfdmgu5j0kfqsnflnemvvxrg7j5rsnruqnp5yplfxxyujum94gcak85navgg9rhjavntualfnpmcq9snnzqduts608eaw0nzffx6szaevrt87tjy9st9qwv9c5dm85uwulgehq4yahgep6adfeuumxk0qpz397shv70yyeytchhhah5f550p5jnk8lg54gs2knlhye52z7qxkvp5ve2pwcu69jfwnly2pcg4mgqqtjvavde2mc2409q3k0lamesxzuqn8mmt9r6an9ptcf7rfnv75zpd45sflqprjm7n205hfsqx492jqe54vt66xqgkd0afwfhyusl6c0h77jj2um7jusuuh9vp0x6n5l283acdskykyntzj37nspfl5z4fgp82ag2kl7r673ju03nwjwv4865k4hvrhffca8dd2w39yke74v4h0le9n76hpn5j05s2wxamkm07pszeck9vhq0hzfhymmwj4fghxwd0kh34sv2vd4qgth5uc943gv8hdfpee4p77fvx0vnyhghplxr8luqrp900jaku979me7z7rsg6uapxjg6nrl2pg6mr5ydscg3n5c24pscrempun9c526w04whgtr2nk2hqzqkh4uj08glv50paglhrrahess4aw92fcvvsu65lw5hduf4epp8e5084k7s8tyucqc76hq29ckt6qtqca3yll72sgkexp36cymhf0j5qp58gcy2ahqtjfq8lmyc240kl4pr8xcmezw9lgkdm82u08u5sqpzt02ngehsud2a5wkcel7wcne6zf254dk0f6twt3q7gxtte7pu4rkk25e3un9hwyxyceldl6dnmygprzypv0r4nhmz3vt6jlmgp3gy6c7fl3ys044x0etys6t8ryy8pkqd9rrsxqvgtztqzkgh62yk8pks8z7u7p88ztrkrm3r5mqh8pm5f9ejgfwztg3cfqaxw465gwpw23cw4art0zgf7zzxqe6zvvj6rlkhqysj4u9yr3weey9afpqjfgk44sm0ean3tyauylehr6wtn60xjpdqyx3jvadla6wjfaydcfplgsxdspqm9aup2g7n9jvrgqdzednt6yq6l6uc3u3umj902gfayuukgst0vd8ddkqrlsjggcxcd9xzv9xr7stjkq8slfalz58s75cdnqy8rfqpk4zvm8vhxx9c7kzqjparve0gqyuuz7nahrrqflpduff8csykrjlhm5h8avj4nq0wvh880assgdzjyhkmzckcllndvza8xpcgjn3y8nud9csk8d2ze8j9t302p4fqqj3ps5tvmln7k8wzku40uc7ut9vf92vhdsuqxmlkc43p6ms9trk2jh3z427gh80g9hafzckcdy9xa6g55l4sla0nn9puyp3c26jn8eqyyq20xke0wahkauyuprxw2t55aec2ty9qkn7vkl6xd8pswlnjle2fgysyqqqqqqqqqqqwa33ne2lydees9cgtx8vj9ecd08kkhdlur9hlngeup894xzz2gyrmkg2x4ghe22qlvzglv4k00sem7tqs7yejc7jg3cvejstzyaa5p4myc9l7pcmh20frsjwwvckx27auf9h7587e4sgny0raz2lnmyspva6tv25l7mmv83gcexl09zx7s07adshh9p4fhnkyt5x9ua3vslq7lr6hnuqm5syg4nsgx7052w0m7nrsj0auqmqxnch3f20xehum9gp0jhfx3wdv5le3v6uqhr4hg7z8wsxpscf3trpdthtgta7j3scs5pqyqqqqqqqqqqqgc3nphxqh3ten9wx7av6hw6n4z27nfy4rqs07yd30pgf6p095uqnpvhqtvuuqg4cq9d809z3srnqqq2sk5rgg4uad0tntjgaxfxa5x5g604h7ag2llnpvm5luj4dx8ahqd60ve4vwrn4hxphd0eu3s5xq56ex6aplltca98kfq6wn70u7nt8r9ehmyjcg5utmjjw28fu2g286qqqqq2js4xc"
 *           }
 *       },
 *       "finalize": []
 *   }
 * }
 */
server.addMethod("aleoTransaction", async (params: { id: string }) => {
  const aleoTransaction = await getAleoTransaction(params.id);
  return aleoTransaction;
});

server.addMethod("transactionsForProgram", async (params: { programId: string, functionName: string, page: number, maxTransactions: number }) => {
  if (params.maxTransactions > 1000) {
    throw new JSONRPCErrorException("maxTransactions must be less than or equal to 1000", JSONRPCErrorCode.InvalidParams);
  }
  const transactions = await getTransactionsForProgram(params.programId, params.functionName, params.page, params.maxTransactions);
  return transactions;
});

server.addMethod("transactionsForProgramCount", async (params: { programId: string, functionName: string }) => {
  const count = await getTransactionsForProgramCount(params.programId, params.functionName);
  return count;
});

/**
 * Retrieves a list of Aleo transactions for a specified program and function.
 * @param {object} params - The parameters for the method.
 * @param {string} params.programId - The ID of the program (e.g., "privacy_pride_nft_v3.aleo").
 * @param {string} params.functionName - The name of the function within the program to retrieve transactions for (e.g., "convert_private_to_public").
 * @param {number} params.page - The page number for the paginated list of transactions.
 * @param {number} params.maxTransactions - The maximum number of transactions to retrieve (must be <= 1000).
 *
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of Aleo transactions.
 *
 * @throws {JSONRPCErrorException} - Throws an error if the maxTransactions parameter is greater than 1000.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "aleoTransactionsForProgram",
 *     "params": {
 *         "programId": "privacy_pride_nft_v3.aleo",
 *         "functionName": "convert_private_to_public",
 *         "page": 0,
 *         "maxTransactions": 1000
 *     }
 * }'
 */
server.addMethod("aleoTransactionsForProgram", async (params: { programId: string, functionName: string, page: number, maxTransactions: number }) => {
  if (params.maxTransactions > 1000) {
    throw new JSONRPCErrorException("maxTransactions must be less than or equal to 1000", JSONRPCErrorCode.InvalidParams);
  }
  const transactions = await getTransactionsForProgram(params.programId, params.functionName, params.page, params.maxTransactions);
  const aleoTransactions = await Promise.all(transactions.map((tx: any) => {
    return getAleoTransaction(tx.transaction_id);
  }));
  return aleoTransactions;
});

server.addMethod("transactions/mempool", async () => {
  throw new Error("not implemented");
});

/**
 * Retrieves the source code for a specified program from the server.
 * @param {Object} params - The parameters object.
 * @param {string} params.id - The identifier of the program (e.g., "credits.aleo").
 *     This parameter is used to specify the program whose source code needs to be retrieved.
 * @returns {Promise<string>} A promise that resolves to the source code of the specified program.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "program",
 *     "params": {
 *         "id": "credits.aleo"
 *     }
 * }'
 */
server.addMethod("program", async (params: { id: string }) => {
  const programId = params.id;
  return await getProgram(programId);
});

/**
 * Fetches a range of records from the server.
 * @param {object} params - Parameters for the record fetch request.
 * @param {number} params.start - The starting record index (inclusive).
 * @param {number} params.end - The ending record index (exclusive).
 * @param {number} [params.page=0] - The page number to retrieve, defaults to 0.
 * @param {number} [params.recordsPerRequest=10000] - The number of records to retrieve per request, defaults to 10000.
 *
 * @throws {JSONRPCErrorException} Throws an error with code 'InvalidParams' if the page number is less than 0 or if the start index is greater than the end index.
 *
 * @returns {Promise<object[]>} A promise that resolves to an array of record objects.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "records/all",
 *     "params": {
 *       "start": 300000,
 *       "end": 350000,
 *       "page": 0,
 *       "recordsPerRequest": 1
 *     }
 * }'
 *
 * @response
 * {
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "result": [
 *         {
 *             "record_ciphertext": "record1qyqsq2fqmrtvrw3wflyzyz7er8sgyly0363n60uh7umxxfr7sdstjeqyqyxx66trwfhkxun9v35hguerqqpqzq8crs8qc7te98vjr35ktgx9jj7a8fdajh4ejvx7zgvnj75vlaf8p54yg5kgxz59c3g0qlenfcs0m569ngzjw2dgsyw50xr40vl74qcskek0l3t",
 *             "program_id": "credits.aleo",
 *             "block_id": 341921,
 *             "height": "300000",
 *             "id": 430855,
 *             "timestamp": "1691195921",
 *             "block_hash": "ab1evk49za28hnhxq8jef4qedy4kmcwyutwzkmpyr0shs6at0402u8szm5hey",
 *             "transition_id": "as1ndw987tlqlq0fe9h9r4twrw5ff0e4cqhyv8ja8pdsa3zpux3w5xqhmsf2q",
 *             "transaction_id": "at12nqxmeu4epk9zkrqgwpnqkckvydafumdx9566yqxwvs96vazduzq3d6r8s",
 *             "function_name": "mint",
 *             "output_index": 0
 *         }
 *     ]
 * }
 */
server.addMethod("records/all", async (params: { start: number, end: number, page?: number, recordsPerRequest?: number }) => {
  if (params.page < 0 || params.start > params.end) {
    throw new JSONRPCErrorException("Invalid params", JSONRPCErrorCode.InvalidParams);
  }
  const records = await getAllRecords(params.start, params.end, params.page, params.recordsPerRequest);

  return records;
});

server.addMethod("getPublicTransactionsForAddress", async (params: { address: string, start: number, end: number, page?: number, transactionsPerRequest?: number }) => {
  if (params.page < 0 || params.start > params.end) {
    throw new JSONRPCErrorException("Invalid params", JSONRPCErrorCode.InvalidParams);
  }
  const MAX_BLOCK_RANGE = 50_000;
  if (params.end - params.start > MAX_BLOCK_RANGE) {
    throw new JSONRPCErrorException("Max block range allowed is 50000", JSONRPCErrorCode.InvalidParams);
  }

  const aleoAddressPattern = /^(aleo1)[a-z0-9]{58}$/;
  if (!params.address.match(aleoAddressPattern)) {
    throw new JSONRPCErrorException("Address provided is not a valid Aleo address", JSONRPCErrorCode.InvalidParams);
  }
  const transactions = await getPublicTransactionsForAddress(params.address, params.start, params.end, params.page, params.transactionsPerRequest);

  return transactions;
});

/**
 * Retrieves ownership information for records within a given block range on the Aleo blockchain. This provides the minimal information needed to verify ownership of a record.
 * @param {Object} params - The method parameters.
 * @param {number} params.start - The starting block number for the records query.
 * @param {number} params.end - The ending block number for the records query.
 * @param {number} [params.page=0] - The page number to fetch for paginated results.
 * @param {number} [params.recordsPerRequest=100000] - The number of records to retrieve per request, capped at a reasonable limit.
 *
 * @returns {Promise<Object[]>} - A promise that resolves to an array of ownership objects.
 *
 * @throws {JSONRPCErrorException} - Throws an error with code `JSONRPCErrorCode.InvalidParams` if any of the parameters are invalid.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "records/isOwner",
 *     "params": {
 *         "start": 200000,
 *         "end": 200010,
 *         "page": 0,
 *         "recordsPerRequest": 1
 *     }
 * }'
 *
 * @response
 * {
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "result": [
 *         {
 *             "nonce_x": "3918260195754394906908448854241869844389922307214581830273887322761200254253",
 *             "nonce_y": "7997215931412234159324234003801179947383733585077821788123487965593846252836",
 *             "owner_x": "1160900936987360956711220277753062897817177577088544272416308744862042451437",
 *             "transition_id": "as1525qhq69f3v4gwktcyahzsu9faee72eu7cqqexru9eq79k3p9q9q5pws3n",
 *             "output_index": 0
 *         }
 *     ]
 * }
 */
server.addMethod("records/isOwner", async (params: { start: number, end: number, page?: number, recordsPerRequest?: number }) => {
  if (params.page < 0 || params.start > params.end) {
    throw new JSONRPCErrorException("Invalid params", JSONRPCErrorCode.InvalidParams);
  }
  const records = await getRecordOwnerInfos(params.start, params.end, params.page, params.recordsPerRequest);

  return records;
});

server.addMethod("getRecordsByBlock", async (params: { blockId: number }) => {
  const records = await getRecordMetadata(params.blockId, params.blockId + 1, false, 0, 10000);
  return records;
});

server.addMethod("records/metadata", async (params: { startId: number, endId: number, page: number, recordsPerRequest: number, includeTagged: boolean }) => {
  if (params.page < 0 || params.startId > params.endId || params.recordsPerRequest > MAX_NUM_RECORD_METADATA) {
    throw new JSONRPCErrorException("Invalid params", JSONRPCErrorCode.InvalidParams);
  }
  const records = await getRecordMetadata(params.startId, params.endId, params.includeTagged, params.page, params.recordsPerRequest);

  return records;
});

// Returns transitions that don't have records as inputs
server.addMethod("transitionsWithoutRecordInputs", async (params: { start: number, end: number, page?: number, transitionsPerRequest?: number }) => {
  if (params.page < 0 || params.start > params.end || params.transitionsPerRequest < 0) {
    throw new JSONRPCErrorException("Invalid params", JSONRPCErrorCode.InvalidParams);
  }
  const transitions = await getTransitionsWithoutRecordInputs(params.start, params.end, params.page, params.transitionsPerRequest);

  return transitions;
});

/**
 * Retrieves information for a list of serial numbers from the Aleo blockchain.
 * @param {Object} params - The method parameters.
 * @param {string[]} params.serialNumbers - An array of serial numbers to retrieve information for.
 *
 * @returns {Promise<Object[]>} - A promise that resolves to an array containing information for the given serial numbers. If the serialNumbers array is empty, it returns an empty array.
 *
 * @example
 * curl --location --request POST 'https://testnet3.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "serialNumbers",
 *     "params": {
 *         "serialNumbers": ["5870700304294811149033096720219055499575762400180303520383718241817742543235field", "4field"]
 *     }
 * }'
 *
 * @response
 * {
 *   "jsonrpc": "2.0",
 *   "id": 1,
 *   "result": [
 *       {
 *           "serial_number": "5870700304294811149033096720219055499575762400180303520383718241817742543235field",
 *           "program_id": "credits.aleo",
 *           "block_id": 90995,
 *           "height": "90253",
 *           "timestamp": "1688526707",
 *           "transaction_id": "at1mzndh3uqf2sv73v4pws3meu8mwdnwwet434w8sjzwj2np9vhl5gquz30n4",
 *           "transition_id": "as13hec29slea6vy6kgjwpkavvdp0f8qjevc2s06kxg3v4e3ld0sqgsrrxnfu"
 *       }
 *   ]
 * }
 */
server.addMethod("serialNumbers", async (params: { serialNumbers: string[] }) => {
  if (params.serialNumbers && params.serialNumbers.length === 0) {
    return [];
  }

  const serialNumberInfo = await getSerialNumberData(params.serialNumbers);

  return serialNumberInfo;
});

server.addMethod("records/byTransitionAndIndex", async (params: { recordInfo: [string, number][] }) => {
  if (params.recordInfo && params.recordInfo.length === 0) {
    return [];
  }

  const records = await getRecordsByTransitionAndIndex(params.recordInfo);

  return records;
});

server.addMethod("records/spent", async (params: { startHeight: number, endHeight: number, page?: number }) => {
  throw new Error("not implemented");
});

server.addMethod("chainStatus", async () => {
  return {
    online: true,
    statusTitle: "Everything is working as expected",
    statusMessage: "There may be some temporary issues with the blockchain, but everything should be working as expected.",
    time: 1683831724746
  }
});

server.addMethod("getStateRoot", async () => {
  const response = await fetchEndpoint(STATE_ROOT_PATH);
  const root = await response.text();
  return root.replaceAll('"', '');
});

server.addMethod("getStatePath", async (params: { commitment: number }) => {
  const response = await fetchEndpoint(`${STATE_PATH_PATH}/${params.commitment}`)
  if (!response.ok) {
    throw new Error('Commitment not found');
  }
  const path = await response.text();
  return path.replaceAll('"', '');
});

/**
 * Retrieves the public NFTs associated with a given address from the Aleo blockchain.
 * @param {Object} params - The method parameters.
 * @param {string} params.address - The Aleo address to retrieve the public NFTs for. It should start with 'aleo1'.
 *
 * @returns {Promise<Object[]>} - A promise that resolves to an array of NFT objects.
 *
 * @throws {JSONRPCErrorException} - Throws an error with code `JSONRPCErrorCode.InvalidParams` if the address parameter is invalid.
 *
 * @example
 * curl --location --request POST 'https://dev.aleorpc.com' \
 * --header 'Content-Type: application/json' \
 * --data-raw '{
 *     "jsonrpc": "2.0",
 *     "id": 1,
 *     "method": "getPublicNFTsForAddress",
 *     "params": {
 *         "address": "aleo1uran94ddjnvdr0neh8d0mzxuvv77pyprnp7jmzpkuh7950t46qyqnsadey"
 *     }
 * }'
 *
 * @response
 * {
 *   "jsonrpc": "2.0",
 *   "id": 1,
 *   "result": [
 *       {
 *           "transactionId": "at1hvfaccddwmawt0xexd5tfwg7n9jkfx4dhpgzhzu5rpmvjkest5qsy3zw5x",
 *           "timestamp": "1695098011",
 *           "programId": "privacy_pride_nft_test13.aleo",
 *           "tokenId": "{\n  data1: 61399871658546100888866327366761804400u128,\n  data2: 1852797802u128\n}",
 *           "baseUri": "aleo-public.s3.us-west-2.amazonaws.com/testnet3/",
 *           "symbol": "CUBS",
 *           "tokenIdString": "privacy-pride/1.json",
 *           "edition": "0scalar"
 *       }
 *   ]
 * }
 */
server.addMethod("getPublicNFTsForAddress", async (params: { address: string }) => {
  if (!params.address?.startsWith('aleo1')) {
    throw new JSONRPCErrorException("Invalid params", JSONRPCErrorCode.InvalidParams);
  }

  const nfts = await getPublicNFTsForAddress(params.address);
  return nfts;
})

server.addMethod("getPublicTokenProgramsForAddress", async (params: { address: string }) => {
  if (!params.address?.startsWith('aleo1')) {
    throw new JSONRPCErrorException("Invalid params", JSONRPCErrorCode.InvalidParams);
  }

  const tokens = await getPublicTokenProgramsForAddress(params.address);
  return tokens;
});

server.addMethod("getProgramTypes", async (params: { programs: string[] }) => {
  if (!params.programs || params.programs.length === 0 || params.programs.length > 1000) {
    return [];
  }
  const programTypes = getProgramTypes(params.programs);
  return programTypes;
});

server.addMethod("getAleoBlocks", async (params: { start: number, end: number }) => {
  const MAX_BLOCK_RANGE = 1_000;
  if (params.end - params.start > MAX_BLOCK_RANGE) {
    throw new JSONRPCErrorException("Max block range allowed is 1000", JSONRPCErrorCode.InvalidParams);
  }
  const blocks = getFullBlocks(params.start, params.end);
  return blocks;
});

server.addMethod("getTransactionId", async (params: { transition_id: string }) => {
  const transactionId = await getTransactionId(params.transition_id);
  return transactionId;
});

server.addMethod("getStakedBalanceForAddress", async (params: { address: string }) => {
  if (!params.address?.startsWith('aleo1')) {
    throw new JSONRPCErrorException("Invalid params", JSONRPCErrorCode.InvalidParams);
  }

  const tokens = await getStakedBalanceForAddress(params.address);
  return tokens;
});

// Pass-through endpoint for our validator
server.addMethod("getMappingValue", async (params: { program_id: string, mapping_name: string, key: string }) => {
  const response = await fetchEndpoint(mappingValuePath(params.program_id, params.mapping_name, params.key));
  if (!response.ok) {
    throw new Error(`Mapping value for ${params.program_id}, ${params.mapping_name}, ${params.key} not found`);
  }
  const mappingValue = await response.json();
  return mappingValue;
});

// Endpoint for getting prices of tokens
server.addMethod("getPrices", async () => {
  // Create a temporary mocked object with hard coded values
  const prices = {
    "ALEO": 1.0,
    "USDT": 1.0,
    "USDC": 1.0,
    "BTC": 50000.0,
    "ETH": 3000.0
  };
  return prices;
});

server.addMethod("getNextQuestMintId", async (params: { nextTokenIds: string[] } ) => {
  const timeOut = 5 * 60; // 5 minutes;
  const nextTokenIds = params.nextTokenIds;
  try {
    if (nextTokenIds.length > 100) {
      throw new Error('Too many Next Token Ids to check. Limit 100.');
    }
    // check if each token id is a digit-like ascii character in a 128 bit binary string
    
    // note -- the 11 here is the expected numer of digits before the nft extension ending
    // So we get 16 ascii characters (8 bits per ascii byte), and 5 of those bytes are reserved
    // for the extension.
    const regex = /^(0011[01]{4}){11}.*$/;
    // check if each token id exists in redis
    for (let i = 0; i < nextTokenIds.length; i++) {
      const tokenId: string = nextTokenIds[i];
      if (!regex.test(tokenId)) {
        throw new Error(`Invalid Next Token Id: ${tokenId}. Must be a 128 bit Ascii digit binary string.`);
      }
      const tokenIdExists = await redisDb.get(tokenId);
      if (!tokenIdExists) {
        await redisDb.set(tokenId, 'true');
        await redisDb.expire(tokenId, timeOut);
        return { tokenId: tokenId };
      }
    }
  } catch (e) {
    throw new Error(e.message);
  }
});

// Export server instance
export default server;