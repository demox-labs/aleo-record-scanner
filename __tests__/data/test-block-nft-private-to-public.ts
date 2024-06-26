//@ts-nocheck
export const Blocks = [{
    "block_hash": "ab1x5vl43cq2r4k77w44max5k95040epj7vdhqm8pnqqtxsspxpdsqsjjm25v",
    "previous_hash": "ab1zzavqkzqq8c06vjwvajad6m64kw4mw34xmhyvzygpe3vh45ftvrsez34q3",
    "header": {
        "previous_state_root": "sr157w20sj6m96yws5up7ssx9k3mrfdw69erfxjwzfrcg49seukkcqse0jdyd",
        "transactions_root": "6466932568383776075138823279808590990416004340489015810765478668611976347399field",
        "finalize_root": "1479393281076402473932795598708482998319730810030913483887997375436301214355field",
        "ratifications_root": "4920167005791053664988114969162916138321973158337852442752049170911907638374field",
        "solutions_root": "532837564393498865657273598996870356530659329722979479938052133072988144253field",
        "subdag_root": "5937240256052000568971264934797552312906133117545790980898371418361508981177field",
        "metadata": {
            "network": 3,
            "round": 2335940,
            "height": 1120317,
            "cumulative_weight": 1646660347398359,
            "cumulative_proof_target": 454078294,
            "coinbase_target": 4294967295,
            "proof_target": 33554432,
            "last_coinbase_target": 4294967295,
            "last_coinbase_timestamp": 1704500056,
            "timestamp": 1704500102
        }
    },
    "transactions": [
        {
            "status": "accepted",
            "type": "execute",
            "index": 0,
            "transaction": {
                "type": "execute",
                "id": "at1tw44welffna06d0tnc49yjh6ancjvnn74fvmtk5efhy5uc930y9qyl2fhz",
                "execution": {
                    "transitions": [
                        {
                            "id": "au1jz8ajt8cg96acnjd6vtw3079y3lrwr87hwhgh6cp97jyvs5v5uxs5rak3a",
                            "program": "privacy_pride_nft_test13.aleo",
                            "function": "convert_private_to_public",
                            "inputs": [
                                {
                                    "type": "record",
                                    "id": "7604649788738200894880960608559061110623293776717953769338196798375956645146field",
                                    "tag": "7130053712334141325597632808539194332440594275782718599060748000463544020001field"
                                }
                            ],
                            "outputs": [
                                {
                                    "type": "future",
                                    "id": "2792294136561085912355227516613004747867916963497597112579866299733325555313field",
                                    "value": "{\n  program_id: privacy_pride_nft_test13.aleo,\n  function_name: convert_private_to_public,\n  arguments: [\n    aleo1kf3dgrz9lqyklz8kqfy0hpxxyt78qfuzshuhccl02a5x43x6nqpsaapqru,\n    839173193555727319557840248991322390374827080280522862216840994896302905382field\n  ]\n}"
                                }
                            ],
                            "tpk": "668189710869312786157434153819628387795648215100182754963902125249223991840group",
                            "tcm": "5321256238288803725674832352397672397278152525192366239548862444304752621358field"
                        }
                    ],
                    "global_state_root": "sr1ssq7hjvzdu5xkanwyytq5pcemh3mr2qcjtp8xyn5pf20pgkllcpq40fr2m",
                    "proof": "proof1qypqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqq40hjwrpjqzyfhmrpsta2xzq2k4g4pnu5m7efac4tpl5wmn2yt7mnh2jyekgwx5x48qwrd2j75khgqjgpxaqdahgnjdqrmktsqq4t7qrxw03cmd4h942y5v6tvr3zkfspkpted6d2f5ku7n7lqruerygtsqquz9uecp5c4q62aytynj36ynau49f0w9q450y29t0ze5tt387f3kpls2zdtakeq07kanlxwqrttfsqh3l933yxx5q70gak446mupkzn0s6jxwtyll3tgapf0w2x7lfunapqnd0t2kj5623xx3228wwxy4qzgnr9ugtenj6xnaa6axz2v5h8menqwmakqvmpjpjdl26cz0js8lhaawqprx7r9merp323zgks3gnszekqg9h69709r9ysrwtezhmxq8v6220c6kxplznl5t90g75xy7lt0z98ucufmlhmfr46w388ussdqzgygtu4e73a6qrxf2y2p5gwsg5cnjg8ct6jd8kx5wlwmhfgwm78r6564trpqwfvw9fuzyays9gqsqgrda0nyhd052ywracrcefwc3e5l6t8n573vhgtef85p5lfhnr05u3gecrvajzj8n56sd4yd3zl45qdln9zrf9v06pa59jclnl3c6vxtwf2e6nmcezrn9hc00zjdyv99u90gkuvx7st7zg74ccr0zcq9cgp4zwc84gxph3zzwtun4xxgfzke24pfwc0r5c2ft342n74a2v2tsy7ygza2anpy0zku3z0rrctr3nspl9zkvasx3c6aatr85ft85kg98c8sgxv6p7tl3wwvfy8tyv06cqrqgd44apvncuxjqq5yllt263mqy6ysv20d6q53sxvngg9jnwn5r3rz4al0mnghddua8n3py0558qp3tchy3vx6m96rvt705h9kdgz5qmxptcl5pw3sqvhm2qupstuhm4j8pkfhrs9v7xz67xr7dacf6fxprfy4h8vc24g0rfspm52hhqmsvq6j9d4e3t4978c6xtdkxtlv7u6d72zjvz476scqzzz64k7zxyqczhxdzhjzks0kkcmkygrlqae3wwltrrrlgtv52ws5f6n7rhdglwkz6jv8ngugj8d7sp6amsxy8upa58z503t09cvec633jjk8xx2w55pmyv5wsalpjpwl4a2dg9maqc8gwn733amx06tm8t2e5wfmdndqaq7w8sh0e633mdmlgj4rnfd977yplf23uw85dw594aswar6yn8mag2euh8th4c2dygrnnpx8tafvte6qgfhe9m0750yeqx2hzemsqulszzhdh69v0pdk6uyqt4ccqrewwf6fxw75tds5xj3ugzq8vdvvnzkq5e5qzesz60d44sg7mhph4jcsc7gkxjklhh374rt8s3zpckvpr6qjjz9mfemt5yhfk7xnnsuxwqumfpa4nued0l5yz57xxp27m52g7qu25wuq0lx237gh7uwp0l5jxhczhx7evsueqqr83ws8xczvx699czwnal50fvynzpgpsesumalufyrjyrqnc9xhhkmxz2lev7h4x6p5ft5k8z92d2yuzw7f0gz706gnkux8kw3wknxspklwd2zv5se9tfqr3rck4dfx56lvltu9xyzmsrzrz0e04jxclupl59gpej2p0l8zefqfnj9sckxltx2ltkf8g04uq4nu7jl6hkhac0c50zxpf006m7lvtpqn3lq056p42l2yruvt5827cqgnjuxdhflg6l8uly9px0hpzpatgg37yuugtcfn4nm3g9l8mepre38rejjllednh5vvf73aa95an9qcgtfa379za88fv3gfe5nmvc9kwhsfh3y9rd6y7nm25l7za6un3wsz5utgypr996w008320z35nwvzv5fqhaw8vh44nul7zzz4sgg43cp2chwenk6q7qe3uuk6wnzhwev2jcr4pvzyr0y8fq5mf6hhxwmsyqcqcqqqqqqqqqqpat5l7fyh80fkctcep3lxheww2m4n0tu9289v06vt5tu7tpwu2jl4lsenzgnh3kkj8x6ff572pfpqqqcpka20lkwsy87lg4ql9uy7g7ezmpm8dzua7vzugptf323ne7j70q5jfcknxsqg4wtghe70d4w29czqd4qgchpwp9a33sam403hm996877g2kh9d3ttn4fde4z6e3a0xupgc5hd2ygsy4prhcrys75jfhj7nqpllgljyepkazncgaxpghxmjmfmzc8655ft8jzarlqqjuvey8sqqqd8r7sj"
                },
                "fee": {
                    "transition": {
                        "id": "au1s64z44d5hd8thw96e0s880e8tqg5y64semd0kufr0n0jqtzkmvyqp9nml7",
                        "program": "credits.aleo",
                        "function": "fee_private",
                        "inputs": [
                            {
                                "type": "record",
                                "id": "1025112906735623611035229655908327651886907268286979824254647177541407463932field",
                                "tag": "7384976683585477266882185361051861072204451729727770612613758599191557404264field"
                            },
                            {
                                "type": "public",
                                "id": "4434398838988235934008029246325119083208407604925817928301251165718771959805field",
                                "value": "1600000u64"
                            },
                            {
                                "type": "public",
                                "id": "7329652191989792227564965102884121610857907089634567807110508546995382404433field",
                                "value": "0u64"
                            },
                            {
                                "type": "public",
                                "id": "1031392924235313235458613131682580937337771254008202591054874208764422941494field",
                                "value": "2963779188052081465504960692591166279964551117368442341389501968546524109400field"
                            }
                        ],
                        "outputs": [
                            {
                                "type": "record",
                                "id": "1975956149355475380792005693630127453454517837048166414756857575084318873555field",
                                "checksum": "8321369981589458342515484178237369981512335334589503190771193746598030680130field",
                                "value": "record1qyqsqjv46npjnm5qhgqyyrg07q9ml6kqmcwn7enpvg5u7tdg259l2ws2qyxx66trwfhkxun9v35hguerqqpqzqx34pnqxmjcuet4nqhrwwtvhkq78n4g2qgyruh70vmw8xnmcldpp59rett68ndz5mxd4mkzu0kruapkk835v0wcjv9dj59089jqrtnqyu8f30s"
                            }
                        ],
                        "tpk": "5807490411299444873996834985437499451766663833155858557732273963224088413055group",
                        "tcm": "6877593382074827203464839244519351114753799759438311050600525810962648752709field"
                    },
                    "global_state_root": "sr1gcf2c9yn9y7pruz4r8xx8yn8wsdemdg89lqm4hx3yzhwzajtcqyqp7y7mc",
                    "proof": "proof1qypqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqh3wf5hjy59rtpc4v6y7azen7myraw0lvs7z4cv8d9m26rxpfqyfm0zjpsr8qtd0zztdddegvjezgzl86ea55l4wlz6p7sg36drucdgkw7jrz2qamkkjh7r05lga8hscgrpsccwyw62lv4safk28xdrqusqq7kpwpp037uyqw9kvqzq8p4jl4c50rx65x78avrnp0tgxwjdeeealjrxramt5cpg232h0t8hjz5ncpf4vrqhm60qqqd879k0lzypxz5sl05yfyqjt4pkluy3fyyc8gzva8hee38f3ssyhaf4lapfvyxl0sqdqsxx00l7z45r37j6nu24vja6z0tq3wvswcyaurtqtfuy2qqapuqlv3xnn2nrc4qhyc9tz693fcqrj79walu5wn4x7xmfctz2xwltph8ncy63x23s6yarw89udpe4hr6k7rqf990pfjpp3uq2prshy64qwk8eaxunuqjnvk2nllu5pvq8q4tdwkwexpp9hfq0d8aerdc5xhaw94xkl0h6vzmfv0z0qrven33zqgwvf6jtdvs2kevdf7q9wvl98v8xtzw8at9yxgknhnyp66pqg0wq73nhkl3dlw9qa348lhune68zqqe7jruj5yq3cge2kvmjgusclmwd50zazuhw5dv8xrpzp4570tkqhurn8px8e73hap8mu9dhlnhuzqzqv23qfky363m3mdjc2m9er5dj6nhtm0fcudh5ey5a43mm9kahfq6n8htuzc8ehgudgzus4dk84esrrmgm7j4fruzxzwkdfdexu5rtlpphnw0fp83mpq44pxa5u4j0ulm9m2xqkahge5u02mjjl9ftvx7qzalxt5zh6hqnrz26vfsu97s5r9re2lr2zdr6sugp6qyzw8fph9hgnj057mrdw8axvdj95jjgyyrvq77dkkkdgmpjy6zk7mk8j9zy3aacgqdpaa7j6qhwwd6g2mcq9tf75mkc8n9d77xtl9dv45gvjdc9cpdj0lv343hscamqgft2jld58yqeavpjxceyah9wyqh9892ygvvgq3cn88j8xk256a9s0xyu8qaexhz2wx2h99jq4lmaxjdsw03tewyzvnpaa7fwjhhdn5lj868400ns25ep4amyhtqlaj632c8k0vzy6nzpdhk55dg5h4nta2gxhd32erkz8tlmxq6vm2n8ctr0kd952s2v7s483azcm834xmmkjkk6dj58t3gqeshxjhyywqvaq2mlguflefavczueu7tm2u2zf96za8kksn9c8ruhegcejxv7avdfge0xhec4yr2cxypelgtl66h4t8pgqsh28pjgtzasll8gu74mqd0n76r62syntcwr730w0yx03f27v3et309qlpfpg4tlqa8slwqdtxwazaaap3ryydqjqvcl4xkmzlwvjwx4assytltg7dm2n9h4g0p9xpfkl7vl5y6ydssg8kdz34wkjplxu4ht4uywjx94uqvgd0sl8vxnczpqcglfs7pzs2zjszktag90akrap4yze32eyw97zfcy2y6rtfmh8e2u7z0kfwuc92d7tegwmdnpnwmzpp0pzcfyqlcx90n70hdacugz38lj6ggmljgq8h522malnkfw6seucm4cyv884vnwelchpt0avqqveajcqlf6y4p5zmltq27dmrtlzt6pa93wwl4t8pj7vc5svtuvvxsf2usrzw7mxs5s623snu33jv3r9vdman8t006zmvaglj9knpdxmwg7cpqx0kffgvtl5ee5pd0av0x9mydhx8fnsn203a9a6gvcvr6md8zryvu3gtqqfrgjgth33ge454cf9uxdrqz38792dvqla99dp64skgur0erqrlxzx8mzu9wpdjndlht55h2crrywf2msytkrldy9aw4a49jt37726lzghhvuqu5ve6tpzynpwfhzzezs32k3l2apw95ecnqqlacjz726wquqcqqqqqqqqqqzgdgz97smfs2hyf6ue8jfaup26y32xjffjn5736ux99thn0ywdl4vm2s6e0ptseta9tjcsu2j0w2qqq8tp2ua7qf9ejt4ctl5qxw7mcttvznu9r7fe0sgty8t358cngm2xsusta87c3q7xagjvnl7hpufxqqqdt9sl9ynmvd839fav3qgsn5l5qn9053fk9y4n4zc2khqgar8lypyh65pss67h4khnhlveu6c2989n5tg7njhxv2u9c4xg04pvs32s0ds66w9q24emp63yc6j3zrwruuqqqsl9f0l"
                }
            },
            "finalize": [
                {
                    "type": "update_key_value",
                    "mapping_id": "4809092149056775690443117950884159350243427329382234128947382123015391557320field",
                    "index": 0,
                    "key_id": "403052276015054301013997882780264827543916810167088447782140189478885304709field",
                    "value_id": "3154167482256357180450304274773466508703266114961851146686805084722995238909field"
                }
            ]
        }
    ],
    "aborted_transaction_ids": [] as any[]
}]