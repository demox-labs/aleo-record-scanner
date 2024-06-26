// @ts-nocheck
export const Blocks = [
  {
      "block_hash": "ab1pcay2xk8vtxuag2crvawulljz75wnrx4v8sg4t5yvk5neqvcmyzsdj73sj",
      "previous_hash": "ab14npqxzf5ttl36ymr4xy7kaktxmjq0fyn2hx2yvuwsc4n6ngnhgrqkcwtt8",
      "header": {
          "previous_state_root": "5413643771612600400741827016665077769110209164396036105717767962129866876587field",
          "transactions_root": "6250389840245360933276688952257811927275694973605221321144404857819925461731field",
          "finalize_root": "2811452820725028848681966144564987891256267030873536546512330878778507182757field",
          "ratifications_root": "2347499756727239097527357730627929185508370696360031054030113664724940109165field",
          "coinbase_accumulator_point": "0field",
          "metadata": {
              "network": 3,
              "round": 1281,
              "height": 1281,
              "total_supply_in_microcredits": 1499999947610892,
              "cumulative_weight": 1090568849,
              "cumulative_proof_target": 0,
              "coinbase_target": 609129,
              "proof_target": 4759,
              "last_coinbase_target": 607415,
              "last_coinbase_timestamp": 1687392415,
              "timestamp": 1687392427
          }
      },
      "transactions": [
          {
              "status": "accepted",
              "type": "execute",
              "index": 0,
              "transaction": {
                  "type": "execute",
                  "id": "at1n4q9053q5tt6qa4vhn988zlz0m4wyywk4cel7t9nn0m22jwp5s9see9w6d",
                  "execution": {
                      "transitions": [
                          {
                              "id": "as1ucjzvuu57ufkdv9kl6garc9nkwusf660847x0unrwtghy33ch5rqv9ame3",
                              "program": "credits.aleo",
                              "function": "transfer_private_to_public",
                              "inputs": [
                                  {
                                      "type": "record",
                                      "id": "3987540096737196398623859860817756880329043866012694738953732458014053128217field",
                                      "tag": "2840121105973471271849571476903293618798544630394641729078521389964836807629field"
                                  },
                                  {
                                      "type": "public",
                                      "id": "7035806333613170389770665875932475396234204265932622759300409285095237093702field",
                                      "value": "aleo1x5wdanv68jkx7y9s7garve3kgxu0mcexnkec8jvdc67jd6g25y9qah9hyv"
                                  },
                                  {
                                      "type": "public",
                                      "id": "2324263735501766455306698657038422818690578713428237486599413955660544994158field",
                                      "value": "30000000u64"
                                  }
                              ],
                              "outputs": [
                                  {
                                      "type": "record",
                                      "id": "520388489895088744611192362061188703733640998949776063465345362482267611376field",
                                      "checksum": "5168650573191186006776127691135402477870836727120366796060163106741054518538field",
                                      "value": "record1qyqsqp0y0ufj0vhyvcy0wsw6mt47a9ezs6mqy5vf2934445hgg2l7dg0qyxx66trwfhkxun9v35hguerqqpqzqz4q2t35d7nx2wf65x6x8mt4p4r0prkzu34wcrd8fx2qwh2j5k3qtdvsdcxschchlyhne4lw4xu7skwtlaykvshtwt9uvgdh5dycgzqzv30s3l"
                                  }
                              ],
                              "finalize": [
                                  "aleo1x5wdanv68jkx7y9s7garve3kgxu0mcexnkec8jvdc67jd6g25y9qah9hyv",
                                  "30000000u64"
                              ],
                              "tpk": "7942807059679178078486068233329243437320384056112693463967665930063555379501group",
                              "tcm": "7841528696645864731781820381698983392321316723656836307170741947612752237371field"
                          }
                      ],
                      "global_state_root": "ar12hsnl9hdh9cj54twc22xr7wz9c5jumk2ukdudy6s3pl2xaye5q9sw8nufz",
                      "proof": "proof1qqpqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqqagqd3l94drhfepuv48nzrxyvtp0m7wl8vu4vuyhstwqkdur0k85k2estxq2vuhvrz6v0dga7guspl0dae6revvvndaffwrew6rt3gt3f6awpj34y3kcgluux7kvw4g47jpt9cxua9vverme95zu7ekeqqtywz7phtazl92dy645v4qhsfremnc89a6c9m7pjpyvymj5y692apekrwsgxrmslcxdv3phyp24wq2myeu0hczavzqwjt95rr9afvnrjkf3nhetwgnukp9yqcy0ezd3z8ffjk5m93fpawwcmzltceut7xq0zvp0w546gt4sp7gavr4rafqj6kcaz2qna5rcjfvyrm7r6psvyzaqjnn0cvcma9dz5vkcmcesm0squurpfhftrqjzq4xex2c23ssgkzullvf093acdcu6xnpsu7vlr6cjy3r944v20tws9rcjkam0c5msqqdszgqgr0p29h5cjv7enht593sny68ly2u85gzhg4zpv785fn9cx76mhfyvzqamknrff72fezvm27q5k7mqdv3qx3hn0a99x3ktrkzuffec5v87wu7p76c994rw5uydxtun7mcdrrqnrgp4jld7l4dvzzypq5a70c4g2grdtp6gwq42warmrj0kdewrht75sgqnrws0vk20sxhvc6w3wwcpjewnp9amu5eyfkccq489mzhxtdcrejsuqxc5ff4hfphkp0gxfts74nw7gsa2tefshlts7uqfr55x57lu5ugh3mta0yzfsq4rcrcgrtntvxjjp9hr6qvludzf2gmqucsf4y4l03tpxyu29p2xtcku29rwzlajd2flyfjqn7s7uqqw396nsam2sjcva4waw4jd5ltkr0xvtjug32phs7w4j66fzt9kfczlq0rkc5dnz7flv4ax7p6hzgqpmmr3zjej366yu6u74n0m5h08qsszvu3ffzq0zgzk33jvhmg6up5ffylkd8hlg39km2afarmuhh5quwkqhym38kzdf70ta5u06anva256fxxtmc3vk6dameyqryhvxagux7yvumgq6735du4x6ejy0q6sqshw35am8yazj9hw0glug7t2u4l734wctq2dazyqsc7v52d9ng5ng3unrwhu2h2q8dq0zeq65yl4spy87njrpccgr3nx5kva2g7z22at7jpd6vy6t5cvqmxsg3e7jfmw7whkglr4g5ga2gnc46fdq62s7qp0ue4jhe5mmlv5a0wsgnn579e5q6mdqrlttu5z802e4yzhngdfpvsptmnt5fh6fa4vhj8e8uwpc7lsz6zn3vcqqzra3xzqa0rhar7skgpqwnn72x7kfzgmqw9jkn0zef44ynh73h7l3k88hpjh8c0zs5g95z60wkqs5jsellsaxsgp7a2zhfks6g5rzugsms6p52q42hdnvgzaewenagvh45xm00kwqnv5fq2dcaac4588scz3ftg5pjjxmcpkyp9pzc342w543r855hm790753fypzc3gcd7redt6gwruztypkvcapd3dhec6sksqnr00hs9php5uswkuwm7sq8kxjpdfzeknl2qqjq9svw072ady464pp6n28xl83j3h8jn4muck80je66thvaejwhyjw2syz4f3nrw25vx69xplspek6v492zn5qmmskp33xlkqtdh6h3x50u8syqqqqqqqqqqq5t47u24vwu5z32n3f9qns5hanlk29fr02q7s6jkmaugry4hr7c8273ufmsa5n9vxxpnmv65rmw59gc32ndvps6s8hq0nruz8fq27zq2ekzmf5ahyf8mkapc0u5z26snamjx7fd5zmsr8j25e3f995xegqspcerkyz0nlhzz39wvp9yzf58aq09ea4m964nq9pqhc4gdnfu6shmthhyhgncptqzuh4urx9fhfm0p37pkzmy6scygvaetqzvjzf5gx0rhtxjru4yjx85gfchrp5szyhx6r8xvvm7ejp2gpa62gq6n6hc9syqqqqqqqqqqqpzwecg4caex6j50gp9aap3neunlfynrau8esjepr99wyt39gtdhyzykpdsshqwg9dtg656x3ug4gzqt8qwflu5yhznhpyjuau70zqhsksutvc84jaymfyjvfceeyc6cfzp97sadjlayjckekj9uzur59kel98604vjmtu3spfkdqsn6jp9j6dgq2wmh4kuxy2gjzaq264k2hdqqqqqj4uq8q"
                  },
                  "fee": {
                      "transition": {
                          "id": "as15kpryey4e2ucdgcurmu68sg0l8fkupqu5q3wu4ph0mfhc2er05xq92v2d6",
                          "program": "credits.aleo",
                          "function": "fee",
                          "inputs": [
                              {
                                  "type": "record",
                                  "id": "8179168690562708620543822082997218003226062519222099291437649929617170481926field",
                                  "tag": "422732042231859771725384025140920404587303189194225620692565229548259908007field"
                              },
                              {
                                  "type": "public",
                                  "id": "7451933758546206628284752700727351266478341942255264221146311418512411681157field",
                                  "value": "6002008u64"
                              },
                              {
                                  "type": "public",
                                  "id": "4790575472359952083449544786487576634569691581929053524799494232582043507161field",
                                  "value": "4802119944926259667659697479725357163638819328218715602114110606135507981245field"
                              }
                          ],
                          "outputs": [
                              {
                                  "type": "record",
                                  "id": "5349145691934328974912280997896070049999343642174621682378935064196660127434field",
                                  "checksum": "6218668395856896881824299618276109507176676890994590791376522879700924734149field",
                                  "value": "record1qyqspgk3d7e3df25fku3zqg09t5en46ddg6955leyyywcylt4puwdmqxqyxx66trwfhkxun9v35hguerqqpqzqpq26ctfx93shy97n66g8tramx0p05taeu70f65n9azspr33yjnzxveryf5cjmyf35ca395hqg97g0uma9zc4quzvcgpay9ztnuntcqvpzwg52"
                              }
                          ],
                          "tpk": "7584114533625721952636375906398161935643607148829928949175151471610824403341group",
                          "tcm": "4487846697023111277439764432996536300918634840414384538986931324621017364467field"
                      },
                      "global_state_root": "ar1nleu0ph9fg06rvpunxv093yskt59k4kk86pzrnxp9r8qsat9pczqafdj6y",
                      "proof": "proof1qqpqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqzxk0k5mycunyy20jmdpueu5sjyy487xdzcjv0qfk2t4n3e04vq4mmfvkpnpc6lyr3ft9a6zyxsegpe3nyu0jyk2uddn0zj86tj30cjn0lhmge677ukv0dvtxyaac8agfjh72njtjhr5zgmhelyukf0ckqqvrqakf4z2xhxjgkh4supmzgddgw6yuw2qckcal2q7d4k7ptkvf6crlgusj3997p00aq4my97zptqrhzljuzkc992rx0ffg6ll9yhw6lu5u0g4y6n6n930jk6vfn9ukws3dhy9ttf8zj9fhpjeqhce0dgq2uwfdev25aqza9d7hqtzketxh6kgz88v7gpw9qgzm9ykvvsldjvczlkuruznk7rk8j0v5a570625pdw4prw7c7xu4tlhp9dwx9acmce5j8afluqk3wqycn75p94m7sk4karg6xtqcev6mdpkvkh8jcdcqzqvsfmhtqdprkwc76w8e4e2qf6wk0fr3yd6t8v4cl4dwp343lv4rxrkwh40w740ze9t6ar2u0vly66qf4f9d9k5rkqqpdwez6tk75g6jpjr47vjrndfds5v3j254h382crfjv4tarvw5xd50pv9npz068nvqgqrkmqsqryzk72jec44758u8xeuk59yq75e4emjfqd3dk6sa4l70zem52kr29gs3zu0dkw3yx3hcq7zxu9m3vy8h484r3zgptlvuw4cftx64fn7vwrtd70xg0ewuasejc9vyptlxqjjhd5l9gpylxrrgsy6e66rtnps6vphjcc9udmlpztgtzrtrvzgptuyrndt9vrdzta4d4c7el3zw0kf35x0zl7wyp62yhqtz8mz6rsx3mp4s4vuam8stptn06xmtmm53e4chmadydqjqvt85t8fgfru530z7xzahtcutz5k3t5qp6kp4pmv2zh49xhjwxnxdleat7tysdzjds0mrs7uzvl246700dp5v7gycn4epxdjc72cufgtgq5yqldfrf09s9m7er8uh6a8k7adrw3p47dr8lg58xgf7u8gtpn2asd5669cwvv7e87jrmxp9d0s7y8rsqlqnulumg5wg8fejmcnaylrvdcc9enw8n0tgjllc0qv46dx4d00ty58agu0fwx0z4r96ju4s06seqy48twn0er9ajt2gwse4hw6g3vnwp4qzfpp7fup2krmvg5wj9zuypups7kr0u8hnky67ss48pycepqxte3mu5hdr0ap6lvj6uc6kypvcwgg6vkga28vdfzdp9ns647qmqtcd53hvv8jfscy6syy07myncfw5m9a5ltv40fq4d3z44y5zkupqd9gsyfwlkjdq0e6tp94cfcm2c3p9g726jy4ug2cty7qz70xcaxc0ccf9aq6ru3v8dxs9nad2sv2v0z5fa0nfxmyptgldm867jre8w5z7mtej92yfu3ev4mqvtynrxjs8gvcdrj2vmucwfqnf3kg0hr6tvpfzpku4h2ca56xrx6hf09dsxwu5dyreck8424uflnzxkawq5u2qqse4mju3t0p587pwdkanunaeh34av8zdsw8em6lalj9qt72n9wwqxuea7la660jk5e7s8mvl5amd3cmylrqmmk5m48ur500t0c90asqdehve3pueu63rut5y7pady0cflqqer65sg3d7mh70zw7ul5zx4y8qyqqqqqqqqqqq7edstpmr8fmqc2y6fmx3uc9qxmh8m3pzdu37z8mc4e2dw0lpy5qv3fr09hn3l63l98qxunf42ymkwcxywzhqygwzd7sk8qz75cduupz702dx3ulrurrk7pmeshf3aptwrv6cc2ztarnlv944ysttrp02prss2yq68ra8ynvdz59r5wckc9estkn32dpc3qdyg0kfqm644u4pzufcy4092zpxkgkfxg5s0dfpyrpe3tv3a373lykx4qwlud6f89gt7a9nw5f49g5yyrcdzny59pyjrfyusvcpy82hqlzjycunm7gurgpsyqqqqqqqqqqq5f93zhz9gdaw0afq037f4dzet5g5g2jtv5kxpeqs4m0fc3cwfgg33t2jysy62lh8uyrazc357qrqzqwhn0a8ywvw0upvzj794vdjlk5f62s6024863z0h7kjurszzwjjqq0v8r32yyhgnc3czew7zd54uvar3rwjmjutps5hcrs6q523rrq70hzdmtd7petcumwemp5ueyvg4qqqqqa07cg8"
                  }
              },
              "finalize": [
                  {
                      "type": "update_key_value",
                      "mapping_id": "5546139348888255231149719935987882707985111216382074889290277013866389948708field",
                      "index": 1,
                      "key_id": "452472027313254607720670787780076688320444521393665791743503582289680559862field",
                      "value_id": "799534246656601839550418628268894396380239773510887077116756969413724260537field"
                  }
              ]
          }
      ],
      "ratifications": [],
      "signature": "sign1wddr6j3lz5gjkcykum83w6wypjdcfc678vzkfcdlss0wcpnpxsqwt30v3j69qnshstaaaps953tpafe8yp7054lc3kwsvc2vt6kxxpr7rawvssddfv078wthdpqynfu3jh5qeruups7t7vyls3jxccnypxa5z55an3zwd9em29wrjxmpyymwflclchtzhr62hwthyumkge2qg7rsjr3"
  }
];