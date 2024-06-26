export const Blocks = [
  {
      "block_hash": "ab136zk8nx2u22tueknxu446hxx9mlswgpg8yyalmmrvvksk0k8xgxs832wju",
      "previous_hash": "ab1a9x7geg830uzmvrfyy3ef99uenyyl6svxvzye5maq6qg0gdhnvqq7a9v6s",
      "header": {
          "previous_state_root": "7268558304168173452958226632639227978783939417831847925810532949563429541046field",
          "transactions_root": "4451594868655470836480918184723377168245709075738138533147061629778190902089field",
          "finalize_root": "0field",
          "coinbase_accumulator_point": "0field",
          "metadata": {
              "network": 3,
              "round": 149128,
              "height": 149128,
              "total_supply_in_microcredits": 1499794572238545,
              "cumulative_weight": 358378823029566,
              "coinbase_target": 1885416783,
              "proof_target": 14729819,
              "last_coinbase_target": 1881340393,
              "last_coinbase_timestamp": 1685658951,
              "timestamp": 1685658966
          }
      },
      "transactions": [
          {
              "status": "accepted",
              "type": "execute",
              "index": 0,
              "transaction": {
                  "type": "execute",
                  "id": "at1fzzekwt32x6u28n7upp0hkaftdwjm8m8ut7vl3tqdx5wkcc395ps3gaj3z",
                  "execution": {
                      "transitions": [
                          {
                              "id": "as1l8ct8pqfl5k7su579l7y4s936rad3j6tp45c9c969rcdmnxmz5pswl7xkm",
                              "program": "credits.aleo",
                              "function": "mint",
                              "inputs": [
                                  {
                                      "type": "public",
                                      "id": "4221381721857638326375847949851074339468444349437310653123954753339271865039field",
                                      "value": "aleo1q6qstg8q8shwqf5m6q5fcenuwsdqsvp4hhsgfnx5chzjm3secyzqt9mxm8"
                                  },
                                  {
                                      "type": "public",
                                      "id": "4283461509807571788628709007603808307696649141135181855819507190029081397651field",
                                      "value": "1u64"
                                  }
                              ],
                              "outputs": [
                                  {
                                      "type": "record",
                                      "id": "4448229766782298886665889271926333024870366850281714862492463648797433524632field",
                                      "checksum": "1703027411785971052988139539492199298260810953377809897708960196069436569108field",
                                      "value": "record1qyqsqzxhafz2meww9v0ele8p6jlv3w52he4ktfvp0kfgslq99c6sg7sxqyxx66trwfhkxun9v35hguerqqpqzq85yltpy5tyxh39vj9czgttxe4f9e8unlfuq25xlyqnvp6dyf94qpjuncrz5dm8gcawzqetcgltzf7qt4yznyhlcedjsn9fzk877jrq7vmk24x"
                                  }
                              ],
                              "proof": "proof1qqqsqqqqqqqqqqqpqqqqqqqqqqqt7z3vm8f0uhy9ykvzv60kk9kyu2wes6e7v9hdmtal7yjq8ufxqpmd773unsa0fg02m9ehvyslwpqpt7vt9azlgk0xdzxpg4vsnmenndp4mdfm3gntayejnay98xyxrp33q7fmuepdkavx48rp0paclcrqzkxucm580pzjvtuhm42qkt4rmw7y9fpa6exhhnu6kvsqx0t6zg0d9nrk800u62l8v2lkjk5g3rr5sqqnsrtkwsm7z6jhjzyd275va72lqtxd3qv5wy537jvzc0lzwn6xz56gvxk8zuchgwpr4terutly7gqq3sjznykr9akx49slefqf30lj9vlu570tu565gh3xjs4gfr8rxrfl8n4559uyn4zxyvdjzw3l6q2qrzvj66xepkkkyftj6246yx7u2uvu7e4nel555qe4l8ulgdlralm7mnuc84uhsmheq2f0mnyc0uccs9zusec98v0m0nl89d6sqf82984hlfphjcg5m8gzw7rh7ugww80zhdxy67dqcccrzgwskdxhrphslqx4u5zwrlv48zhjdh2ccmvu76c0duhd7wdzvwx7hz9fth28tzqj7rq68md4wyrmtveavx2a423yxgqtsdfahe3m5kqmve5z3tkfa2skxmmslpckmjth63mfu0zrxl4fgkh799xpk0m2a42hwt9jtkk502vqmt4gg9m6srtc37qy0386ew5tnsf02hzyjxhq43eu9s52juuxywrrtyjmzxrh7urhp59ns648wugszyypp7x5h2fu5r269xrt6jllpgdhh0gkeztscpz99l90046ywzsv9nn987jl4tx7z2qza4ahm76wzpp00h3z75ul3fduscvkfm6klvrusj56wacwmc3jjnfg7tdnqxgxqw4lmen6nfhq9mhf4cvm63lkxpgswg9v3jrm2ma86hrjadq4sqxa9le3vfxxya66c705gnxfzxyep8pfnck3awcez6zqynk0clc4tpt0pjrjzfwygc7ajpzrwxg2vslskqgqqqqqqqqqqpzw8cg52jf5l2ufff50gm3qkuxxk7lzcmrxhvwu6ru93fkpm60q6cfrrp2akgf2strr68n3vskg7ds38qeavrk9c6l7zf54makfgygpp0w38ehf47ru8tf4p228jswdcqpveww0utnjamfkex43kgs4lqgqyqqqqqqqqqqqwgl5pa9pr5u5gtctme8tefsnsyh2vhha9tezjv45ja7pt4vtrqnsmfx9ymna6hlfdcpk3x09wpfsqq2hc8uukwq4zakrec34y98g6se63q50gv8qze8nzzwfltw9r0xgp7rrpu8ke6cuw9jv74cj79nr45tlrunwaxnsg0ysjtfudsua96953c8a34xg3ksgk3cxztmenu7shqgqqq7ryze9",
                              "tpk": "437287996097036853341925331733597237817973633562195237186179818186630276774group",
                              "tcm": "447578309449699613920216425611275537866779909295673504208888399438930109084field"
                          }
                      ],
                      "global_state_root": "ar1km209az042enqp088gmn28ka37gfr4z5l7an0amum5a6lv7mzygqsm8e9q"
                  }
              },
              "finalize": [] as any[]
          }
      ],
      "signature": "sign1tm79c2s2x9un2tfjtumlez5jeqqcxpea5h947qm0dcyfw23w5sparwa76xpphkwwqgwzy6nwfjgj0w833skmgamjhayu9k776vx95qt7rawvssddfv078wthdpqynfu3jh5qeruups7t7vyls3jxccnypxa5z55an3zwd9em29wrjxmpyymwflclchtzhr62hwthyumkge2qgs3232t"
  },
  {
      "block_hash": "ab12pe9ep0n8suam94t7pm5nes50tt8fxhq9zuh7un679z43c49syzs2cls0x",
      "previous_hash": "ab136zk8nx2u22tueknxu446hxx9mlswgpg8yyalmmrvvksk0k8xgxs832wju",
      "header": {
          "previous_state_root": "2096537988988384535122854005442267492349420395913656369443599822572501068319field",
          "transactions_root": "8221756580514444057524289009352486701598791799572806541388973714960011265474field",
          "finalize_root": "0field",
          "coinbase_accumulator_point": "0field",
          "metadata": {
              "network": 3,
              "round": 149129,
              "height": 149129,
              "total_supply_in_microcredits": 1499794572213545,
              "cumulative_weight": 358378823029566,
              "coinbase_target": 1880550951,
              "proof_target": 14691805,
              "last_coinbase_target": 1881340393,
              "last_coinbase_timestamp": 1685658951,
              "timestamp": 1685658978
          }
      },
      "transactions": [
          {
              "status": "rejected",
              "type": "execute",
              "index": 0,
              "transaction": {
                  "type": "fee",
                  "id": "at1hhct32vhzrga66jng05pee7alkwma82djcl7ezustrp5x86xevpsth6xz4",
                  "fee": {
                      "transition": {
                          "id": "as15zvna3xcsv8hdqf8xx44ln3lvzl7f73ef2vg7wkp6jjg98qe6v9snnju04",
                          "program": "credits.aleo",
                          "function": "fee",
                          "inputs": [
                              {
                                  "type": "record",
                                  "id": "7919237659380151931566215290038330648635986320978170733575605518162164379317field",
                                  "tag": "7666089938931794662289877201187550646418818009416807508977640307700854541846field"
                              },
                              {
                                  "type": "public",
                                  "id": "4933856481033371692230307811540584280716945092498041873858941465695253150508field",
                                  "value": "25000u64"
                              }
                          ],
                          "outputs": [
                              {
                                  "type": "record",
                                  "id": "6610946929998283427719304265105038728503475689274843442355291885789464225244field",
                                  "checksum": "4633371627932954571181364986364414682099613562021289184841070953198006083805field",
                                  "value": "record1qyqspxq65a73npzmcxkh40m5je5lnfrefu7w47cy8p672njp5vd4l9gjqyxx66trwfhkxun9v35hguerqqpqzq9892uppfzm8z0ndrkmpa98qk8380jucz2y6h9ywdgwz0rreffup4rm32q9szcwaxh2f5wkq760gg0rhczr3rxf3ymfva0kak29h7w3qkdkkpn"
                              }
                          ],
                          "proof": "proof1qqqsqqqqqqqqqqqpqqqqqqqqqqq9afpzhut7gyqzv775wgv8clfqewzn94lfwqwqltpxdn7s6f3dy6vc7vwl643395eqqgdfywr9exuqkl7jmzyujxgq27awfa6fnz4z8dcpzarutqjy9t22lvlzqnw94mp9u2mq9n9e3yh2x632dxj0ta5qzut3hus6qrz4ell99u8dv5l7h2wquyw4mqmvsww7p5d7t37t55e7znjvz9eczyp3262arv9dlxw6sqq7p4she3kxmqleawtp05jjpgtvuksmefqxrfx9vz4avkgmum8p0qjaaqc4n7rfdryw54cs8fgmequqnptmmqvdeevpwj9hhguvhe7g9gpxmvktuky7wymah0qhnxqm5u4xtu2y3fc6daz725vj622avv4sp2lkn3fn8u97u8h466npap5d2c4feultfsfeu9rrtugruz06y0myxzyauv0467em0yv2qg4ngaefszeaxkl3vg07aapr2q98kwv72hnh202zy7w9jh55396fn78ec6lpk5h5xeqfzyntzvxm5c3q4gyyhqynymf2wj2rp75s3mva8v2kwfumjn9mvghttz7pqc45yahk6cpmvzxxz2qg8uuz0uuzhye8u2fzguqks7q6jzg7nllthd8zuufv54rvse3drxtn20ujnhvya4uhkejjthxxa92dsvvnz440n0g4nxapndgqutfssnuqv88lnz4kcz2zemk2uls2ax30l5cnqumenm9ftx3dje0pqey2d00rw2g94lg85spw8d3gq5ffdk44ghm5rm2fltlhafqy4wc7qmmpeyygzq44n2z0ncu93zc0tcjjyuf72c5q5tpvh5adn45y9mwleupqt5f0x40fpfz0p8anpcq6vqxhzw7dtt6hsxgel7m5mlu7ryaclu0uhhygqntqdxxfej4pcqpw4xla04dehpl32l5z6j25w4dcc5kaual6s49x4vucfjqyxrjxqzeegh27q4yppphs754mulg0jjhjr6xx8r2tjvm4rytyz0z98hwssqgqqqqqqqqqqrevcvmf9fx4nhuh9wk5rkudlt3tdd9wcet0nn25lrwupzchzrfq45yr02n9n3efsxrq9gufzp4ms5exykkjmrflklfmzztxj0lre5c073xr4jlzcdxay3glh62rrkmj93s43vekt7ud436yauwsd0slg5gqyqqqqqqqqqqqxf4lfttcljk5naxtgwpr6rd8wlw99hcyz0l7k6536es2xp7ahztuylqlfh5294ptjjldrnt52kzqzqw4rfdd2a2ck0052u37ds3759mgfavx0vqxuy6r5gx0823s75saqpmrtez37tedcepk5gyyx59g9ptymts2ghvdzd3uull2w05jdds3zrt5vll9ksugxz5eaxy2y40ntqqqqq92nyvw",
                          "tpk": "3601631659751827453909298629451691045978272709210803139118881642627634891585group",
                          "tcm": "585943324916288961999299778161449504316644143770837740107937724989378683870field"
                      },
                      "global_state_root": "ar132a8u6yly2rnh24yuyu79y3q7w0w6hv606fq7r5c5g3yvmkyysqsmsc9aq",
                      "inclusion": "proof1qqqsqqqqqqqqqqqpqqqqqqqqqqqpqzv64l9xupv23wcdlzzgd46kwxzn2cws0hf9wkyxqahz6ww8qh2suwylxrmp280k24yuncnncaupnh3kq45jprtz3h7vmq2ju4pacge5f9np37rs09zl3y5fpz7jn4p3txfx09pcmkmp2s0gwrg8f4tqpmwq7t978hwxf67qs0a528wc5pgl4rclcfmat8e5fwzj3248emppw6wp9k7psxkajqnzz09fweu2qyq6d3pcfs7aqfsl8pk3g5shqtatpt6m0l8fev447rer07qkry6axp4cuu9h0jc4yph3nu7mcl8jqpsqw0g7fzjgj2rdynzzf04slj2jjfxgwvuy5gh7z3e0hlrcypxpumacz09p5c95l205tgl435n75ufsrw5h2wzuac4r8p3tg2ghjynywhacx3x3e3cssk4yy0emau9hyr9jwaxska84lvk4rd4cmxhk3py6qrz47vr6c2hdzx0tcapzk54vmawe4sxf3mjuxd39wt3vnxeawz32zthsr9hnchz8stj7senjs6jglqw0m5jzdan4cz7q0q5zd7pykpj9z0ssjckclp4grsza7ceq4f2aya9yzgumtu33jpfdrvxqqny3hsqrf8k7mvk94592ur5ww02d862ulc7rau54s9l3wxptvhvavt59dny7z976gau6cv0qxj8awewkkpvq06s2d6jrwuw0le207jflpqtg04aajc7fwewpefpxcly3ad607ytg23pkf9t2n70w7wce9aa93ujgrz0vrlds5yy7u7v80pxews90tztvm8hglm0u5lq55zrn4tjhhecvz0yq3az5xhmy2yjjep65mp3a6d92tw52metyjezlhs63f8ew9ggpfxcc8as6p22vucsfjyygs8h4frgpgkn2s2ntmkndh4gt3dzdcpu0nxxmkmc7qz93nzmcr9cscjl5rayl4ajufkk8uf9uqdngusg8p0z6ev7alnav65dzznf9x576uxcsr92uhtquzgeg036jdej9345q5qgqqqqqqqqqqqqsvhtq9dkcl5unp9tjjcyznajsp3k9mf7gxqvpdn9exmpw59j3pnmra8rlma74w9gwhnpa89rhukt5crp0hg7r59rxz3fkytm5eagwj62qmnwjcejmfy2fnjaj23sjntz7k0e6jz74s4gjjlv4vt73lsgsyqqqqqqqqqqq6jnkult4d2ulm0wsea7alxhl4y0mrgxlpgkj3hrey8xwfpw52dtmrm95smvhpnak0dsl3paucrtcqqgmjxhh4as2ft0lzrxvszhs84q2hjjf4htmx2rrqtfezj3h5zmmqm9803nltm5fc2vxhhnmu9nww7s5na63g9q6elyp56pq9a5zv50ngavpq6z57cf94jgs46gz9ltvtqqqqqdhflu3"
                  }
              },
              "rejected": {
                  "transitions": [
                      {
                          "id": "as1myv9eg8a6ve2626r2dhns768y975h4rezawy9k35gjhl9nqykq9qwpd6hp",
                          "program": "zkETH_testing.aleo",
                          "function": "cross_public",
                          "inputs": [
                              {
                                  "type": "public",
                                  "id": "2505295647820341781348198143106482683353425961228709204978644491450559494419field",
                                  "value": "2u32"
                              },
                              {
                                  "type": "public",
                                  "id": "7861840133296630087955802208890286481191515690907846980342761632785006793849field",
                                  "value": "{\n  a0: 1u32,\n  a1: 2u32,\n  a2: 1u32,\n  a3: 1u32,\n  a4: 1u32\n}"
                              },
                              {
                                  "type": "public",
                                  "id": "5180933929296127377108707975596759206912678681227802512321897542047418732833field",
                                  "value": "{\n  a0: 1u32,\n  a1: 2u32,\n  a2: 1u32,\n  a3: 1u32,\n  a4: 1u32\n}"
                              },
                              {
                                  "type": "public",
                                  "id": "436388847392021964023469889549543176772793106803323994966062767201753138494field",
                                  "value": "3u128"
                              },
                              {
                                  "type": "public",
                                  "id": "6623099291588883375909862516650374434661425703692406292431311329515156353748field",
                                  "value": "1u128"
                              }
                          ],
                          "outputs": [] as any[],
                          "finalize": [
                              "2u32",
                              "aleo1kf3dgrz9lqyklz8kqfy0hpxxyt78qfuzshuhccl02a5x43x6nqpsaapqru",
                              "3u128",
                              "1u128"
                          ],
                          "proof": "proof1qqqsqqqqqqqqqqqpqqqqqqqqqqqxzagzk98fmwc6stwn8l5qc6mmpugy8y9cx4u7s8ptlgcg995300usea63usw3uxrfnls792l3xgypawka0e3w34u8d88jtuzaaj8sncvhsrdllk06atk2mhqhzvulzz6qm20fzfafqtpf8u67vdsvuwcgpn5p646cy3kplq2ml82vx6a2anzgv7hgz2wy2qy6rmt7h0zu4n9uwrykkup033mmtgxurulnzmsesqqn8khahemyeqnyvy9f5rsr6tcpx8wvq65cxuj602qk308mz20lp05psaegzsqhjkcx0pr5gm2f4zuqlyupgjzqcaf2l59l00u4us4lva6wnkcwfclvy28wd26xczh45tkphy7fk7am7x45xyz4dfvj69rsqejlvla8vkn44g5meyygmlxmzv7mxhn44y9zlcftxhr35sseee79c6mwuw3q7vktzngtt5pwcp09qqxq279xxznavpdtxfelwnge8aa9lk9dv9v4wvsw37tq88xa0d3sq26m2ny9pyp5hcqswptpry9vgqxk2k24dx75fj5ee3c7xcgnjar6y67j9szywd2s9u0xhdsqtr38knmlh2uw3c34tck895zph2wm5xqdjnj4pj232ngs6pcqfcarhklf5var6uehjpmp3su605z697az78w3mwh74tmyfn6d2s248lah5e5qdp8d70tf4kshe62xfjm4vwefuzjusw45cr9qt7juh82x2xdp6ynzpqr4zgnyq890ztqdqm7y4ajsrwf4c9je8wm6ee5kq8qse2juzf68ylkw48f0ns6kmhlxl00d49gyzr9twfchw24wzkc5mr6jc3eumrazpgc5ww983dwrfk2kxdhuv5y464ekkl42us5epjhfc6w20q35h33vhej6zflju23ydeq357zrgz2qaky6mhde6kmgtdm8wt6lzldpax05dvqxljkpjjzt3aqj35twq9d5j0u8kx0zhfxsxygtkxc859xu2fky6crxr9vu8kaehqmunekskqgqqqqqqqqqqrzu3tvjzn8hr9qy0v44qxt3mn9wufed0d4wa5z04v89cm0ynassysaw74833hqnc7gq48t54rwdqp57f3stwj6frcp04qt2p42sj8czy2y0fa3tu67nl80pmwy0am8qn87w552rajrkhf6a0e5tgapc7yzsyqqqqqqqqqqqylnv0lfqm2gd2hzn62ynaxu94kwlmj52vegprzxum5mtgxs6tsazldmaysf66khls2y3tymgz2vqzqv56jk5duuull2zfmn4n92td9pjtld8ep5wu25yhq5z594deejqqpuf5ujahmn3fffctrwjtcg74k98k2mgvwpejm0p36vc60qrgeu6axwarcjtzvrf73uf6kn9qv4apqqqqqs33urh",
                          "tpk": "2570974829821002484234507695566302627444807236254408847097075914385167593094group",
                          "tcm": "891544070496540459307177563639960864721718193808531182838314962992992074894field"
                      }
                  ],
                  "global_state_root": "ar132a8u6yly2rnh24yuyu79y3q7w0w6hv606fq7r5c5g3yvmkyysqsmsc9aq"
              }
          }
      ],
      "signature": "sign1fzhnpxmlhrjhpzhmnpge5utrpksq3r74fzlj05rzu2yspf0z4cprazzjdpn2xuf8w7ey7r6jtnwyk4ax49jt5gx72e80rp7rduglwqt7rawvssddfv078wthdpqynfu3jh5qeruups7t7vyls3jxccnypxa5z55an3zwd9em29wrjxmpyymwflclchtzhr62hwthyumkge2qgtas5hf"
  }
]