//@ts-nocheck
export const Blocks = [
  {
      "block_hash": "ab1nvxe9p27kx7cy6zgzw4m69nm4esfkd2tc9f474ch43qvkts0svxq3szumr",
      "previous_hash": "ab1tp386a0x85ukwh55ywg9hmzcsurp0wukmd55aguucpg4w807n59qe69tll",
      "header": {
          "previous_state_root": "5648574421573614802607305640824987533128813183937278358314407215380622934358field",
          "transactions_root": "7404378158611091222818057334836895004686285827478597182626305838016846505427field",
          "finalize_root": "7814728028395784647058980025944257994561003507830334004274426080211906788423field",
          "ratifications_root": "1862748419412516652917699725760603929836897562845944910239291421105594138658field",
          "coinbase_accumulator_point": "748201176585989045682242190199976207677755346737987679309026446867128572417field",
          "metadata": {
              "network": 3,
              "round": 190503,
              "height": 190503,
              "total_supply_in_microcredits": 1499832996960908,
              "cumulative_weight": 203103780863589,
              "cumulative_proof_target": 1252424065,
              "coinbase_target": 943174105,
              "proof_target": 7368548,
              "last_coinbase_target": 943174105,
              "last_coinbase_timestamp": 1689794480,
              "timestamp": 1689794480
          }
      },
      "transactions": [
          {
              "status": "accepted",
              "type": "execute",
              "index": 0,
              "transaction": {
                  "type": "execute",
                  "id": "at1ntl2e8amfnrj37pg7j6wtjmp9f3ey5hr2zeplrny9r2nfyw28qgq4u6qye",
                  "execution": {
                      "transitions": [
                          {
                              "id": "as1mvtmhpmlp83ahneqdkzde0lhz53760vjgljnl5cftg9uvsx845yq58uens",
                              "program": "credits.aleo",
                              "function": "mint",
                              "inputs": [
                                  {
                                      "type": "public",
                                      "id": "3963160479269322917575729336091883376497160669022890360680623618106183784988field",
                                      "value": "aleo1q6qstg8q8shwqf5m6q5fcenuwsdqsvp4hhsgfnx5chzjm3secyzqt9mxm8"
                                  },
                                  {
                                      "type": "public",
                                      "id": "4875142295569183688683143411232973143276726408392745325143986185365933279907field",
                                      "value": "1u64"
                                  }
                              ],
                              "outputs": [
                                  {
                                      "type": "record",
                                      "id": "7446378467407566406437600084424543368888217974189516751870608398535625034127field",
                                      "checksum": "7588655996336289672202895128672988322945145787489630469595822781965543770436field",
                                      "value": "record1qyqsqas7zrswn7s92pc46wdhp5pjq2utdlpx7hgrgu93cyjzm0xn08gzqyxx66trwfhkxun9v35hguerqqpqzqymjr06aldae6c5ygm6n85wlgrsu33yx5j4lqhjyckljq4q0u2rqydrkmhpmswv494j7hkqv0889upcjjkkypcwn4ad0j5740hlq0pqjcyts6k"
                                  }
                              ],
                              "tpk": "6946954081424873237646907098999822302201379841465022446868753802050393245313group",
                              "tcm": "2374690572281163385897785429553567714887388462186634439050611493193320016075field"
                          }
                      ],
                      "global_state_root": "ar12cqc8rlmnxjcmg32k4y9dp5kxp9tlr9s7w6gpdap4gzdl4060sxqk8n9w6",
                      "proof": "proof1qqqsqqqqqqqqqqqpqqqqqqqqqqqvck2wuqf05excdvj4y60k2s93kmtl3g5edevczv5h99fqznq0t6muc0hzymylq2qnn2qacatdv9uqauzl6lz33x62wu6g0j0w83gsflhf0m5s873nwrr8y8m5re6staecqkmp9jjzpdvzakwwtfwlfctqrhetmp0usydg3aj8kayvr4dsx0txtqqpl48ckjyqgncgu8msdvtxvnmd7nceap4wy54wejjtcmq0sqqcwdw5serkwsc2tc72dmkp6p0qnm38ml2tvxd8f097pg77qp332c8g7eq7kxwe7tcf39pmzy48k7uqhtujh56krp76yfjsmetpdc9tgzj0vpnul6fyepk46hah4k8zwcejuhnqr3vgdxqrm9dneh45zducp5swfk5amqz5sfd50353ueaqur0fl4e8ael2djscgkg06dwuugl7tt49v2d6q4ffznhs9pdlymdts9xqjwrudls7l4cxk6wpmvkjrf6rxe9tphkf9qexe3ev56p5ywzjeqgqewt6w03qcx7n3u9dwd8cgqdr8pwxll7msdgzz67x2v4ly6nrmahwux87p9uk7ggmnr73nyjthkr347wmp0tcgst6wzarg7s5jxq3egu92h5th9htswl89f04dl4s2pws5u3dq3tgyrk62fxke2yqljjh2zj3urtrcmzpppj9wr42r5qqprjtvfzwej52zzvnncm7y339yndaskyacgurgp75jdw75j2d870jy2xvuxpzcph09ukw7u5rvmegqd427jg94t0z0zyc64jvvc0smgdqmcsx2xyhgdg90k6fe28ahrs30gpvc5weah72nhy7l6ne3np572zkrw0p3mhq5uvmudfmmf9v7uxlx6eg4ws6trc8rcpnzs0arnlpxw4ch3pjd7qn3mdvg0zfes627q6skug08z7ygc664vdkw5hufa6vtpytreuxj0ef5rehm3suz5gypu7f4d7vqmzrl3u0wvreagfee6xym0lyell0ed5qe9ttaytxvassuqgqqqqqqqqqqrxwmyj202kp6gsfxxm2uttypmzxnhvpj2nv8pxew5vwxjz6v6qseqdd426knezhhk3smm0gvumgu7h3885txydm594xj3exqrrsaeqrrxpw4vhhg68jr2uzatvxddt0l8cgxgvde3gyj5fy2zy6zp4yr58qyqqqqqqqqqqq6uqkkyjyqrxsyqk5d6wev48805x54hhv2wr3ucq43vmrrh4h2tnuknfzaz90snqsxk9730e5n4pczqgtyv88mh0fm8khh6pltdpj86rv9dy4u7cvmg2qe83ac4vw5l9lpugx0g8mlqsw84rfr22v56eydyezee66d4dlquc90jd9g34rmswuhl09dfvnjw9gkwd6vquv8ky0kqqqqqjc36l7"
                  }
              },
              "finalize": []
          },
          {
              "status": "accepted",
              "type": "deploy",
              "index": 1,
              "transaction": {
                  "type": "deploy",
                  "id": "at10vn39rg3wdd6cstpvtek2weu06gdfdv45ss6ahrsek7kfdrwqufqykfycc",
                  "owner": {
                      "address": "aleo1qet25pa63lcw56unsd752m5tktazqeakzfnr9hehpt9uva3zacgs4h9qea",
                      "signature": "sign1ws4rq52gep79prh25ayaquuuz7gzlwpxlpm70jtzu5n6zz33kyqnlmtkp047449lqvts9yachwwc3783dgckgx0k9cn79ehmudzz2pye8nn2av7287jndcureme7lq09aaheusp0w97acx4793n89qwgq98afdkvc8tph6p2s3tx4censawr44q3rm7sknvhmyfsda2zw5as66t4tt5"
                  },
                  "deployment": {
                      "edition": 0,
                      "program": "program mike_nft_test_2.aleo;\n\nstruct TokenId:\n    data1 as u128;\n    data2 as u128;\n\nstruct BaseURI:\n    data0 as u128;\n    data1 as u128;\n    data2 as u128;\n    data3 as u128;\n\nstruct SymbolBits:\n    data as u128;\n\nrecord NFT:\n    owner as address.private;\n    data as TokenId.private;\n    edition as scalar.private;\n\nrecord NFT_mint:\n    owner as address.private;\n    amount as u8.private;\n\nrecord NFT_claim:\n    owner as address.private;\n    claim as field.private;\n\nrecord NFT_ownership:\n    owner as address.private;\n    nft_owner as address.private;\n    data as TokenId.private;\n    edition as scalar.private;\n\nmapping nft_owners:\n    key left as field.public;\n    value right as address.public;\n\nmapping general_settings:\n    key left as u8.public;\n    value right as u128.public;\n\nmapping nfts_to_mint:\n    key left as u128.public;\n    value right as field.public;\n\nmapping claims_to_nfts:\n    key left as field.public;\n    value right as field.public;\n\nmapping toggle_settings:\n    key left as u8.public;\n    value right as u32.public;\n\nfunction initialize_collection:\n    input r0 as u128.public;\n    input r1 as u128.public;\n    input r2 as BaseURI.public;\n    assert.eq self.caller aleo1qet25pa63lcw56unsd752m5tktazqeakzfnr9hehpt9uva3zacgs4h9qea ;\n   finalize r0 r1 r2;\n\nfinalize initialize_collection:\n    input r0 as u128.public;\n    input r1 as u128.public;\n    input r2 as BaseURI.public;\n    get.or_use toggle_settings[0u8] 0u32 into r3;\n    and r3 1u32 into r4;\n    assert.eq r4 0u32 ;\n    set 0u128 into general_settings[0u8];\n    set r0 into general_settings[1u8];\n    set r1 into general_settings[2u8];\n    set r2.data0 into general_settings[3u8];\n    set r2.data1 into general_settings[4u8];\n    set r2.data2 into general_settings[5u8];\n    set r2.data3 into general_settings[6u8];\n    set 5u32 into toggle_settings[0u8];\n    set 0u32 into toggle_settings[1u8];\n\nfunction add_nft:\n    input r0 as TokenId.public;\n    input r1 as scalar.public;\n    assert.eq self.caller aleo1qet25pa63lcw56unsd752m5tktazqeakzfnr9hehpt9uva3zacgs4h9qea ;\n    hash.bhp256 r0 into r2 as field;\n    commit.bhp256 r2 r1 into r3 as field;\n   finalize r3;\n\nfinalize add_nft:\n    input r0 as field.public;\n    get toggle_settings[0u8] into r1;\n    and r1 9u32 into r2;\n    assert.eq r2 1u32 ;\n    get general_settings[1u8] into r3;\n    sub r3 1u128 into r4;\n    set r4 into general_settings[1u8];\n    get general_settings[0u8] into r5;\n    set r0 into nfts_to_mint[r5];\n    add r5 1u128 into r6;\n    set r6 into general_settings[0u8];\n\nfunction add_minter:\n    input r0 as address.private;\n    input r1 as u8.public;\n    assert.eq self.caller aleo1qet25pa63lcw56unsd752m5tktazqeakzfnr9hehpt9uva3zacgs4h9qea ;\n    cast r0 r1 into r2 as NFT_mint.record;\n    output r2 as NFT_mint.record;\n   finalize;\n\nfinalize add_minter:\n    get toggle_settings[0u8] into r0;\n    and r0 9u32 into r1;\n    assert.eq r1 1u32 ;\n\nfunction update_toggle_settings:\n    input r0 as u32.public;\n    assert.eq self.caller aleo1qet25pa63lcw56unsd752m5tktazqeakzfnr9hehpt9uva3zacgs4h9qea ;\n   finalize r0;\n\nfinalize update_toggle_settings:\n    input r0 as u32.public;\n    get toggle_settings[0u8] into r1;\n    and r1 9u32 into r2;\n    assert.eq r2 1u32 ;\n    and r0 1u32 into r3;\n    assert.eq r3 1u32 ;\n    set r0 into toggle_settings[0u8];\n\nfunction set_mint_block:\n    input r0 as u32.public;\n    assert.eq self.caller aleo1qet25pa63lcw56unsd752m5tktazqeakzfnr9hehpt9uva3zacgs4h9qea ;\n   finalize r0;\n\nfinalize set_mint_block:\n    input r0 as u32.public;\n    get toggle_settings[0u8] into r1;\n    and r1 9u32 into r2;\n    assert.eq r2 1u32 ;\n    set r0 into toggle_settings[1u8];\n\nfunction update_symbol:\n    input r0 as u128.public;\n    assert.eq self.caller aleo1qet25pa63lcw56unsd752m5tktazqeakzfnr9hehpt9uva3zacgs4h9qea ;\n   finalize r0;\n\nfinalize update_symbol:\n    input r0 as u128.public;\n    get toggle_settings[0u8] into r1;\n    and r1 9u32 into r2;\n    assert.eq r2 1u32 ;\n    set r0 into general_settings[2u8];\n\nfunction update_base_uri:\n    input r0 as BaseURI.public;\n    assert.eq self.caller aleo1qet25pa63lcw56unsd752m5tktazqeakzfnr9hehpt9uva3zacgs4h9qea ;\n   finalize r0;\n\nfinalize update_base_uri:\n    input r0 as BaseURI.public;\n    get toggle_settings[0u8] into r1;\n    and r1 9u32 into r2;\n    assert.eq r2 1u32 ;\n    set r0.data0 into general_settings[3u8];\n    set r0.data1 into general_settings[4u8];\n    set r0.data2 into general_settings[5u8];\n    set r0.data3 into general_settings[6u8];\n\nfunction open_mint:\n    input r0 as scalar.private;\n    hash.bhp256 self.caller into r1 as field;\n    commit.bhp256 r1 r0 into r2 as field;\n    cast self.caller r2 into r3 as NFT_claim.record;\n    output r3 as NFT_claim.record;\n   finalize r2;\n\nfinalize open_mint:\n    input r0 as field.public;\n    get toggle_settings[1u8] into r1;\n    lte r1 block.height into r2;\n    assert.eq r2 true ;\n    get toggle_settings[0u8] into r3;\n    and r3 15u32 into r4;\n    assert.eq r4 3u32 ;\n    get.or_use claims_to_nfts[r0] 0field into r5;\n    assert.eq r5 0field ;\n    rand.chacha into r6 as u128;\n    get.or_use general_settings[0u8] 0u128 into r7;\n    rem r6 r7 into r8;\n    get nfts_to_mint[r8] into r9;\n    set r9 into claims_to_nfts[r0];\n    sub r7 1u128 into r10;\n    set r10 into general_settings[0u8];\n    get nfts_to_mint[r10] into r11;\n    set r11 into nfts_to_mint[r8];\n\nfunction mint:\n    input r0 as NFT_mint.record;\n    input r1 as scalar.private;\n    hash.bhp256 self.caller into r2 as field;\n    commit.bhp256 r2 r1 into r3 as field;\n    sub r0.amount 1u8 into r4;\n    cast r0.owner r4 into r5 as NFT_mint.record;\n    cast r0.owner r3 into r6 as NFT_claim.record;\n    output r5 as NFT_mint.record;\n    output r6 as NFT_claim.record;\n   finalize r3;\n\nfinalize mint:\n    input r0 as field.public;\n    get toggle_settings[1u8] into r1;\n    lte r1 block.height into r2;\n    assert.eq r2 true ;\n    get toggle_settings[0u8] into r3;\n    and r3 11u32 into r4;\n    assert.eq r4 3u32 ;\n    get.or_use claims_to_nfts[r0] 0field into r5;\n    assert.eq r5 0field ;\n    rand.chacha into r6 as u128;\n    get.or_use general_settings[0u8] 0u128 into r7;\n    rem r6 r7 into r8;\n    get nfts_to_mint[r8] into r9;\n    set r9 into claims_to_nfts[r0];\n    sub r7 1u128 into r10;\n    set r10 into general_settings[0u8];\n    get nfts_to_mint[r10] into r11;\n    set r11 into nfts_to_mint[r8];\n\nfunction claim_nft:\n    input r0 as NFT_claim.record;\n    input r1 as TokenId.private;\n    input r2 as scalar.private;\n    hash.bhp256 r1 into r3 as field;\n    commit.bhp256 r3 r2 into r4 as field;\n    cast r0.owner r1 r2 into r5 as NFT.record;\n    output r5 as NFT.record;\n   finalize r0.claim r4;\n\nfinalize claim_nft:\n    input r0 as field.public;\n    input r1 as field.public;\n    get claims_to_nfts[r0] into r2;\n    assert.eq r2 r1 ;\n    set 0field into claims_to_nfts[r0];\n\nfunction transfer_private:\n    input r0 as NFT.record;\n    input r1 as address.private;\n    cast r1 r0.data r0.edition into r2 as NFT.record;\n    output r2 as NFT.record;\n\nfunction transfer_public:\n    input r0 as address.private;\n    input r1 as TokenId.private;\n    input r2 as scalar.private;\n    hash.bhp256 r1 into r3 as field;\n    commit.bhp256 r3 r2 into r4 as field;\n   finalize r0 r4 self.caller;\n\nfinalize transfer_public:\n    input r0 as address.public;\n    input r1 as field.public;\n    input r2 as address.public;\n    get nft_owners[r1] into r3;\n    assert.eq r2 r3 ;\n    set r0 into nft_owners[r1];\n\nfunction convert_private_to_public:\n    input r0 as NFT.record;\n    hash.bhp256 r0.data into r1 as field;\n    commit.bhp256 r1 r0.edition into r2 as field;\n   finalize r0.owner r2;\n\nfinalize convert_private_to_public:\n    input r0 as address.public;\n    input r1 as field.public;\n    set r0 into nft_owners[r1];\n\nfunction convert_public_to_private:\n    input r0 as address.private;\n    input r1 as TokenId.private;\n    input r2 as scalar.private;\n    assert.eq r0 self.caller ;\n    hash.bhp256 r1 into r3 as field;\n    commit.bhp256 r3 r2 into r4 as field;\n    cast r0 r1 r2 into r5 as NFT.record;\n    output r5 as NFT.record;\n   finalize r0 r4;\n\nfinalize convert_public_to_private:\n    input r0 as address.public;\n    input r1 as field.public;\n    get nft_owners[r1] into r2;\n    assert.eq r0 r2 ;\n    set aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3ljyzc into nft_owners[r1];\n\nfunction prove_ownership:\n    input r0 as NFT.record;\n    input r1 as address.private;\n    cast r0.owner r0.data r0.edition into r2 as NFT.record;\n    cast r1 r0.owner r0.data r0.edition into r3 as NFT_ownership.record;\n    output r2 as NFT.record;\n    output r3 as NFT_ownership.record;\n",
                      "verifying_keys": [
                          [
                              "initialize_collection",
                              [
                                  "verifier1qqgqqqqqqqqqqqyyfvqqqqqqqqqggjcqqqqqqqqqn7zsqqqqqqqqq5kxqqqqqqqqqq6xuqqqqqqqqqqvqqqqqqqqqqqt8dz29u2vvn9vw8xfvhakfc7mz67ce5f07vr5dj9fqjuefe3hnhqa3ccvklwvdkxfu0vw2am5uvcqp8ym64d77jhwud4v59uela5nwczftqxxen6sdc7tjxslxvsqkv8pyqzj372lw2w69e3gdgq29d2qr7z94scw20auduc7n54jqghf7vyzq69eneyl9vrsradgmzza6m2fg7mr44qudw397qsprxst53pdsqahp6sgqrg2azzjt6xqzsl5053mx3nyyj0rct40yn3dvp7scnvpc0zcqfm2fwh980vthrfnfxffwqttx2m2e8sxguk5e5hxza7udux0k676rfw8eq9pvet560nt43p5xfnj7x0dse38x2w2482vfndsskqv4rqgpat5xgdyekla9m0ppg3kcu4w83vp9hsw3dtsp6575xug4f8q5ytg4qc26mdgzg5qrsvl78yqf3q22kevyjjcwxdh58389ut5pkullprd264u3qgh9s9japnczun4ra0y6unxhv7jx7yw52xdpajqzerg380yqy3kcdecnj40m8vwlynaa9lgfgf9kdwrdc453pumysetwlmq8uqjl28e7mt5gpzp6n5qsqvyeq3k6jydr4ahjzsg0ahxqvp8aa7ead8azr8ry93ygcs53v5zywnektz2yu2ax854q00hhs8emqqdj5faer4e7hvu8zma2rnygpmvxf2wuavntwj65u9sgxu93m9dms6p0qu9escjrctwwny67zhs3sq28gcs3larfeukv5u2wmf4dw5c0a6jxl5q6krnkvk9r52rgsd6pmuvrlwg3az0rqz89w3ewxsculupek5ea7lwxauqsg88ryrnnlpp4agplyadmx5w92mcmp4zej3rjngan7lv3jfrq552gdsksjjg0q4cquzygsp6lsp9desahew286hnv2c5fwr895y24htke688wte7ugj4sazsqs",
                                  "certificate1qqqsqqqqqqqqqqyc9cc2nztc24ynwca57rzjjpjw5sdhx2h20dsxl7yg9uwnsmka4dcvu7v7tts06rg59d342z8j3xqqqqqzjz0qc"
                              ]
                          ],
                          [
                              "add_nft",
                              [
                                  "verifier1qqyqqqqqqqqqqqq42cqqqqqqqqqp24sqqqqqqqqqhx8sqqqqqqqqqxwtqqqqqqqqqq3czqqqqqqqqqqvqqqqqqqqqqqpjlscsd46xgdht7f9cs3jxala62w808h6cuh9l34h5qgndhjfvv75kmu950km0plhau56se6mz2yqda5j358fvqsh7xvdzfhw5a2nn7wtyzl8fcfkcc92suugh8ylux42200cn9mhz7eeq3kaxuqnunmgqk9uwkfpm6fmfmp3cqd0ydamenpjkj0q37k9tkfge5cmv0dmgm4dsgzc9pzjexnwmjsghuuwg42esqdzyct6glnpa834hd54xc4qdy5cvjs340udmds7wtc7wqpfz8ec4upmy67py0haerusx9rd6alrpqwnz26v9h24060jug8yhzsdvx2xcusaq3rn7mfuwj587ktclg8ydcgguqmnd5p73ffweq0lt95dsxq9hveaxzcylfu45ddeg0p4qtqx4xzqcytn8k793c7r3hxfcct4646wyawzwhc3w344zdrl0dlnqcqqh8kjr89jtkyrmfrte0wny7t3pt79qlezuvctyp6mrazg8v4f7ev964lgp0swz4h8rpf633scmwtsz57vc4vted9jutgv6kr6qkxf7q38cdeup6jlccrj3nwpw4ntsv997cvgq8n8xrlgvtgw7qlnzsrzspxmxlflvmz8xgg9x9e2dlnqfwl2dsfr8d3u2hqdugued9gc3y0avryqtzxwxq3vaqu7jcre8wzr4qqctl90amsxu4wgpzslvvdswqtd3djcxj5wq2h0nmkagev2mty9m5gyytpecpmg0akc6hzrp766n7qy0rca274r273fy87wrdqlpmh22n7hwk00y3y4cnr8asecxhttug4jrspx9t3vlq44rsp8uf26cssqla8lzf3vtm4v0p6xr6rlxag76tgz9gzry3qgr7q58k8xzzgtzksn0crgn5uxjx467z8wnrg0egaspalmvn0hj2xuvms3x6r9pxc95hmf7zdzekwznj4r3lv8qdkjjmkn6g0s4p",
                                  "certificate1qqqsqqqqqqqqqqr7c3tahx2zu7mu8dnez4akuzcyanrj5pxxrl2t6zq3uy6pq3sclq6cl5raz7jea9ta3ef36jekggqsqqqq8wtnk"
                              ]
                          ],
                          [
                              "add_minter",
                              [
                                  "verifier1qqgqqqqqqqqqqqp2duqqqqqqqqqz5mcqqqqqqqqqaz7qqqqqqqqqq0geqyqqqqqqqpq2wqqqqqqqqqqvqqqqqqqqqqqyr40n2cc48yjmhrz5azj63v4q5t34szmssntcvtem505qy78a4d7r5pw3y4yfs73jtnc5s26gtwuqele4z56hpeetl244y68stjpxfyx98p6ulhgshp77zee3ez6s77n56l00ej4dwkrhtlv37pq7a6uqpxgnfsjq9x74qrnff20egt8kgdfv4udqqdw24smrrdr67y7258frfuy227jy2kfw8utqxggycq3rqyeu3a7qxselmjkjfzuvfatg0pqjkwu4kmtdxprkns2u2p9elz4plxvwdx5msl4juxp2vwwkwyn2vq2rg3al576x6wjgr9ts6f2h5mj59lm7jew6mvyl4hlvkrmhaudm89v6rpfxnc3wc05ttcj8t38eq6qjqsadphqzn80k797rn5rcp3p2a2277var42vvsye2pjz76mzcg07d4lgrjwwej6drgusz5zprezgqjdy0eu36ksmuvtdhu58k8cgkwp7njwjq3my7n3nsvzddy5pv6mp2d8uwqx43fuhs32wg289dl24qzu9fv4dp4vaxl5a7vs7gpxyawce6r6tpy8lhx08lfw4n6442egh27vu56cdfyjcdzrr7lpqlpljwq8fayu9yz6k8znn342kxsgx4jl686qmaw8j8jth8atm3g87kj53p388mvcj6q8vmpfjmy0ck7sy5cqqpg4rsr57a24fjqxsf7yxa6ke0u47mpf7c3ur3m0v5j2dhc62qujnmdel2vvq90kaxxlf0lck20yqlzaqfk708ts47lkycfv0avy672rc5w9tcyg68pt2e6yrlp7s4p6456zl0zsfjm9ey6vus7pf20scqdkt06t9ed70ut594t09nw72f7fsz5lrmxt64k79xen8fdazhy8mys48qulemepjezsh3wpd30x5cqvw8yyhmzt6xr2ltvsjll22h5ky6fnhycny6m9ndyvd40gh7a3vfn7s060",
                                  "certificate1qqqsqqqqqqqqqq9fsy6svrr9ygxzhu7vetg56fd3nhjm9ejuf8e7fxpz4g5eau3ka8sf3ra9eykzzjl07fpxcp8tqxqsqqqrtqpk2"
                              ]
                          ],
                          [
                              "update_toggle_settings",
                              [
                                  "verifier1qqyqqqqqqqqqqq858qqqqqqqqqq0gwqqqqqqqqqq59tsqqqqqqqqpumuqqqqqqqqqql4xqqqqqqqqqqvqqqqqqqqqqqwxy30r9dfazg9xcptwhljlvj0zw7s5a7nqgnrxeuju43rheduwrkuldfdlxh6dfuj70wvk06mrcvqw97er9fc5vck2gh6lnnz6tnuzt9rtlzntfdwcnltp06fjgft4pupywazx2xd3wxrte8rgwl772sqqmuyma5jxpwx8p49yhfc8c5h9wxzaaqa4r863fksezuhthnywwmzvmq9cqtez3wwu0ju4ty9slqgsyvcgfke5sz54d76vfjh56aszpj7ccywg84quanp8ewjwe2jdp4jmygqp2ksr6xvhs38awq8v38fhqqfn9cpd3609ta399pzsnq457lp5udslyc3u49adtrcjpennehqymzkn7ny9833yjy2gqwsrmf0njqqj9z3tunwen76kz9zte3n33qcevqgmm4zsz5ae3y6fp6lzwghrp4y88jxyx8afwu6mds20lv6l0cqtrwcyrdgnq0afryzse8yxry4pyz6puycyatfhep7ul2anzan60gvnjtc247mc5afkk236fd269usp2zfgd38puza40tdatfqsetp2clgk74rn0rret6rvcn2hmrlg8a94tlc29z986c5ldjz9padn6w5qpfa7tj3yhnejdj2pqzzdwdd77cqcer24t8gt2n3z9h9lena4sa9k2en783j6fktxd93k9qgyemd9q8yaf2v6afd8r2qrwe6fm7udfjrtsela5xyusplx25ws6n772dz5hm9ccgpzx6dc0u2t9wf5mmgyyqqk0lrh3psr469da87emkqqmwvkr03ekjdye09cpmepqtensh5x5hac4t32dfepyykd8wm2uyhm3yq2j73gazcde4h0q6t39q05lwvexq7zy4cppgqptnjx9he830dyf9t8enetlmr4qthtcn2mx30q9vqq7ta7mggx9lp84ket7ncudpnad5zey2p6qrlt6plfulm5vph66mh0vrzyz",
                                  "certificate1qqqsqqqqqqqqqq8cwe27cd5ynqkl62qgvh37z7yf4eelr6syy3k2nhrtlcfz3k64ma63uvpwf6mhagsdg62l2fry95qqqqqqjnez6"
                              ]
                          ],
                          [
                              "set_mint_block",
                              [
                                  "verifier1qqyqqqqqqqqqqq858qqqqqqqqqq0gwqqqqqqqqqq59tsqqqqqqqqpumuqqqqqqqqqql4xqqqqqqqqqqvqqqqqqqqqqqwxy30r9dfazg9xcptwhljlvj0zw7s5a7nqgnrxeuju43rheduwrkuldfdlxh6dfuj70wvk06mrcvqw97er9fc5vck2gh6lnnz6tnuzt9rtlzntfdwcnltp06fjgft4pupywazx2xd3wxrte8rgwl772sqqmuyma5jxpwx8p49yhfc8c5h9wxzaaqa4r863fksezuhthnywwmzvmq9cqtez3wwu0ju4ty9slqgsyvcgfke5sz54d76vfjh56aszpj7ccywg84quanp8ewjwe2jdp4jmygqp2ksr6xvhs38awq8v38fhqqfn9cpd3609ta399pzsnq457lp5udslyc3u49adtrcjpennehqymzkn7ny9833yjy2gqwsrmf0njqqj9z3tunwen76kz9zte3n33qcevqgmm4zsz5ae3y6fp6lzwghrp4y88jxyx8afwu6mds20lv6l0cqtrwcyrdgnq0afryzse8yxry4pyz6puycyatfhep7ul2anzan60gvnjtc247mc5afkk236fd269usp2zfgd38puza40tdatfqsetp2clgk74rn0rret6rvcn2hmrlg8a94tlc29z986c5ldjz9padn6w5qpfa7tj3yhnejdj2pqzzdwdd77cqcer24t8gt2n3z9h9lena4sa9k2en783j6fktxd93k9qgyemd9qy8sm7pzq7w8uhw8vhch4ywmrn3zayn844lt5702gud0zejs64cjwe8dsx22x0x8hkyet3jz42l5zq77d2r7ajy2twn4kklfh4emj566l9659cgr8y455w3mz0cur4v8040ss8uwxdxvy02teawag7w6eqp2j73gazcde4h0q6t39q05lwvexq7zy4cppgqptnjx9he830dyf9t8enetlmr4qthtcn2mx30q9vqqq3369ahz2karcmeffnu00qm3hklpf7y94a4a2m675ukjqypx2g6pgvlvy",
                                  "certificate1qqqsqqqqqqqqqqxm09ctrs0gqllzzvm478jkcurm2lff8gz8ry3slh5w4e3rxjgxju6htw0fngdxu6s6rdjy4pe2p2qsqqqjvt528"
                              ]
                          ],
                          [
                              "update_symbol",
                              [
                                  "verifier1qqyqqqqqqqqqqq8e8yqqqqqqqqq0jwgqqqqqqqqqsavsqqqqqqqqp0rlqqqqqqqqqrp4gqqqqqqqqqqvqqqqqqqqqqqv997ffe2xngfv4l5j2830evxcfqu89uwt0mgm73nu04te5szc73hy787vyzzmar0l8ewxnyyx65sq9n0wcnzxzqu8cxe98d2qme2ptnynlxyllfe3ym4upnk4zuy2pjudtnyvrs4zcagt4tqyap8quqtsz2es6pugpg0egrylcfvfqyahtny0cn0t288c0vgk8dypezhjty5pvu20czyd9znhzfkhxy6nhsz7qq7fuzt24qk988pavrllujkurp46j7xfhpcuurmzthtx8zrgxsk3wunqlymnksr6vhg4c8y0a43e7qwnl89wwvqmnthxm70aex4tn0fj2r0239q44x4c45pgaklvr3k2n425xqusdtwnxya870gk463dncqvg6aqzn7k4cws922kt5plfy4y7lc3ygsqhgsyayql8vy5mc7gythdd8l9wfhm9rqq03qkrllwmdyqe8j6a003rm0cpagd54rcvaw3k84g4d55n455n8gatw4q7zlm4ya4c6gx38qcygpzfguufda9g0yqp6wr2s9u99vq004795avcau5fl9428dma70tjeua33l87s85qrpfy5mnhnvzv0g3p0l0x340u23jqyztffu8d7r5zzt8l86nssw7xawrv7nfwjqttg4wfnyp04s3sdwa7g3pzx89a9frjpryh29am068tqq80f5hh0u7l7yt0aea579l7wt2v729z39m4fykmxmt4rrp530gdmv92qzc3en3j6zsutywgz4qygqxz5hpk4rd3vfdyx6d9rte7kmjfwp3uk7wgf2mp8h8jkm49qvzn4w66z77gtn8c6swfv86nqd2u5vq75dmfg5y0pesyet900sjulchjuhpx0r6ccy7r54krqyy788rekyntgjfsdwlajttamg880aacuwsqt8w9ev9s6lm66q9pu9qaw04uwhxu0tjs06sgxm8xpftff7p0qt09n5t4q",
                                  "certificate1qqqsqqqqqqqqqqrw9fwya3c35wpv9r2msd84x5yel5adydu566fqnmfjs4rslxja9uyu2phzulzf8netyyehkrt39cqsqqqurtl2c"
                              ]
                          ],
                          [
                              "update_base_uri",
                              [
                                  "verifier1qqyqqqqqqqqqqq9n8cqqqqqqqqqtx0sqqqqqqqqqmassqqqqqqqqqxyvqqqqqqqqqpy4cqqqqqqqqqqvqqqqqqqqqqq9l5vd3rnyzxrmd7d7m5l8732gr66fj67mkh8v9cdr326hz6rk0qapx8n7vpexyq22przyu9tez65pm9z8lnes5sq8zqjrzzrxwmftjflzcnfd3qrq5f4zf9ukdvrkuazk7raad6d3qa7s8jglgeka7w9sp46f42ercuevlfy5shn8424p2e5glew7g9lhhd3vvcdex6x4acsyksqjrnlgc7knm5tzrexyjtm4qyj8dgtv587643jy3j486t0znxsv48uqzqvf5yv4ph9p86zv98pn9kr8krket9gdntpd4fdwd28f5qvtldxe6dxq63pg02r4h8hnaytm55dsehncnjh7hw2ggwqyu86nphhjaug6me99mqrvzwk9c4nrzgq5uvc9c6cfz9yhhrz7qlen6msgxjtxjv589yw5zqp58dc96a0m8e47r483xw6vc8juxruhawvh2suprw4qgs3pr2z8ltv3css32vunzf25mt3am04772508jdqjau20deuvhjuexr6khjz9czsku5a7acspa94wn3equ4ntxr52nrplswvdf6q0ygtrm4kjvj2wmyvqlejqkn0f2ac4tc8dsklem5e8ugmx89pqq33qrwmr4sknjhgl97tgyek2sg9nz08rdzax8j3fjzse0lk39rma75jvncsw23njjqa35y0wuu8sq90dudukpx7tce9a3qalykdr0w25q0wkumt9ef0wc7t756e85ze6zryrnkp89cd67jejyadallj47qd4alwjk3zmsxvsx3vyurwaq9lcgjfkqhszu887ulggurjsssxht8g5d8rn9j4uv402jda03dtpeyqn0u2hjkxdy8kemqr03xfgyfujjnwyvqxatq0l4llwjxsjxajjqxe6gncmdye4u9la53uzplhcq6cpl4ltv7kjkjt0df7xule2vcj2dwhk8d6889ehhec8am3tqawj6x0f8uhys",
                                  "certificate1qqqsqqqqqqqqqq9f9e0z4glpudzm2gnyxy99hn9gj4tdxw8hxddtymrm3c6zlved0lzhqkufyz68sz8035w4jtr3awqqqqq6ycz8z"
                              ]
                          ],
                          [
                              "open_mint",
                              [
                                  "verifier1qqgqqqqqqqqqqqx9jvqqqqqqqqqvtycqqqqqqqqq7l4qqqqqqqqqpgzxqyqqqqqqqzgwjqqqqqqqqqqvqqqqqqqqqqq84r8lrvkc29pgjzm9eaxewvj2gjxyuflaetxg8wut0dkd2kt7q4d7ztu3xmf348eqdz578resr7yqlmcrgjuw4valnh6wnentxpvc98n0gdmp0qgz0rrr2xd29wh823s3kyvfzmyqaxjp9k6h47fvzfzgpnuqjdexuwd2w7ek6uze4ql057ntuwj3alnmuddumlp7vqaudu6ry687xh55eyewqtdyney5nvk6sr7dmdqth8wuf33xrqydd36c4ungsax428c698awuxx8flccvwd349xjfm9lzkxd7z9wkk24jhvvzqpchuk60r4z2pc8qn96gxdrcuu2aytcknu5m8x3xwc6rnxclpx5z97420667mehhf60vgsmr3kjtkq2g3s30kgyfcx2xe2jk96aydf2wgvhznlwdp0h05s25m6c0c6qgwq347cltj9ff47t2qv8jzudjvqpjevtnjjylfy8wg7u3tl202lstut7yx8fp5advs9rtn8jym07nxwxcsvdpv7qffwq42wgp00acynczwyw783hwhwfyqfmh6gaev4zf23ld2nh9xncl3e5skjx3z7wape63vcklmzfzp6na8kje92e3zuus845wsme772q5m3668j3n6um0hduuwjztkxw3qtg4fq7g223znxl75ated8xly3sy3z47u0vr8r9eqgfpvg8s6uflhpfku2hcxdx824d0frymatdvf2cjw89zg34y9wvh2trgxs4ssclyvntztdnrzt07qqt74ms2cdfceqn9rf8dpe3e5d2jqm6juhaeqeqvphtfpwn8zyntdjj8ew4tngpkd7zxlnzy0dakzvpqzdf7w5junlyllhwux5c7mmht36ywl0yd3l732h4pr3eawmua6nlclmzwcx9e09k07m74qcvl5ugp5wamkfaaa7wppjdufy0p5ykhtgullr423feeqlzww0ar64hz3hx8pgvvm",
                                  "certificate1qqqsqqqqqqqqqqzp0hgcrvlghs3luuluv7pdenqy3575hy2fszmelzc2tr5pmps8m9rvgr65ard4xrz8dc6zz080d6qsqqqg0pmkc"
                              ]
                          ],
                          [
                              "mint",
                              [
                                  "verifier1qqgqqqqqqqqqqqrg7sqqqqqqqqqx3aqqqqqqqqqqz4aszqqqqqqqq8cuqgqqqqqqqrq87qgqqqqqqqqvqqqqqqqqqqqxwelj4hxw966wavydmk070kuq2zqsryj97e0cvrr9u4y0ylzknj0fcvp3pcd8y0l9jv4fn2u749cqq7cjf05h6645mt99hzssa5mm3l00n9j3snshrjvwu4x8ryjx9zvsdp425wnjx849s6q4nm0dhc2cp8n0s2mp5pyy79umdctc6q02e2e6dpywct057fmsxvs0tq3kd223fymm20dse4tfmegkxdh854kzsr78z6dnyml6ywtclrfdja7y8sz8m52h2tjhyzxfg9z4ky3jz4tmje0v6e06aa2vrretkl2udjvr3qwfzckusha8ln6yxu50gvnhhak8cqjjzhel2j8wyf6yjgamurzzj9xpy64uhcxdkm7h5hams62akyq2jd330lhpjgnu8zwcnfasn603ca9a45evn7x3t8k43lfe67w708fww5mpqh3wlpwj46elvj0qqccqkz9075lrc36vhvhqx5y5zmxs4fw7evcpgapqa4a607f6q5d8fesp69lps00zlhqrn02pvue8290cqk26pd6laehqarqtx7pzmjl92ada2xm65lc687xue63v50r2247la0vhw5mtqr2nx2stcvd58pmzqy655wwxayua3u3lewldp2p88v8v0g4dv56283xk9g8us7zzrjwca87z488ufz2cmqf8kpe2davzyqf62c93d4h6nglacsuhd3t8pn7st0uvdc4jlmmrj4q025qd5kpgv96v7k5sgt603mqkz0m7c5zxqqqw84eqyudx0dmatze8grea0au20ag5ke7xvk3tnjjnkc3zhp8da6jss6gdvzsvytva727k0yqjergq8s8emtqfyxjuhcn77fe5e47r9fwt8szlnfxh2n4xyjuu9kmfr2tnkpgqckrgpvfypg6wkukvaqvsrzmzg8ln4sa085vrftwy7l2c3a2f2srd63m4edan8epa7029pkku4thn6y",
                                  "certificate1qqqsqqqqqqqqqq9q0p6mz22mn8u2d5dqfppygl0s02hdtsh0ktyhwz4w87g45h6cs4xcvhcaszag8ye6vxlcu2f5cqqqqqq6lzhyy"
                              ]
                          ],
                          [
                              "claim_nft",
                              [
                                  "verifier1qqgqqqqqqqqqqqr2msqqqqqqqqqx4hqqqqqqqqqqn9jqzqqqqqqqpehlqyqqqqqqqp395qgqqqqqqqqvqqqqqqqqqqqyxt5ry20zvhzwnjdt4dsvlalya2nzypqxrmls84wfpzg3zdwtfufqxjwurqta7u45l7vlnes3qhqpaj2k4ufeezux54d6r228j83s0yvxqmppup58wguqp37p7ppk8zwqxrn0n76udyy7m39uqwedtsfqpe4wnrw473x80c2f0dru85zaw4x42z4gq4e2cyw9gwwjnwv5k7s085echzjmt8wtf5t9sv5k7r5nqxkgq3aakwhc3r9nq3rmyzmr43cgu80h7wzjz6cna287hkgxwgqch4hng3escvtv4nv92m0srmk6qq9atgwxrztfxm7376v5m038m8rwa37hzg39m293nfl8xtq9j6uxx8xwpczzmz8u5ywxd995mdge3wqclpmqd7extswa2svmcff65wtr5w7gajumaxg7m436ewvv6yehzq9jy53kel5xwvqf4gcmcrvyeqcpj88shter2c3ej279jrj6nctrlnup7gs9s88l60t9uzdwstgr6953qzz6ftnye77ej5aauxwcg2xgpzzsp5u9zs8hzyhf8fvawkvwzmqwqp04ehfc4qxahcqc0trvzht4ah5z0nwyn2xecsyx448qyzpgsykk6zh4km3du60n062nwfz70vjfanms0wtqgncckq5e82306lyf50kwgsxcuwrkjje5pfsf20jhtqyl8e7gm4zlycsjqfw8a3p79tyn2rm08lqpj53ludl5e58ceshfjcr6s65ewjs8ms7naugw884r3gq0gvjz3ez77crwmaklyrez3hhndus3nnvdtczwl6amdc84uvsc5hqwv3t26jgmmgatchfv4x8x3xsqranal779gm2rhc2r93flx4m6ap4975kz3wseufn66htsejmakud5e7z66ggfkhs9pdm0jn6qjwycqt9fprlz2yzjy799p9a380l4zf5dceqs0ak88qpznalxkwdmk24j395gmx",
                                  "certificate1qqqsqqqqqqqqqq966uewzufe7907qyftkydp5643jjnfydnjdfr9s6dakaa8waa62zurf4fyhukjruzst4lp7yqudkqqqqqppzatk"
                              ]
                          ],
                          [
                              "transfer_private",
                              [
                                  "verifier1qqgqqqqqqqqqqqyacyqqqqqqqqqfmsgqqqqqqqqqachqzqqqqqqqqc4sqyqqqqqqqqwz7qgqqqqqqqqvqqqqqqqqqqqxztl83n528zexv8fv3pe7muycn63p8x30es9p59d9khy5q93xvf2emd8yq4ynry30y69hmx5nwkupwdvatz2v7c9cvlr8p2lzehp99r9emk2kq4p2ltwkvpfwhxy9654dkhv222wfx0qhundrxsz8neaqprx3qhghyfmwmlltes68h8400zhf05xpg9wqteagvv50e8ku4t8jrug00q2ywxc80396h3jhrg3wqzccada0es06n4vhaatf7kyl5j3zct83swqgsj8y9uhn5mh06k2usts2ztnsyhtsvrcg2rdy0yqg8qd86d2y2lawks42c0y8xu3qwp7x675fn6f5xgqvkpzzvju9hapkf87z6xdl75dmxl4m6k5jz09vhsq0zn2s6j4pvwrglnape4esuu4rtysr74k9l74szs3gf44psk4dk0mz8lueplggay7ty7hw94rtg3ypu0n5uj0dtcctjkxv2xqc46c3m6j40wl7nzxmtqmawmpsk5430j7ms5j2zx50sjnknwd2l670nj8qr48hmz74l4gu5unytf0f0lhw5hvt6erqxfqr2qz800k5szl0zh3afdygvy63cw9pfx4r6dppftrxszuuhtrcnj74vygluu5qtcmcsxkm9a6cfte3vw3dywz6znpv6nzsn5fl94jzccuzn8wautj0w962qq2tv4ynkjryh9vj8zx23wsd7vmcvcxgna8ys3tw6m888wfge6c8xys7qpxep8nqk040jw3wsr4cxyq790l9960v4p5pevwww3585ggk49ftaknq66law6v6e5kxk45jluqheeaju2e82n02hgygxj86xtyqcmt3gzrtf9kf7rknrlgnlnayhv6prjkhkck4334xsfpclxsyh77mnq0jy2eymzjf7aa3rgaxhavsqk6xapn94sf9tenmd5rmk9k4rgq6tmhfdeu6wanm3x6jcqupdjjl8ymtns",
                                  "certificate1qqqsqqqqqqqqqq9ueertvdlacaalcqsmwkqqwy3ra8t79mt4sdnyplqyf834ycxh57qkwlj9t2ngvcjhqvvuc2z2fcqqqqqxnmsmy"
                              ]
                          ],
                          [
                              "transfer_public",
                              [
                                  "verifier1qqgqqqqqqqqqqq8zdqqqqqqqqqqwy6qqqqqqqqqqtm9qqqqqqqqqq3evqyqqqqqqqrlfjqqqqqqqqqqvqqqqqqqqqqqffwcpvf8xpjc8szpjs9xk4r338s0z8zjx9hysc40hvgf8ktx3rx2eeaspk27vtx5hr8lz33x0xmup8t8vxrmnjaede2u44lhgf3zs7x3u3mj2sakfaksaysdg66pk4lkmkjez2ky26ns9mxs8xlx8n3vcp3zfdqz0g6w0lf8jd4k4ycpa6ejfavlp8wd4x6p9muzy9y3vekhaggc7lr6duepys23nzyewd5q9sz4sy0apghs4mlwgpssh6taq2afm3ya3ydxvk3ttfxjhw9wumdc6jnyp92c8v73m8vjzrfjhdgqjcqtjjcyuq2xlgch5ck8sclr669e0dd4hrm84rvpr7x39xq4sk972avcvs79c52m8wjtx562ure595sq2yk8ampy0nrmne4tegd265wq2u9e7gpvd3gzehgwuvqyg6p7u5uhqsfu2rxmrafg65rwjl5tz2d5pn7ukae5fqgugcjx3vj7p5snallwuttxgr3t6tssun446qscgnxas6dx95l2mxzttndu5aqw095egqevqrsnq4pwe7kzfamvr34ww683ageqgkdnpmgv59ks8vxw3xug2agq669zehjpqynmajhug0f6aszs3v2mam2n7296z2yfj6dthw2jxrf28gd5ry9w8kh6fznhd5ym3wxvam24gz0n6lmnt5hv8j6cgvqzp92z4glew3fuh4zsa6eyjdp498c52u0tp72h6hqdcjgy0kx6pv9kmwsnmnc6wa3m2csdaefza2qqq0pfy9qnahdh9mmwzmer0tkzrmpfpd9eegnktlpwwwj5cejug35ma2u9g7ssrzyrwzzft5867wpcq7d62lyjm3nn7d3wqxk22ageepjsh357t3luq8yuszq2h98ac27uy7hx5w98cvpzzn7wmxu9tewzcqmwnx6zhlv0xf3r27udphssznm3fp3y3ll27wvcqpndggpcjz3gz95y62s",
                                  "certificate1qqqsqqqqqqqqqq95rlfrrwk7wdwkc6nkw8ruv0u9sxrlap7utk4ljtqwhxavlxahxlzke0ne0adtw2ah0l63tmfc52qqqqqj6jmhk"
                              ]
                          ],
                          [
                              "convert_private_to_public",
                              [
                                  "verifier1qqyqqqqqqqqqqqx73cqqqqqqqqqdarsqqqqqqqqqt0gsqqqqqqqqqa3yqyqqqqqqqrya6qqqqqqqqqqvqqqqqqqqqqqdaa4nysj78w0zggmf82nuduw6lr9shgr3la0y4zsz7ns6m0rxkr89kxh0n9x28vng2he40836azgq7kal5934x23umkp9dx8pgaw8srytwtmtyfgt87ejrfupnk5jrxwsrpqn9j93cv6nfrgyhefs20vgpt6vy8q5jf0pm4sw9lwtdak3mafwyuac5nv3kp3f2tg436sxj9wgjm45jlw87q8fhvfdf8fgts59qr53a0flnew6je9z4l6ry9xw8yzsykzwu59ptn9330v4pl0emu27hg3sft8aaf0wzkupyygj8ewuwq8kuldyv6386mzl9lath8nqewzpwce6u64vhdqvtqwnwmwpu4jykupf6qpz7jnu3qx7ywulgzsc4vq67luffxpyl63xzkt3rxwwrrgt6xfv8j3z094tp4q7hfakgesqyes35msptvlz837dv2frvczgu4yqsaug4td6m20kkax0d7w6pu838vfl7l727qhzr8c3hz06aefacvajxaf8qqpst6ee2sc9s2544g7gpj74yf9ftsfuuc32p5789245u3k3pa7fxdjtjh5ajmlc6c0aqyuc50hjrqdjy4gy6rf5x2p3dd64q9vvmp3lupylzxr0fqf0557m906pk5yfmn3h9z0n9y6t58qac39e20txfzj06f86nfz407g9scvczq2ztxcmymwd69udqa649vlr00a233d6wwnxsk74773v6yjsep3lghav9qt6329hue524thtwxr65wqy7n3cqd80x3vfvywhh6jf9ferxrj3urat6vefm8gwhq7uz0tcxjjyncpctcy6szrek7d6dczrp3yqcyfu0zd9v23rsw7sttd5cf6zcnzxv4hj7ytnnnzatsjsm6vtdke9thaf4am85u9kptytyvy3a49sphpyyvtqc5ev0ag57zfsrth9nw4lk9yqw80j4gmldscn4f6pahylk0mwpl",
                                  "certificate1qqqsqqqqqqqqqqz8dwcts2hgctfegaxfm7jfandvqegnax7z3fna7eestwwfy49ryrz6garq956ncq3akanpp5gt3sqsqqqj486gt"
                              ]
                          ],
                          [
                              "convert_public_to_private",
                              [
                                  "verifier1qqgqqqqqqqqqqqzp4yqqqqqqqqqyr2gqqqqqqqqq6q4szqqqqqqqqc4hqyqqqqqqqppqjqgqqqqqqqqvqqqqqqqqqqqzxc20tld4a2y9vu7qmzu8da9unq2unrtw32plevd5hmag49gv96raqjwapfj8l64l6yp7t0hec9qqhdawddfkf89d679at4fqw6rz7p26nt2ptnnaqpn7jj9ct9k90mzhm3kycuckg7u7z0sh42x5mujsq2a29h9h2qmelz3jakw5najspga9wxsdtrpwug8326u6ph8hredfwnm3r6hdwqe4f928nst2t6vzq8lm2qtjjt4agmce3fhfqjqwh3q5f04fkv99pr6s2pf7uqhyulgv7fetv6egmj5fy0pn7l532lmw5qyq0hkzjf4n7zd89ga4dr270ln63548aquks3vt6c6lyu27a0lat7g8j0dhp9cy6hn9yhqfp299fjqetyvkcjqsjeul9l0h60ukphk273ugdqfdv9dqxp72zzag832khtlcjkj83nyxn8zj4g6z322h89sqefgztlw980w8skyceswyztfuetjezw254x6qfn2dejhtwpztz7q88xy6v0p46nymfy8yj992558cpa2uq5440ykv08njcqvrl64fzchfm2cwxlmrhjrpqh8ksntv5qtemnk86mkhv2v4ynhqutuldmpcsxu56jlmnwu5jwg4atfaepes5wza5dwrq9kanzepkyvrdvfvaqracwnw2qu4kfdyl7tw20nd8pl8gqyqqx8u2af8fhfrpw09d6elt3ld9hwh3rjnhe23ym2r7nvdm2v2kp0sz5zvgt0wx0tszvk38cp72cqy4x3gnddpwx55qhkwug2kd907ynwd3rh4c64sy3n6thevj0dwvgh5xnwlq27792fzhvs0t3r0d9qpeh74hxkfrxraymw2ddvnhne78qxdghfuz86hmr8vum0gr0kme7v5qt4awwrqwghz60qks2kel9kgzm6upm3l90ngppytct8ph9zgk6xd4rexddu5ks8t6rjp5v65suqqgfacda",
                                  "certificate1qqqsqqqqqqqqqqxxyhu3zv59rrw09w4vccq5yznvv3nw29gxw8d5z8wva4536796cslqlekjzngc399e29fnjs8ugsqsqqq0xh4xz"
                              ]
                          ],
                          [
                              "prove_ownership",
                              [
                                  "verifier1qqgqqqqqqqqqqqykzgqsqqqqqqqfvyspqqqqqqqq824qzqqqqqqqqfjuqgqqqqqqqput6qgqqqqqqqqvqqqqqqqqqqq0s5jlraklf5rvknppze2566lh8vax7kmalsrju00w7x0awt6rqptssd0rshd6zsxen90rn8a8xwqqx8le0mcm4j9gfaad3ufuz6hwf3a5rm6sd7r7ejfj5755028utp25lstvkqwgjttzdpafcyq9jptczp6yxhafc4ju4ht0df3zc35vxzs4hjgs8w30fkp9l5ufn0wae2q7xzw6uuqp8q9nvvvqdcvtk30dqpjg6hwkm6a3pc7dg0hslvffwnzsx7uyet8mrwshvxqe56gcr2sjtjv7jg8dlck2ajua8dq7z3lcpqd2m7q6famqq876gdyev3a4nzmztrld65v8wn28mqq599eg75gnerst7ng7fpxr0edynlltyh8sfkqahlvv0v772grjjsee3u7h3khg9t5krllqzry7qjvlg62scde9xax8306krqysdj68leu3u729cecpeygj8pcrnhdrhynysm9g43yjpm0pfxku6xhws3j7ku2gfaa22rgy308qqjcfv5dkwu5muvzg2d2qqryuf9vtxdcdv33q9ywp0h20djtzrc27y4zamasa3c9tsthyrnnmjp3su8yd3f6w7mheel9p3z5nspl9xwgxp6qhmy6vvh722fue0g7uzlsyd02t3l0q3274mk9h7e0n8md74f4a4az9svtnmeydp6hv4qxtck8swmuttnh552es6hz492ckvz8hr3733hmkcefq230er4c9xxjdl8kz2vmfjsqk2dkaqyhudzq7eu686lsvxtydygew6s7h5avljs8kj5sv5llpucz75ha8ht6xxc2quts7a88lw7nqufrrymnfjvcqxnp0c6zrv562phpz3kpcd4xugernxapk8z0tl9uasxtc89nq8ypprp6wmm77zqpmn6jqawfyx5vsr5mgs0hzqjnxm8lj6lny0phlh7k6dkkde9lrkxg8yxfmyfyr7e09wtl3an",
                                  "certificate1qqqsqqqqqqqqqqytm5yme3s8y079s5em2uw4d3qup4pz5482au0srf09wtn3hr9nq6cq30nhvtyne2x3l2fv747g4kqsqqqhsk5jf"
                              ]
                          ]
                      ]
                  },
                  "fee": {
                      "transition": {
                          "id": "as1r73ga6xzm4r5rnvnnn2nhfgu3zfmmx859vclkn4ehq7u596dcg8qex8n20",
                          "program": "credits.aleo",
                          "function": "fee",
                          "inputs": [
                              {
                                  "type": "record",
                                  "id": "6196176510445903513383757388788644482614557054869462892664835908638373029064field",
                                  "tag": "1641495185427593691031983541516074771772016530281686906114975275154857062434field"
                              },
                              {
                                  "type": "public",
                                  "id": "4365207545332276112163788168292189815449331983468107692534079716935050903764field",
                                  "value": "20000000u64"
                              },
                              {
                                  "type": "public",
                                  "id": "1708134973182925600764657853663542571796864345218016582485731026021880935199field",
                                  "value": "7389214081211763410146132829043295893953443452348604909859049775136414336436field"
                              }
                          ],
                          "outputs": [
                              {
                                  "type": "record",
                                  "id": "2247520296542690839919273736240181712093968714156301813959926142033565211284field",
                                  "checksum": "7846249726589056302133993043487198308959260609044077429193485665875403989403field",
                                  "value": "record1qyqsq6gfcl79ek4thsrcjvx6v73fqgd8dhqqu4y4zxkmaa3x4lxj9gcrqyxx66trwfhkxun9v35hguerqqpqzqqkpyjddrnct6h8p77qxcgjwpum0xuh4htr7r0ngywc44ll7tjnzrajetsz4z25j42jj7fualc5l0awvx5u8j0zq8ymmhk0yr2pzxrqg8cqlc0"
                              }
                          ],
                          "tpk": "6201583782897776143412596573713019742748713198700747859146678471889263874912group",
                          "tcm": "4713083468568222838194862026221584492930241185117424813454595247442891570494field"
                      },
                      "global_state_root": "ar155makynrcq5v5fp9yy66nrdsgvg5dhssungj4gyw3e0urfvtqgzqzgrrxx",
                      "proof": "proof1qqpqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqvwfgj7x8kqcq2sa8lmjjpvc2zzzvdtun4kgv8x482f7ulukndncpj0khufefc35u54w703txepaqz9dsgh69y38z9w87ga86cpksjsdad4343u9nj0z2puvrchwavhxy7rrpxgpng8hltrgag3uqr4qgqp4nq0wzkwr8t79zygetkgkyywrxrk9p84jfruegna7rw3et2ran4dn8rwjzkwxlxvlxvlee3m29rqfm9z3cuwcdt4a2hdegwgzeh9s0gt2k5fdgk5pj7ar4nuvhvf3rsc6scrp2gavquuf9wyty2rcw9cqaexq954e3d2ez5lwzaaa9mvpkumws44mnpx590ya2az8q963xv67lt4akdmt3zp3dve3ew857zx5qf6hpg52cwh07630r0a7767rkcqyu3snug4fp6f6wvlhuwcxu2h9sgtnz3pwxdxs7tqv4whkyvdjgqqf5wl7r5qv6dums045mx45urdxr852rujxp6dnc2dr2ctas2gymm9np9u8k6rdewrtl2vkcct096wqx35lxphj28s6jlg6mqrndfgrpd52myad54xm3qfhj67q3q2mamekwchzpmyquyu53wwc4n2yzhq5phdh4gte2s6mx9tumtggxwr7wmprjdup2vg05sg82l3eu7j722rmvu0my37w57ljk2eey4yuupuacqew2vuj3ku24xlfjaucfgcclmq66y9pnu2hjysztedtcvcgv0fvjzuastlca90ms968e9j435dsnqxfqgs2dgfqmpllmehccyply0de3tcxjqaflnqx9vd2w0y973dyk7a7ege0ev3x4yn68k2djj3uzzqd39wgzwnghxcl8h6dadc3cf5a42jvla3n7mc96c4jtfrw45w2zmwsm2yln5wsnl48rpfskvy59y6qaue8q5wr5k4a7k6dg2u9ej3gf9msevnndxkkfu8uv429tdcc86j8v8c4rhdq4txaex6zgul772juq0jz3gp5hc3zckwsrhjqz4z4tpl2crdjjq4h62f7yfjszcdvdtdgzy600j7k4jgn22ayw8s29sfkczqadee7pspw4hjz76lzs8zgmpgdykezccmkjvz6wlyc50pp54z7k2znpsfyy2wkcleacdrt9q54vsxllx8xk04pegaw7stddj7guwp0l9y2euqdva9u9ps747ky98khsh2epulf25flf8dqa9mx8f32ytqwaxrz8cqajpzts6lcftsxcwltud6qa46tyqtdl35egwzpagcklpnk077v0xg48yft7l9909z8qgp645r9dc8qc8tkaqecv863frpls8gxl3w89jwyzwdhyl3qq7447saqs68anmt3dfr5e5pqyhq0rnygravmlpg8xjvt6h35nhtkl0hxdmr09tnxkzskn0spfqgr34tmv7sralx3s2f5gprqx7j6rt9jumeahdg59a5gxmqcdtynxjejs5sscxra0gvyvjxf36606sqktp9sk0exkg3cecc7rakrtrt0v8vudl0anqgfkkv5fh320rh99lj7knps73lmwse4u0rwzqewm47tlcplfpfpqg8rq6am8yg8z8nujkh6k26kzksyh7nxmapay5zec3swvxtq4phqsplfgzv9dtwq49lpz2znazujqj9qrwg89ydxw7cammd4dg89n7v9syqqqqqqqqqqq8c2h482aexllh5mqm4jqvq7dcmtfhljeaedl9uhc6w0gaex9ugr9crvjjdzw0wfnvldcnmmkxc44m8swtfna0t8jh5xgsu7fn006uzc9uwezec5hu9szfhzmf45my260stcn5a7a4q8s59ehv5k83l96qzz49hnrtvkm3pqdxpnvpqrt89px5z9454rwzcj42w7ur9ujs8jqh88vcllyghyk44w8cdl40qplw4qlc3j2t6t5j8z8ez6rrf4pduq30y78zjd5rdaqncm83ae69kw9cyvdpxtpj6kttur3dkf0kzh49gysyqqqqqqqqqqqwc69wnkweyw7qht6y6ffw9zth238engtuzgjkvtn5tqzwnz408l543qq2fqty2mn89k7ax75u4pgzqwk2zz4uv9exfmfr4uzzn0l97grmlfex6gmy59e3cdwcqcuj7nmp74ka7xu5ktsmdak0nypg6khq35ktmqk3tw23ms9xs6d2uyvcyzg0zvljkv7ey0adj5jl9gxsr235qgqqqunfdmk"
                  }
              },
              "finalize": [
                  {
                      "type": "initialize_mapping",
                      "mapping_id": "1877855577443394858527267453494237881164806996810733966338537684573881159013field"
                  },
                  {
                      "type": "initialize_mapping",
                      "mapping_id": "1660485159291409120162233238147554196600104731726476748162644491124150780520field"
                  },
                  {
                      "type": "initialize_mapping",
                      "mapping_id": "2691993085158940925384213345747897241210111667012483835168855620658665108924field"
                  },
                  {
                      "type": "initialize_mapping",
                      "mapping_id": "2689905086425568049899007824405487080039995528256062039056560867233719278697field"
                  },
                  {
                      "type": "initialize_mapping",
                      "mapping_id": "6892380203023082801868278007297221696910616551239970771963494487024480052204field"
                  }
              ]
          }
      ],
      "ratifications": [
          {
              "type": "proving_reward",
              "address": "aleo15eyzwlne88ffdkfedv6rx2xpwgn842hra3m0ddnakt9kw645jv8qwu0w5c",
              "amount": 41955683
          },
          {
              "type": "proving_reward",
              "address": "aleo1jh8gqqu4rwl7ep46vjywxkwxsj43c2sz2552fqce0376rm0kasyqsmp02t",
              "amount": 9079465
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 9006081
          },
          {
              "type": "proving_reward",
              "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
              "amount": 7268844
          },
          {
              "type": "proving_reward",
              "address": "aleo10agsynxq4c4eclpwea48jult7k27uzpdmdhwsy346j4kjeu4258qtq3tjg",
              "amount": 6366405
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 5579180
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 4973459
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 4943933
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 3123036
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 2771409
          },
          {
              "type": "proving_reward",
              "address": "aleo1w6v6lqpc0qlnlvmch77xen5ncgqyaxtk8e6y0l2ds79ukpt6vg8q0yz9u7",
              "amount": 2450984
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 2366729
          },
          {
              "type": "proving_reward",
              "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
              "amount": 2052709
          },
          {
              "type": "proving_reward",
              "address": "aleo1crzupa2fft9ytxqg5xxe4udq30l57wkhdreznzs7jwhez4qzxq9sfqqup3",
              "amount": 1945070
          },
          {
              "type": "proving_reward",
              "address": "aleo1w6v6lqpc0qlnlvmch77xen5ncgqyaxtk8e6y0l2ds79ukpt6vg8q0yz9u7",
              "amount": 1814516
          },
          {
              "type": "proving_reward",
              "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
              "amount": 1486950
          },
          {
              "type": "proving_reward",
              "address": "aleo164d0sehkz0h3umefa2ugx8x8cn35alvhet2hh3jewxlj87xuz5rswnw4l5",
              "amount": 1409894
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 1316077
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 1131007
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 1108316
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 1084297
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 1041830
          },
          {
              "type": "proving_reward",
              "address": "aleo1y9fqxn2tw8ummhhfrc2ha5j34luk3lvxvpwu86tf2njfrmflxs9suvt950",
              "amount": 925412
          },
          {
              "type": "proving_reward",
              "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
              "amount": 807848
          },
          {
              "type": "proving_reward",
              "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
              "amount": 747702
          },
          {
              "type": "proving_reward",
              "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
              "amount": 741664
          },
          {
              "type": "proving_reward",
              "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
              "amount": 702725
          }
      ],
      "coinbase": {
          "partial_solutions": [
              {
                  "address": "aleo15eyzwlne88ffdkfedv6rx2xpwgn842hra3m0ddnakt9kw645jv8qwu0w5c",
                  "nonce": 6086046784013261919,
                  "commitment": "puzzle15zrxu56yv96jdz7uwsu7up22zay87rtkty4gayhv7x6nw3ahp3whahdwnklpp0r9qu55d73dul6cqrqsh7k"
              },
              {
                  "address": "aleo1jh8gqqu4rwl7ep46vjywxkwxsj43c2sz2552fqce0376rm0kasyqsmp02t",
                  "nonce": 4284598016718285564,
                  "commitment": "puzzle1xkf2e9k95dqu9welmvhnskusl7ev0hvcca70pxnp9fc4mk6cqkxmmnzddxg7tqe6dzennjeas9hqzq8644p"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 6853711977180066637,
                  "commitment": "puzzle1hjqfrezhwget2ey27udcsyk4vx283tnsw9m7uqm7svmj6wwp0vf5lfnuk04wsx2gkkkd4nswepzsqmqunxd"
              },
              {
                  "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
                  "nonce": 14740764189817279229,
                  "commitment": "puzzle10p4968yvltk5cwh6yxn2e83arffw0dej09qd20wdsg5uyhy8ne3mra44rald9pmpglxzr3a3xy2qqtclh4m"
              },
              {
                  "address": "aleo10agsynxq4c4eclpwea48jult7k27uzpdmdhwsy346j4kjeu4258qtq3tjg",
                  "nonce": 5143975649448567033,
                  "commitment": "puzzle1sepvmssc7gp0vnpn629umu2a3d5l2c2yhejcglywm2daccnxvnxusscyg4vsnqtdr0qkk2hgvy8qzckpuq4"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 6832692127545844225,
                  "commitment": "puzzle1lvy6tpxjqxy2va493mlmjg3mp9jv3y7p5ykdmgd6f03sp7ggy793p3l6w20ww2yz8e2n6eh7stxqq8jcw8r"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 2214923901339827627,
                  "commitment": "puzzle1su6p5k89tcdxucqe9t5rz2atnx8z2c8a6yvtm0dvuvmtjflqq4lpxg65ct7q9dqepv43f0ra6spcq5vgyn9"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 11759688623453161859,
                  "commitment": "puzzle1emh63pe2t3c324c038nyv9sauxc4kskv96zu2uffdutsx0mrshfksz4qlxl6km6xp40ef9camalgzhf78yf"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 9027509063493905183,
                  "commitment": "puzzle1nfx9ntq7pwmas5kxgnwngnav3ud4al2zx2935qyknp3q8hea9lc3xu2fuf7wpnja7mmyjp4khjkgqzd9axz"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 388068449771366284,
                  "commitment": "puzzle1ma3h4sakj88t8fy3s8nw7t7zk3fwasl6w57pm2gmvxluvl6zrw5y8rha4tgm8rw7k2ew22htc2vqqs43u6u"
              },
              {
                  "address": "aleo1w6v6lqpc0qlnlvmch77xen5ncgqyaxtk8e6y0l2ds79ukpt6vg8q0yz9u7",
                  "nonce": 10935717556940243688,
                  "commitment": "puzzle1pnwtdf95w4gd2gec29mw3xp4h2zntcwpsg8pd9qdsgs3t3zwg4t4e0z64sjwu3858s795tj932rcqrsnxsn"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 5215062832583883381,
                  "commitment": "puzzle1rna9uqr67vce0gr566fr69qmcl5gvswntjs3q66twj8kp8mncvmt5arad8dv5354u33t3flnv3ysz8hhxqn"
              },
              {
                  "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
                  "nonce": 5468569591373643198,
                  "commitment": "puzzle108y8qzhdrwl3caf444kyuwfwfuna86g75k363tn6ff26vqhqyq9svyuyplmuhaqxhawnzhqcctzcqveyju5"
              },
              {
                  "address": "aleo1crzupa2fft9ytxqg5xxe4udq30l57wkhdreznzs7jwhez4qzxq9sfqqup3",
                  "nonce": 6183517220933439894,
                  "commitment": "puzzle1sne82utfh6fynv090fnqhhwwczles3ygk6ahsckcxc40myjtjfqe2azer2rusxv87c632sd797tgzeqz7uc"
              },
              {
                  "address": "aleo1w6v6lqpc0qlnlvmch77xen5ncgqyaxtk8e6y0l2ds79ukpt6vg8q0yz9u7",
                  "nonce": 5639624935977224905,
                  "commitment": "puzzle1m3mjyheauxxf3wxxwzsdw0cytm9vksdr5rm7ufc554tmvchaqvfavk7rulv8krcw0ey9j3aav22cz6dduat"
              },
              {
                  "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
                  "nonce": 12491623685766712273,
                  "commitment": "puzzle1q42j37g4d0lxsj9lrt8dd7ft2md4fdfahyk2lr6nps8zpfgwdfqxvj2dh8k8ytaex2lfdsl8a2qqqknv2xl"
              },
              {
                  "address": "aleo164d0sehkz0h3umefa2ugx8x8cn35alvhet2hh3jewxlj87xuz5rswnw4l5",
                  "nonce": 9881192870927914098,
                  "commitment": "puzzle1g2yjze50qx9n3nwpq2nrymj6dcg7agjz9q6cs5nacl9mk0nfa9e5ft29jnjpm2k5dy9ng20zgeqgq7m0zn7"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 13157019233055869114,
                  "commitment": "puzzle1tjst6pfqu09lfm7sqvyl3p7dxfe8hgc2l67dmtj6s6p83lclaqndjlg2v2n58zre56g4402u8f6gzas6mp2"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 5849783536661573354,
                  "commitment": "puzzle1sv3g46gudyk04m3qgq7kluxkkcgx55qes50pq0kuy2ump37355v38w855mglfd5zfkjf3g9fjfeqq8t9dll"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 1841586471894872088,
                  "commitment": "puzzle1e359fpvl2fljzze22klt0522amdz2auvckwzkefevam3n5vddgts7urrge8g3td2taqf96dpdsqsz44mvj8"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 11921073804573311643,
                  "commitment": "puzzle1c47ej0xp95tmvkxgr3qlucdpzsv4jsdefltqctffzngkr37udrj972m5ray9sf25qcc2atkzygdgzgpctfe"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 1995531870398956611,
                  "commitment": "puzzle1ywvcartkpasv7y45l5u3xpul6kuewpkjyt3n5a46tjljts4psrlcpwwmfnq245jgzk07spj2vsnqzazahkt"
              },
              {
                  "address": "aleo1y9fqxn2tw8ummhhfrc2ha5j34luk3lvxvpwu86tf2njfrmflxs9suvt950",
                  "nonce": 5193106229371363121,
                  "commitment": "puzzle1acu558dn9uktwe7g83ejx4a5tmh74gqjctara0vt6fasvxjdh77x8qatr8zux8cpu2xmgd6hsyucqrxvjd8"
              },
              {
                  "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
                  "nonce": 7271967723976712320,
                  "commitment": "puzzle1eed9vz2rjsf5gvx3w0j8scq88svcqmr9t22axjz8j5hk62jutd8h6q6k8vaxhcn53yf03fjch64sqzmsmes"
              },
              {
                  "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
                  "nonce": 6612431816205708437,
                  "commitment": "puzzle1dm3nhxyeh9esx3hny6023pxe2w452f6p733chwfdsmrph9958774nykrq68yevmzzmjvw2sf5wjgzq0jdk6"
              },
              {
                  "address": "aleo1drsht5uzj682kahwuhctav54eltl7yuz30ltud53984wllej0czqtjugu6",
                  "nonce": 11045392763747235642,
                  "commitment": "puzzle1gwk4ye8p2hv36r8950nds5jute6yhv8w92sa6r3tak3k3xz5atggvsuuw8w6svpdtv7x7nf0zxlcqzrngk3"
              },
              {
                  "address": "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
                  "nonce": 1953445946790722792,
                  "commitment": "puzzle1vql8j38l69lfl5u9qmpk4047v4dvltajfdfp2ch0mu3r8k8a8dvgc2ddsnm0225glgs87xrh3encqwq4wf7"
              }
          ],
          "proof.w": {
              "x": "240238110132157228566736713975855380943775999419562984728779603613968685088749308183889155415955412990687213939937",
              "y": "175370029667263228486421446392891947500808611378989284039564377653511687560699231558525804698868397747460802265034",
              "infinity": false
          }
      },
      "signature": "sign1mhvy8n2ttys496gnpudmx028f9gfl72r2je489lefsap75qm7uq8ax0q0ek9uws276kf026jz2yt3x48j6leakytsfyeetze3h62qpr7rawvssddfv078wthdpqynfu3jh5qeruups7t7vyls3jxccnypxa5z55an3zwd9em29wrjxmpyymwflclchtzhr62hwthyumkge2qggpkyt4"
  }
]