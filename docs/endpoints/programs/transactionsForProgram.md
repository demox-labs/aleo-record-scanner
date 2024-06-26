# transactionsForProgram

## Description

Returns all transactions involving a specific program ID and function name.

1000 transactions can be retrieved per request maximum.

## Method Parameters

- **`params`** - *`Object`*:
  - **`programId`** - *`string`*: Program ID (example: `credits.aleo`).
  - **`functionName`** - *`string`*: Name of the program function.
  - **`page`** - *`number`*: Page number to get.
  - **`maxTransactions`** - *`number`*: Name of the program function. Must be lower than 1000.

## Returns

- **`result`** - *`Array<Object>`*: An array of transaction objects.
  - Transaction object:
    - **`status`** - *`string`*: The status of the transaction (e.g., "accepted").
    - **`type`** - *`string`*: The type of the transaction (e.g., "execute").
    - **`index`** - *`number`*: The index of the transaction within the block.
    - **`transaction`** - *`Object`*: The transaction details.
      - **`type`** - *`string`*: The type of the transaction.
      - **`id`** - *`string`*: The transaction ID.
      - **`execution`** - *`Object`*: Execution details of the transaction.
        - **`transitions`** - *`Array<Object>`*: An array of transition objects.
          - **`id`** - *`string`*: The transition ID.
          - **`program`** - *`string`*: The program ID.
          - **`function`** - *`string`*: The function name.
          - **`inputs`** - *`Array<Object>`*: An array of input objects.
            - **`type`** - *`string`*: The type of the input (e.g., "record", "private").
            - **`id`** - *`string`*: The input ID.
            - **`value`** - *`string`*: The value of the input (optional).
            - **`tag`** - *`string`*: The tag of the input (optional).
          - **`outputs`** - *`Array<Object>`*: An array of output objects.
            - **`type`** - *`string`*: The type of the output (e.g., "record").
            - **`id`** - *`string`*: The output ID.
            - **`checksum`** - *`string`*: The checksum of the output (optional).
            - **`value`** - *`string`*: The value of the output (optional).
          - **`tpk`** - *`string`*: The transition public key.
          - **`tcm`** - *`string`*: The transition commitment.
        - **`global_state_root`** - *`string`*: The global state root after the transaction.
        - **`proof`** - *`string`*: The proof of the transaction.
      - **`fee`** - *`Object`*: Fee details of the transaction.
        - **`transition`** - *`Object`*: The fee transition details.
          - **`id`** - *`string`*: The transition ID.
          - **`program`** - *`string`*: The program ID.
          - **`function`** - *`string`*: The function name.
          - **`inputs`** - *`Array<Object>`*: An array of input objects for the fee transition.
            - **`type`** - *`string`*: The type of the input.
            - **`id`** - *`string`*: The input ID.
            - **`value`** - *`string`*: The value of the input (optional).
          - **`outputs`** - *`Array<Object>`*: An array of output objects for the fee transition.
            - **`type`** - *`string`*: The type of the output.
            - **`id`** - *`string`*: The output ID.
            - **`value`** - *`string`*: The value of the output (optional).
          - **`tpk`** - *`string`*: The transition public key.
          - **`tcm`** - *`string`*: The transition commitment.
        - **`global_state_root`** - *`string`*: The global state root after the fee transaction.
        - **`proof`** - *`string`*: The proof of the fee transaction.
      - **`finalize`** - *`Array<Object>`*: An array of finalize objects.
        - **`type`** - *`string`*: The type of the finalize operation (e.g., "update_key_value").
        - **`mapping_id`** - *`string`*: The mapping ID.
        - **`index`** - *`number`*: The index within the mapping.
        - **`key_id`** - *`string`*: The key ID.
        - **`value_id`** - *`string`*: The value ID.
      - **`finalizedAt`** - *`string`*: The timestamp when the transaction was finalized.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "aleoTransactionsForProgram",
    "params": {
      "programId": "credits.aleo",
      "functionName": "transfer_private",
      "page": 0,
      "maxTransactions": 1
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
      "status":"accepted",
      "type":"execute",
      "index":4,
      "transaction":{
        "type":"execute",
        "id":"at14uyhgeutexulmynqwwvv34sf0px07qpf4vj2qpsmzr7fyqqhugpsu3f03k",
        "execution":{
          "transitions":[
            {
              "id":"au1mw9ujqz59rf2cku27vgguletakm05pymww3g28ek8w59pgkfmsps6hgz2n",
              "program":"credits.aleo",
              "function":"transfer_private",
              "inputs":[
                {
                  "type":"record",
                  "id":"2791651595392754094300571821842999127763583850703594503755549556203548614079field",
                  "tag":"7759146794139222592543326188392065534483307641940860547771836362146928012844field"
                },
                {
                  "type":"private",
                  "id":"8250227947027626550287512192297253891604926935987110783825107126412681904187field",
                  "value":"ciphertext1qgqdm69k443w65t32xn2fqwy28dfckesvwjqdq2l395x38nz39jx5rhnyehlumsncjn5p6at6n7aeyd6sm4d7fhhpdrthtdc6ps87tqcqut2dv7n"
                },
                {
                  "type":"private",
                  "id":"2354144073806358391513197488684370730255684367326746590832232445996939979669field",
                  "value":"ciphertext1qyqzc8asv004ukda8t5447sexwfhrqsawhpf9wjdrnhky3frvdvgyzgmwrhl6"
                }
              ],
              "outputs":[
                {
                  "type":"record",
                  "id":"5404822900279872225478940895560264575682497840543127913138765742417404968709field",
                  "checksum":"3997345459815218242852026363720068775980460242661143194300158184817646412465field",
                  "value":"record1qyqsqqp2fglu7kft937tkl5zunfgxeysww6exxgchd6nxc2nday28agxqyxx66trwfhkxun9v35hguerqqpqzq80f668x0g92n3f2xcv0wt2deknnmu742t6nmhwykfncf8zvs5eqv2f97yjrpj3rur52nxanxgqvk2epvxyu9zfamt8e6a8fyvjmeks6698g0r"
                },
                {
                  "type":"record",
                  "id":"2175462681452474364776848943653016873439199954017026812530800740062485540322field",
                  "checksum":"5415712944816339737051550308815876319810579993978777030763733807010531386309field",
                  "value":"record1qyqsqld37y4k770d2rvt27gwlslsxf7w4yy0gddqngm5ckqtwy2crscfqyxx66trwfhkxun9v35hguerqqpqzq9cmdwxw3yj9h3lemg7f5ut8qlr996j3266qvz2quwmydhhz0xfp2rehc5606j9x3jlyh9jpgxnhe87hhaup5cj0mlqavq8nvuzdkcpzryr65y"
                }
              ],
              "tpk":"4927038287756134037158597360452397528412455792515104102023181426502823050175group",
              "tcm":"8025094647869943591369120604990908311239402579114354726509715143919269475378field"
            }
          ],
          "global_state_root":"sr1tljf06fxjkys3hw8yypnus7qr7dmcf22tn4mzrxgqfdcyfld6cxqkvypng",
          "proof":"proof1qypqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqz6httx4lzyqqz2sfewv4uvee5f40hrmctxzu98wnscathenucrd8r4r82ffcs87t0x8m9rq8u0mqpzy23lrulp7jszs9a7up62urk5xam5yu30q99evsklge0vqm2w7syu9s5xvzpffanugx7wxdvuqjqyqle44dle948x26nq0q9n5u5p2xt8vrm796lzv8k8e76pypzxz2u0ewdtwpssz9rcjau9jqdm3w5agp99taekerlsfusxvdjspehuypp730frz63dmd20m2xtstjrs4fmxez0pfxxf5u9u5sym7gucwa3hcz24uwgwzkycm3az32alpyj8aphrjsufj93h59pyu8lj60wg75qd2m8wk0kdwjpjksh2kle85kxm6sy9q6f5573aprht5v8rdmw65nkmw2y46kqr34tsvwdl84ynjfn4naepztwz3g93f2ncp67sv2xesnqwfwjsqjt8men88z2c9hk37985wsz6awzdxagfvr4733l8k7lhhe240f9hzyf384uwmpslvyjqkqgqmyjcvrs7yazh67sfvatvuuws37uyeh3qxm2ygp8sutk2sh2zshjmpwz8g8cmufh5yk0gld7rpehvqrcpwg6tej9thdnnajqnwlhec2k669cdduwz8tmhhps5mkfhv0zpay89qva8ed4le578kdxhlrnmcpzmvrz5afe936l3y0sj6vkdxstz2u8jdy352ylpqtgqaq7e6g4t52rwhxxpzhacwr0w0c3cqdyvcsxsvzuejnxeq400apnt88n8uekax8xeffvk32k5ll7044l8nc6sfkvs8m9pytlps07z7tstzkf5skqg4dkz7mxpdc3tlw5g79u5d39t3zglxgflempvtt69y23q2xgn405c76g9hjkdz5k3422rwgqv6r5qfcm2fwcdd9ncgjm394rnvrnkwa7g9auw62pcmjt2a4d2p8qrlee0ym3wdfm696hc6guwjdwfm78yq7qvqydkfvqjgt7f05kjvlcdjj3f2vm96jkj4dwx5j4wyy0eshsqn4ymxmlsq5zs5qvs9tly3v98eq948j4cucg3kapaslq8s8uymqz9tkujt4ku7vhykwvz3ek5hnlgjrjku5jt3wdghdsvcnuzcvhy5qya7u8c2hts0up4huqm7tcjrgpuuzwtzlemkl53seh6s2222s3zqp9gt0cewk6zw0qr6y5n4m49k6fede6cas0s88ym7qf763azplzqdrccy09zmeey47f8ufejgapf29l4selj86qsg7pngwym5a6wkys9wy2stzzskkzlcuut07vlz92rx5wn3uslhwuajvk0luqj8paayxpqx2wv78eyvtzxwrurxupqp7e78ugf5vdj7sk2cf2d2gfdxjxplqtcfj7f975h04jw0wnmh2ekn05ryefytgue8v2z87m2cyu5jlchqm2lqd2uupjzxs5am2l8n0kfyrsqsv8k0u33aqg9phsvks4t4ursf0jfmc94gjyzhagyhtqsxhcpfnenw2kla3utvcz3q55djmrqh2vxqjgra5e0dme5qqqvdhjl53alasq6fvml28tczxsazx4kvu7tnspt53mpwe6nc6kvsfj5zhnx7cp5w2vrvj7w0nfx6ytcua6dz7fljq0hg084ge4ghgg5lhugrmc94hqr57uam8sapvz9rks58ju3mrkmqkkkecvjm0klhcmkduvrzl9m6skuuaq5vceyqqz9ek7qx4yjjjxq89f80sa0p0v647rfeyf0r2agd4kj8u4v69edzay9dvxt9jrts0spkwq5lex742nwu9flefgpyq8wkgu5lu68qvmh7q3mune04989k7qdv3ykp98j22kqs3tlwx6cx52wkar42984n4q9j53vlzn4kd7mjpqgaeejz24xcn4573cwwfp2yzlx7zeuktjgcqn50kk4s9d0e9c7qjqcqqqqqqqqqqq825p06afashm43sels7lr79rwr50kll6cy7cf7pz0yst5ucykkver3xnvsdt2w2c6edy7knsu3aqgqncv3xvzfum24fqfhz6y290678wpl0y98p3nrlu3f2whv30smcgvpsvlc5udw2mx9zj2rvlw4wzzsqqwwyclf6nzvkmrmv62creqwhfrhjld2w5zek432dq24zzej6hd6qxzdmygrwl7nd8qzyammfr4x55arcwty8567s2lws57au54wu5vtt9xsusw7azurps06tadcwfcqhqgqvdn5fw"
        },
        "fee":{
          "transition":{
            "id":"au12p9rhe8zslsp767dqp858zu24tn9vdff59xkj5l34arad34pwsqq5fl20s",
            "program":"credits.aleo",
            "function":"fee_public",
            "inputs":[
              {
                "type":"public",
                "id":"1950265094328484047584681994571571508793457978266063867498299926170686377431field",
                "value":"2210u64"
              },
              {
                "type":"public",
                "id":"3319104071680691133274606573458788587321588947058545021682296379891880029541field",
                "value":"200u64"
              },
              {
                "type":"public",
                "id":"554617000300390895169273233311914812215894926739752011950527312895710232440field",
                "value":"2903094072874082199281855875403925051961964511797015026463838797187614929913field"
              }
            ],
            "outputs":[
              {
                "type":"future",
                "id":"423581250341620367590973202040158959385882223478103691692278846683068836561field",
                "value":"{\n  program_id: credits.aleo,\n  function_name: fee_public,\n  arguments: [\n    aleo1xs53pjftr8vst9ev2drwdu0kyyj2f4fxx93j3n30hfr8dqjnwq8qyvka7t,\n    2410u64\n  ]\n}"
              }
            ],
            "tpk":"5999317201971350947302670155263826777548667784441907430569914158548806376490group",
            "tcm":"875374644834088150340909316366948400746781629765322877952875608814343582793field"
          },
          "global_state_root":"sr1zd3whqmzceaas0qu44rn0ryp37l6zq6r5dcgtaudtwvar6l8wqrsu60w9w",
          "proof":"proof1qyqsqqqqqqqqqqqpqqqqqqqqqqqrls00uyezw92pun6vjlepk4vaf4uw2xm2j0af20e8ftt7lkefvahqsg9ae0kkdmwztj900zyuv6sqq8rylwpuh5sdq2m3lnv2ygcwu8g3u98lt60cynpv6aadm7qxrna92hkyy5shcr7ex8rl538gqme8qq896jnheru6n99026wwvkcwtkxn2g6ygm2mct8wg3x486sdxnhqqp88vvjjwvd23almvfe9lsreaxqvxyg7jfsz4l6ue7swx6f7e7523ldrl8ragvw3zghcce7tvtavx7k842n5kjyw9tvkk6gpsgttv4cpy9h0jqa0jt7k0ff3zec77nyv0jugptlh4e0nd3tl0veyh3gnuklx9lsamlv5esw88u90rz827tnspx0ccj6qfflxkxncxfdzdjya3thcqyyc97u0gq0l6zku2kq66yj0zqzjxyjdfyde3czxea5wzvufq9n58js2x8h5rkh7grhehx04nqq6vx7u7y9x3lpcpuupemhzu9shla5juz8qvp6an46uu8kjah8u5qzajyq3m6vcrjfykxfe2fs98dlhth499l7lhzkyercu2yg93ppa2xdjzu8uenw5e07fnjlrjh5dfzq5vuyp95yy5ue0r6l7tzrywrvkd7mqa8jsadcqch7p4r3ttxya2qps7pkaudr9gx9tqtpv22y4snqpxvvfy5ur37qtndn2hhmfp0ve2l8hymv0xe9xfagnllmq9hmdwqqtuh4k8dcxq9ynvttrjcjq97d89ynhlxs6rfsnfrrkhnyjvm8v7yxxzaumwe5wwewk0k54e8vr08hkeq38q97z5qptg3xmwhzzxe4fqdwk5lp4acete3gqj3tse02ajj4zln4m3szf558vve3gapj8s4ssxgwex239uvkj30cqfuuhp3ad3ps4kn5tkclt9k9sy0qwt8gytkcvh5r67kzllpw4gcl2g6pd3udtr49wtf7j3rx5t948090hww00j5p4r4j2wtpcunnf6h2aejgnun2r66thzvy05x4pq00dg844ff65zrx45my4vyyzyulxr9h99k9n6udw599pp9dfrnaej2034ge7kplazrrm9pymgjw0qarw2fe8u3e2zq6x02yrnnvtgnvr25qg0grwk8msrrdn4meza8u5u26fhvxcm4fuvyaxh2uc39x3h4jrlhhz5p3w2gsvqvqqqqqqqqqqpdgtfczl9w0vz33c88y2phuzj93m5cryz590zm2nx0kgl0yvgymf7faf76dmey08adxs3sdaq99xqyqd50l7vhgq6y0970x23xp8y02zfsttclc00zu325spc8r4ukgcyjyp8vjqk7hmdku53hsm3g6379spqxzghshpzagjvx4keux5du9ew3ttftlp9hxr64vky4t6d954vu8qh9edrwgz24rmrmyl9v0269npr897gwtlp6jna426xmxqpy7ddhs393ewzntajflnkpmex5zwatdysyqqak3kk0"
        }
      },
      "finalize":[
        {
          "type":"update_key_value",
          "mapping_id":"2855157744830843716005407030207142101853521493742120919939436395872133863104field",
          "index":0,
          "key_id":"7407244877470446817672883513702239094732641321907909769238619659390942220532field",
          "value_id":"4939260650396293585079969732778647562694782832229181251590004565129108003538field"
        }
      ],
      "finalizedAt":"1697787715"
    }
  ]
}
```
