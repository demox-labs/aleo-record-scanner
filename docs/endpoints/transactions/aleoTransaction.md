# aleoTransaction

## Description

Returns transactions full details corresponding to a specific transaction ID.

## Method Parameters

- **`params`** - *`Object`*:
  - **`id`** - *`string`*: Transaction ID encoded as bech32 (prefix: `at`).

## Returns

- **`result`** - *`Object`*: An object containing the full details of the transaction.
  - **`status`** - *`string`*: The status of the transaction.
  - **`type`** - *`string`*: The type of the transaction.
  - **`index`** - *`number`*: The index of the transaction within the block.
  - **`transaction`** - *`Object`*: Details of the transaction.
    - **`type`** - *`string`*: The type of the transaction.
    - **`id`** - *`string`*: The transaction ID.
    - **`execution`** - *`Object`*: Execution details of the transaction.
      - **`transitions`** - *`Array<Object>`*: An array of transition objects.
        - **`id`** - *`string`*: The unique identifier of the transition.
        - **`program`** - *`string`*: The program code associated with the transition.
        - **`function`** - *`string`*: The name of the function executed in the transition.
        - **`inputs`** - *`Array<Object>`*: An array of input objects.
          - **`type`** - *`string`*: The type of the input.
          - **`id`** - *`string`*: The unique identifier of the input.
          - **`value`** - *`string`*: The value of the input.
        - **`outputs`** - *`Array<Object>`*: An array of output objects.
          - **`type`** - *`string`*: The type of the output.
          - **`id`** - *`string`*: The unique identifier of the output.
          - **`value`** - *`string`*: The value of the output.
        - **`tpk`** - *`string`*: The transition public key.
        - **`tcm`** - *`string`*: The transition commitment.
      - **`global_state_root`** - *`string`*: Global state root hash.
      - **`proof`** - *`string`*: Proof of the execution.
    - **`fee`** - *`Object`*: Fee details of the transaction.
      - **`transition`** - *`Object`*: Transition details of the fee.
        - **`id`** - *`string`*: The unique identifier of the fee transition.
        - **`program`** - *`string`*: The program code associated with the fee transition.
        - **`function`** - *`string`*: The name of the function executed in the fee transition.
        - **`inputs`** - *`Array<Object>`*: An array of input objects.
          - **`type`** - *`string`*: The type of the input.
          - **`id`** - *`string`*: The unique identifier of the input.
          - **`value`** - *`string`*: The value of the input.
        - **`outputs`** - *`Array<Object>`*: An array of output objects.
          - **`type`** - *`string`*: The type of the output.
          - **`id`** - *`string`*: The unique identifier of the output.
          - **`value`** - *`string`*: The value of the output.
        - **`tpk`** - *`string`*: The transition public key.
        - **`tcm`** - *`string`*: The transition commitment.
      - **`global_state_root`** - *`string`*: Global state root hash.
      - **`proof`** - *`string`*: Proof of the fee transition.
  - **`finalize`** - *`Array<Object>`*: An array of finalize objects.
    - **`type`** - *`string`*: The type of the finalize action.
    - **`mapping_id`** - *`string`*: The unique identifier of the mapping.
    - **`index`** - *`number`*: The index within the mapping.
    - **`key_id`** - *`string`*: The unique identifier of the key.
    - **`value_id`** - *`string`*: The unique identifier of the value.
  - **`finalizedAt`** - *`string`*: The timestamp when the transaction was finalized.

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "jsonrpc": "2.0",
     "id": 1,
     "method": "aleoTransaction",
     "params": {
        "id":"at1qf0rdpte850dp2nfqfwcr6qsz7akhdltfww4vgqe89z0yehquuzs5qy30j"
      }

 }'
```

### Response

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "status":"accepted",
    "type":"execute",
    "index":1,
    "transaction":{
      "type":"execute",
      "id":"at1qf0rdpte850dp2nfqfwcr6qsz7akhdltfww4vgqe89z0yehquuzs5qy30j",
      "execution":{
        "transitions":[
          {
            "id":"au1dqqmksxh0rajrzc0nup6lmkcswy3jgrus63mqmwehc35edrzeqzswl832d",
            "program":"credits.aleo",
            "function":"transfer_public",
            "inputs":[
              {
                "type":"public",
                "id":"7211782742260852429831915761594330448264617840794998167278548847975343296914field",
                "value":"aleo1q6qstg8q8shwqf5m6q5fcenuwsdqsvp4hhsgfnx5chzjm3secyzqt9mxm8"
              },
              {
                "type":"public",
                "id":"2162174389550796297396988258754313424316882116880733076986338233070249084067field",
                "value":"1u64"
              }
            ],
            "outputs":[
              {
                "type":"future",
                "id":"4835128319561491720964520756553059145206970283715594820466295144772470752552field",
                "value":"{\n  program_id: credits.aleo,\n  function_name: transfer_public,\n  arguments: [\n    aleo1q6qstg8q8shwqf5m6q5fcenuwsdqsvp4hhsgfnx5chzjm3secyzqt9mxm8,\n    aleo1q6qstg8q8shwqf5m6q5fcenuwsdqsvp4hhsgfnx5chzjm3secyzqt9mxm8,\n    1u64\n  ]\n}"
              }
            ],
            "tpk":"7561112813805817986030837166078003059098785717182101238376337363731705904827group",
            "tcm":"3450214220166663129732455847549332986455262829122873370706653855531298163784field"
          }
        ],
        "global_state_root":"sr13p8akpzt9sf2ypypwwwlvdzrqn3sueyxu4ss60tpzduca34rag8suu7mld",
        "proof":"proof1qyqsqqqqqqqqqqqpqqqqqqqqqqqp6z2pmjpe3edqp6nk6sl2hn8uw2jg3e6gr7y5ewp2vkvl84y20w4fazg4ptjr0rzc7wzpz862elgqqxrxa8tu9klaksx3yxmramja2s5lam7063wuyk7ltjfv382w7a8p3upf7adcrfkhxfqhrd4m0h5hkqz4umnhjlz85vzf0wlq8hyz0cs25g96v07cm7kfazge8fjhuvx566j73jyklt59sd99sdys937sr2qvspzdh3kla72atllck0qs9vpu6kdcvatqdxed9v579y5w23ku9jtntydnc2wtsgujdlazs4a0uyuqsrw6esrxukzcnckjvrgz887pp2c8zmezlvuy2yn5ljvh79aedyuu7wqldxsn7ctm5qhzvmpfsphgzjavnqdpqgj3xjn6xx2gwltkdgjgyvtsend7ql9nkfy0wf448uk00p4wxq2pt4vddkqhyvttxwa2qx4a6krpzaf9zs48hrjdf63ljrafs7e6rpjejyyjncqpt6ak49v72faqzxzc74m6dyvl6uyzvhlhxqqxkhavv9w5n4dttql3nl22hmk7q0cjcjl3shmnvn8xcflzwar0j9fkffd96f950gre5lu2pvlzwcqn6ta79r8su59p2n0zvxk49aaztw9jfjhp3rfe3ag0wp000u2xkul4zztpa9lz96a87dhje2m6c3ypdx650kwzlj5cny692zydpyyf9gdlfmz6zmyt8j890x9amv58ws8hvltxy6lh57rzjqfvhwt04tv6dcyyyxhxz3c36657mg0l303swre7p094y3dwjkum9a5ccnqfukn02p9f6usxngplq2dldmvnm8fspz55wvrgv2vn96yqulkd9lhpqfzjtfeyjegv48gzk30dg7q6n3zs7tx77q04l0e7gg463tnlntpf9xlmtfqvau5mugw375pvw43efxqfjm5r68fvfwucduzewapsjqwpyrq58ryn2v7rsjfrfxh4svlpruz4x4u0g5x7l0trauym9cqmcktugz4c24fs9d38vzqknsvh5md7uqsfrep30gjkwaxwlx9yl7ze2u9hrgv4392rev9erx7z7k3wk9p6p3h90yd9dz7ehqu7f980xstmhs5z2kxg6ylewng55a5xl3vt3w7snf6ha40c75wqq3wvttzuu4k4wqxqc69whkp7xyvy9lvtecml7vcsqvqqqqqqqqqqpqpsd9wsgfvcy2n647efrcxr7gcyy4wn5602sj0e70m0jrcrae7szd8gl24ashrtavddtlwzq44gsyqwgpumx6jz6lfg95k9su5gd6zqw98p053x2lztswcc9q4hm356e8epzlp33yu3gwnf7cmdutehddcqq8lckju3c4ejpkcy45kz0vwsslepnp8guugzwa3l9n4z55xyf22ss3pkjqwge66gcyeepfu4ca9wk5vls2yv8p2xcnludyt9whckxc7zp0mgwlxrf5qryadfp2nms9mkqyqqsz0wjv"
      },
      "fee":{
        "transition":{
          "id":"au1lcmxhkgq47elf88kwkxt94u3l5upzknk0p9xtkyyscujjpnpngxsrfsxzl",
          "program":"credits.aleo",
          "function":"fee_public",
          "inputs":[
            {
              "type":"public",
              "id":"4546048683189917942029033675702766209232616738510627738753240165700875185626field",
              "value":"263388u64"
            },
            {
              "type":"public",
              "id":"2748401767868569292728650262539507785140506578130527030669609715302451970416field",
              "value":"10000u64"
            },
            {
              "type":"public",
              "id":"5384012855164869214368951098776005598448688254961958843105407676398657172009field",
              "value":"263089435304588716992307850183487012023530526704610137976125946279071975033field"
            }
          ],
          "outputs":[
            {
              "type":"future",
              "id":"8168458920087515358629410477110983408906589709355932175215657570524614145058field",
              "value":"{\n  program_id: credits.aleo,\n  function_name: fee_public,\n  arguments: [\n    aleo1q6qstg8q8shwqf5m6q5fcenuwsdqsvp4hhsgfnx5chzjm3secyzqt9mxm8,\n    273388u64\n  ]\n}"
            }
          ],
          "tpk":"5643706748662558792272673429140074511984763214650541880236032867211807645175group",
          "tcm":"5683642285170345278948410703957632805029391650942701255109733820569933420361field"
        },
        "global_state_root":"sr13p8akpzt9sf2ypypwwwlvdzrqn3sueyxu4ss60tpzduca34rag8suu7mld",
        "proof":"proof1qyqsqqqqqqqqqqqpqqqqqqqqqqqd9ekwqu75elc5px8h7a07z9enr7dx7knslq3mx5dthv2m7wtg58rd0y37m24h9wjcnfav4xz4vv5qq8hx3fz6p53u7rhah0upzv2d823q5dxtkwg8luy074vaehtsepka8lfnxx323j5vnkkxm7vk350crq0m3tdxw25eh35sxn22gvls05ke8x7t05kr48vttukkjlajlay9ad5ct9mt3uef3e4aplqjkcz5r5qx47ycpkz3em8jf5vjt6exa8ttqrvy8u24h22hux6cf6jtlk93n4ekvcleuhv735ty40e4mk3xwnvqlvwgfhq3naale28stnjj2d45qt2d78plvdqve28e0v8s33r7k6tsq0r7cd6ynal8962vy06a6vesp7fgcfyss66h987gkuppxryhtxx5ne4zzw0fdlvw58u6nytv2ldvnmch6cyjhdlqkurvaczwgfersx3p0a7q0jwh3z2srkuwh6whwsncnd6d0tzhml5cp3vrn63mazd998upymzxkvy8y3jjuph20qjpxqrtdkqknveq6j5hu8pny3jyk5zwzwcja328s600adwxj50hkc40wmley48eaz2486y50u5fwv3kwvqtdf558m3w0fagu5t5rp7dt9shgxrh5w4c33096k89rnz8xhlq3lc327q56etnj53s8t95xp4d5mqpzrkqfa3404zq6hgk06x2wdhpxm8ylcd2vycvdlhy6f4ynq2ffqxf3z0aez9rkc6ymel5wm2dzf9y8jnzqryzgdj75f3ccrk0avtasr9sqeg9azygcdsxa3u365ywqkq89yjv7un5zv2zgnmuzda5sm2cqxwsf7qp2szn3ucevl3p2ngtes5j40724wn9l4y9xgc3sjt72qhqv4ju5tm9gsnl03c20trejrn9h7ph3laf8wl3mpujm4t48me54jgfezjp5u7hk6v6vfrnj8evq8tt7za5xu8crmt5gndl7rf6jev8uv92pc3u9zsx7g9fx7mj8qj67vscksxsnz0yrwdp6uezm54a5y79xyvndyqtgwum786ylv5kl2t0xlz3ywfrvlhxxfmhehnugagfl9qyp7cjk3z33hqsxt85l5ratsw7xxd6cnstkcxpd76fhrr0emz0y8cqxfek3cfnhjvvwz6xuu3chqlkqarma0dles2ckrhuqqmc6kww4dgpqvqqqqqqqqqqpv28uz52tnfxrn8hs9t7xc84mmmk9yakrdtgzx98z7kkyf3e7c9rhvp5e4h97uszs4vufk7l00afqqqttv8ha0pascqfvymun9j6muvnq48y6klu88cdc6g4jnmmxu5mkpexzqxlwm8pknk0278lfgs3p75qqye87qj3nf0ttp7tvjl4t5py0nxe8zrnesxy3csn5vma5ledr40qxp63g69fkhqsq8z3ju5rhf703xdu76rg3tjun65numtsvv5uh8lp8up0xuwj4vm3z4lq67vy4jpcqqqqfz8s83"
      }
    },
    "finalize":[
      {
        "type":"update_key_value",
        "mapping_id":"2855157744830843716005407030207142101853521493742120919939436395872133863104field",
        "index":0,
        "key_id":"3024437819920267001397955368796529189477001337864961277902746027317009395679field",
        "value_id":"7805081659409642340004187468631322308448191799504598077925125724993383829772field"
      },
      {
        "type":"update_key_value",
        "mapping_id":"2855157744830843716005407030207142101853521493742120919939436395872133863104field",
        "index":0,
        "key_id":"3024437819920267001397955368796529189477001337864961277902746027317009395679field",
        "value_id":"4086438131786102168259280300621042569790476032174912712743836262735198258484field"
      },
      {
        "type":"update_key_value",
        "mapping_id":"2855157744830843716005407030207142101853521493742120919939436395872133863104field",
        "index":0,
        "key_id":"3024437819920267001397955368796529189477001337864961277902746027317009395679field",
        "value_id":"4700960403006205003857495353535819521491215647171417747435214440588997353276field"
      }
    ],
    "finalizedAt":"1717328209"
  }
}
```
