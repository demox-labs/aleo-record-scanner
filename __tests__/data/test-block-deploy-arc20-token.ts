export const Blocks = [{
    "block_hash": "ab16r76qxk67z47zgwvayuqjjh7zp4mg7rqefl6g8jvl305kh5dzvzs4eqk8q",
    "previous_hash": "ab172jyx34lnhaauhll33xhv5aad7pstzyp0ra8zmp7duvlhme74qrs427925",
    "header": {
        "previous_state_root": "sr1yh07zjpyvyj3se267ypphe7kvx0ujrphjgu5h67f0049s8l2q59sqr3jqd",
        "transactions_root": "8253250700350725004192773572007352007838073829987451426825502513566052519990field",
        "finalize_root": "4385120902012912741803857856189050244196920771671882665235511567880028855547field",
        "ratifications_root": "4475868550464898031883787491846230897095695616973061526904794165997632088942field",
        "solutions_root": "3546365525956754106665058224319608781724498715154091606578976108082191813730field",
        "subdag_root": "4703982351962738254243708291722606064782758426602268748126542112834421732506field",
        "metadata": {
            "network": 3,
            "round": 2323848,
            "height": 1114970,
            "cumulative_weight": 1640571561089327,
            "cumulative_proof_target": 3143125073,
            "coinbase_target": 4294967295,
            "proof_target": 33554432,
            "last_coinbase_target": 4294967295,
            "last_coinbase_timestamp": 1704433750,
            "timestamp": 1704433842
        }
    },
    "transactions": [
        {
            "status": "accepted",
            "type": "deploy",
            "index": 7,
            "transaction": {
                "type": "deploy",
                "id": "at1m0hwlndkxwny87s4xs86dttsamv40cwhmxex8tuek5x4jx5mqqgs6f0kda",
                "owner": {
                    "address": "aleo1kf3dgrz9lqyklz8kqfy0hpxxyt78qfuzshuhccl02a5x43x6nqpsaapqru",
                    "signature": "sign1sdzysutae8y3wajyfnu6vc5lnpw5exj8eg6cehq8249uvmqz7cp4uqc3jl7q29u4ehq95k0upfj3fqvxlvve0yfkrz67r3e3ewtxxqf8kan6yvt983eq0nd4hjn92pq8lnqvvq0tye6mlxq2q62tz37wqvhnjmqhyd5cugve8y47ur7vku40efjapkvpm9lz86hvutt8rj2sknptwg8"
                },
                "deployment": {
                    "edition": 0,
                    "program": "program arc20_token.aleo;\n\nmapping account:\n    key as address.public;\n    value as u64.public;\n\nrecord token:\n    owner as address.private;\n    amount as u64.private;\n\nstruct approval:\n    approver as address;\n    spender as address;\n\nmapping approvals:\n    key as field.public;\n    value as u64.public;\n\nfunction approve_public:\n    input r0 as address.public;\n    input r1 as u64.public;\n    cast self.caller r0 into r2 as approval;\n    hash.bhp256 r2 into r3 as field;\n    async approve_public r3 r1 into r4;\n    output r4 as arc20_token.aleo/approve_public.future;\n\nfinalize approve_public:\n    input r0 as field.public;\n    input r1 as u64.public;\n    get.or_use approvals[r0] 0u64 into r2;\n    add r1 r2 into r3;\n    set r3 into approvals[r0];\n\nfunction unapprove_public:\n    input r0 as address.public;\n    input r1 as u64.public;\n    cast self.caller r0 into r2 as approval;\n    hash.bhp256 r2 into r3 as field;\n    async unapprove_public r3 r1 into r4;\n    output r4 as arc20_token.aleo/unapprove_public.future;\n\nfinalize unapprove_public:\n    input r0 as field.public;\n    input r1 as u64.public;\n    get approvals[r0] into r2;\n    sub r2 r1 into r3;\n    set r3 into approvals[r0];\n\nfunction transfer_from_public:\n    input r0 as address.public;\n    input r1 as address.public;\n    input r2 as u64.public;\n    cast r0 self.caller into r3 as approval;\n    hash.bhp256 r3 into r4 as field;\n    async transfer_from_public r4 r0 r1 r2 into r5;\n    output r5 as arc20_token.aleo/transfer_from_public.future;\n\nfinalize transfer_from_public:\n    input r0 as field.public;\n    input r1 as address.public;\n    input r2 as address.public;\n    input r3 as u64.public;\n    get approvals[r0] into r4;\n    sub r4 r3 into r5;\n    set r5 into approvals[r0];\n    get account[r1] into r6;\n    sub r6 r3 into r7;\n    set r7 into account[r1];\n    get.or_use account[r2] 0u64 into r8;\n    add r8 r3 into r9;\n    set r9 into account[r2];\n\nfunction transfer_public:\n    input r0 as address.public;\n    input r1 as u64.public;\n    async transfer_public self.caller r0 r1 into r2;\n    output r2 as arc20_token.aleo/transfer_public.future;\n\nfinalize transfer_public:\n    input r0 as address.public;\n    input r1 as address.public;\n    input r2 as u64.public;\n    get.or_use account[r0] 0u64 into r3;\n    sub r3 r2 into r4;\n    set r4 into account[r0];\n    get.or_use account[r1] 0u64 into r5;\n    add r5 r2 into r6;\n    set r6 into account[r1];\n\nfunction transfer_private:\n    input r0 as token.record;\n    input r1 as address.private;\n    input r2 as u64.private;\n    sub r0.amount r2 into r3;\n    cast r0.owner r3 into r4 as token.record;\n    cast r1 r2 into r5 as token.record;\n    output r4 as token.record;\n    output r5 as token.record;\n\nfunction transfer_private_to_public:\n    input r0 as token.record;\n    input r1 as address.public;\n    input r2 as u64.public;\n    sub r0.amount r2 into r3;\n    cast r0.owner r3 into r4 as token.record;\n    async transfer_private_to_public r1 r2 into r5;\n    output r4 as token.record;\n    output r5 as arc20_token.aleo/transfer_private_to_public.future;\n\nfinalize transfer_private_to_public:\n    input r0 as address.public;\n    input r1 as u64.public;\n    get.or_use account[r0] 0u64 into r2;\n    add r2 r1 into r3;\n    set r3 into account[r0];\n\nfunction transfer_public_to_private:\n    input r0 as address.public;\n    input r1 as u64.public;\n    cast r0 r1 into r2 as token.record;\n    async transfer_public_to_private self.caller r1 into r3;\n    output r2 as token.record;\n    output r3 as arc20_token.aleo/transfer_public_to_private.future;\n\nfinalize transfer_public_to_private:\n    input r0 as address.public;\n    input r1 as u64.public;\n    get.or_use account[r0] 0u64 into r2;\n    sub r2 r1 into r3;\n    set r3 into account[r0];\n\nfunction mint_public:\n    input r0 as address.public;\n    input r1 as u64.public;\n    async mint_public r0 r1 into r2;\n    output r2 as arc20_token.aleo/mint_public.future;\n\nfinalize mint_public:\n    input r0 as address.public;\n    input r1 as u64.public;\n    get.or_use account[r0] 0u64 into r2;\n    add r2 r1 into r3;\n    set r3 into account[r0];\n",
                    "verifying_keys": [
                        [
                            "approve_public",
                            [
                                "verifier1qygqqqqqqqqqqqqu8sqqqqqqqqqpj0qqqqqqqqqq9wrqqqqqqqqqq8yuqqqqqqqqqrz9sqqqqqqqqqqvqqqqqqqqqqqpmqh4mfmrkaqtk35wa40a4ftcxvfq5yfhdf760hfc487zhhdv7ma6mgw90z95cruejsdw9y5vfnqqcumlhuk6730ksvrjfazv8z3wkrt3hfgq6u6ecv7tdteyhkd6p7cdq6f4087mhn4jtqyunnxpwflczaw6csenespdy00wjjugutjkgy8acn4p9the8ajy75e2djdt87vsunpq9f7cyhade96rw9t9r4xfszptqd4nua4qz07nrz5vc7t9wa9y8xd4p87y9ax6hj7a4zqm9ur6en05dahlnnu02xf9z5wy375ukqqll3wqc6h4wxexyacxrf36wgs4p4fjxvqmckgynyw0qyafl429crynxee3h5a5ukprxujf6mj99xq9xmzq9xlc77djxgmlqszmck2nnmjgf7aumhnpc464f68xdh3aynj6s28kqsa8ayvdvreqr3rrpnsq9y4g3hkp3ufza0nlf863ph9an8gzlcjdf2zef4jkcgtk3fssuhfaxf3ldxzgeyj39dlsxgnfu5ngrh4wzq9npd4tm2rdl2gz39r47xjs0p9rdrmnsqqar5deqjeyk9h2wtu2vt638lw3az8wa4yhfwvgsxqt6gc5qwhzsp5rl2vrepezs750ml75wnc5zs4v7fep9rpw45ggs4v47vz4g2mxae8w0xfh4qpr2qxu56uw6p7qh438m77d7043h6ms68qkr4pzr04tmgh73ktwgufzew663de3jl5f4dpxlkqjv8k9p6qqusevp449aak6340x26jztj7vk94jd8r5egt2600xytq63ldp6c0xz0xtyyr3gxevn34x9pmxy2upcg39vewqms4ju6anykn95v2vqqmzm3sy7hdep2lvhtrmevnw8z9q2gutxj5gsjg099gvw43utkyspeh4rpmryf2sa5lyh2g98fxduqapans07adgetq4fanxmnjlhdd602lqwe",
                                "certificate1qyqsqqqqqqqqqq84m2ndjv9ldjnl2gd8nqjhhkr4ak6v0g5rdnght72gs6w5gadl2hc529r8l8xc2xm4xa57gwtetjqqqy646nq"
                            ]
                        ],
                        [
                            "unapprove_public",
                            [
                                "verifier1qygqqqqqqqqqqqqu8sqqqqqqqqqpj0qqqqqqqqqq9wrqqqqqqqqqq8yuqqqqqqqqqrz9sqqqqqqqqqqvqqqqqqqqqqqq97crf6nlpmuljywnxmx4mad0lg6pq6jh8xz2fkyngyywzsthv0hpydc9f3k0cln5n6af0d2yjjspn8f9lsymqc0l39p7rxnhkzsls9e8yl26shym4pqphja2n9z75lmcp8vxu7a54g2r5dy96eaqs0zcqaw6csenespdy00wjjugutjkgy8acn4p9the8ajy75e2djdt87vsunpq9f7cyhade96rw9t9r4xfsz25he05dszt4la08umn7feuvtg0dphuds2u3kxz6hdfyqt8vf7579y2wacq34ey8gh3jhmxswpe2qfvstgjqgjpfd07r4zqapv0ngkze40l3tsg08huv8jhqurx706sjg7f7n8es7kq78fkx2l7vlt0mwq9xmzq9xlc77djxgmlqszmck2nnmjgf7aumhnpc464f68xdh3aynj6s28kqsa8ayvdvreqr3rrpnsqp4m8e6wrcr9gaq5ghxx2r403sut0ewzkq9cskgzf2p5vk4zeqanq9aclmyewtgd0q4u2psnpnmnsp3z90zlr5qgh9f3ndyreyat6ahfjcr5t627ynutpkg8e4pg8vpkwy7mg84ftdxcezt38xc8dk7yrsxqt6gc5qwhzsp5rl2vrepezs750ml75wnc5zs4v7fep9rpw45ggs4v47vz4g2mxae8w0xfh4qpr2q9s60ngf2jsjz9208u9tya0ngzsawcrhfxfl88j3p5r0nr6e8v3nu6aaew0qwyx4npnuwqq45w2zxq4azudwz2q9lzakm7zqwy36dgcf383xyydwyy6x4qrvzhr5yp8tsmvz6hv4prhs5phz756suf7pyqpcg39vewqms4ju6anykn95v2vqqmzm3sy7hdep2lvhtrmevnw8z9q2gutxj5gsjg099gvw43utkysp7yuqlk9ntu9s7suc2j3wxvt7ndu5k7mahvdf0enysfg045ljmwphgpyzx",
                                "certificate1qyqsqqqqqqqqqqyjp7tsteym3q29gjfzenf9dgtsklrwum6vsuz6q68374w4n3fgh4esn9kgtqmj63m52504dwzsv6qsqy3u4fc"
                            ]
                        ],
                        [
                            "transfer_from_public",
                            [
                                "verifier1qygqqqqqqqqqqqqaggqqqqqqqqqpkssqqqqqqqqq0kwsqqqqqqqqqqkzqqqqqqqqqpk97qqqqqqqqqqvqqqqqqqqqqqqzvqstqyucsly09ws9tcpjz7n9sxpqat9dv87s5lq5m46aje9y8rxfpmhtstfxkhw09mfpy0u3tcq3sd9v4t7yrdlw5a3mpprwwxx0d7lty62qzdq9wxa052sevjpa5yhymdlpspx5ne2ysvkul59fhrcp2mjn4em4w8ljft5jk55p3qjlmf0ajft238kc2atw425nfm8hygruxy82qgras4rcus47qkxk45qsz5yh5ynrpz2rczknl2v90vuxhy4n8eu3p0a48zct2w7x5qf0vsr0ek339npx4qs69svct8n4jq93qywqqp70h44tg047kjefme7d6tw9qk38pa4ak4g3ldrtr0xy6a9u9u3mrv3h9djf48w4l76gnl8suqqzkjdq3jyxnk3pf6kpcndey36tc72qp4zmzvzzp4dt32xw0hgy62deevzqhnuh9yng30wu9r5sfspxmrxcy2vacfyvn5xhu3sfrefdvezpnh4yc60krcq8fv6fq53he9n5v6sketvfsrax0j6jp6ft6nqrkq8ml4tsaaey2e8efdxc55tcxzkpuvftm90k9nmrmn8ke582an5n3dxfd0ghdyclr85wqm8wy3lq9l6353adrdessdwnu99wg244qjkmem7jn7xwmj6hzx4uuppry5r2jpyawht96qvjeqye9hrl5qppqphy9llfeq8e4276mrtp0yafqgxq0hu42vj3y7glsg4mwx590hva7tp0qyaa7ca5r2mlsrayv23m5qr3u6wpph83dsl7r0wuwwm8jamf27ne2v9agdl86ldfeup5xxsuk4wwck4ztl83ua5n9z4gnlvguypum4ewftr4xtalm73adlclghwyayc9tln63s5aanz5hd7yvuxwurtrhejc67pch9pvmk3mh278cuqre24zvqf74870n53shnvhrmk4a3w7p9c08qqzejykqqz0uy939p2393l9z",
                                "certificate1qyqsqqqqqqqqqqru6esne7rz65daajg04dtu7xx2t8876kzux6zz7d8dnd6t5lpwlqj4ct252zr469zapvs7pvu7ycqsq6j36cu"
                            ]
                        ],
                        [
                            "transfer_public",
                            [
                                "verifier1qygqqqqqqqqqqqq79uqqqqqqqqqp2tcqqqqqqqqqwd4qqqqqqqqqp5ydqqqqqqqqqqvyqqqqqqqqqqqvqqqqqqqqqqqycjnw0wzv753saa2j3cz2hel8w9nm5a5g45qymswu4uxuweksj76cvcdutnakqnw55n4edckxckuq7x9xktrjjrmpg6gy3265u00yquxr0mu0tt0nqkvpq7vxsmcj3z03c4vpdczhv9duaq4d2qsttasgp4ezrvc0n64fwetfmml3kvfg7n03w2e602sl7et4cpw98hgpzxwzrmzu8r3x77v49njysy2lp55xspfsv6szq335vnddnw6ckduv6smnhqtengt8hm285pqrwsu4perjv32f5wfd92j7dy66ukzdwc4d5qy69fsqkc89nszp58lg6sf5k6n4jmallv56cc2ge32pxr3swlf5uxmj2tz7fc60n3j93g5dgfuq2vqggjdxm4dvlt2t6k66lw8e9ccj49qj2ahpht62kh7p56xpvpekenq2arng2t55mwxe59mqpkp6a0yq3pdcecf6dz6s67r04h74vajxvq05k6tsc2llhs45a3rasa8g9wns3he0cq4f5ptv7q8c3dd5lamczavp9dtjh6qkdn7t7ksxke0q9fncfy482wvj4qxzfzemqt6pknu2g34rtl6655cmlkuv9kk3txadsqv38lp3x9efestt5pk8rplvmrk0zz9zel48l8h9ldfzyd8zyr7knze92cdyanez6k7q5fu6tnw9wqxvj9k0vk76nqn4wmaa9huev8vvlkzn54l80ujydsgntrence6vqcwftemxn0jr323yry7ft8fch2qygfpa0h5hluagqyv5f9l0fvqpguhu0xsgyp0747wtjj75uv8hvxnn0s8hxtda8jmdldq0ty5zvpyq0chzq4rs2dmfjwryxrxxgjtdcsnn9fpwykkxwfuervtznu3lmvhhpdflgwgm0xklu6c0xsxt9dfcpxdhtfj3fqalw2qrk9pk7s4jpxf2xpe44eywlhwhw9ly56mm28qel5fwa5",
                                "certificate1qyqsqqqqqqqqqq9hx609q3wj4hgm3cjjxs9sppkf2ulp0phh6hgfmj9atyht9njxr8njxrlg26a9c4y2r07j7r2e4zqsqyhaxfl"
                            ]
                        ],
                        [
                            "transfer_private",
                            [
                                "verifier1qygqqqqqqqqqqqqjc5qqqqqqqqqrp3gqqqqqqqqqtelszqqqqqqqpj9tqyqqqqqqqr5jkqgqqqqqqqqvqqqqqqqqqqqfl4fx0fjz6z9uj8xmnvr5jqtlhl9nz3fsprvegw0gl7fgtw8dvnd04nyhnppj7r2kv008jqgjsd5qr0l9t3dtmg72d7c5j3ukdaaa9l049za5y6xnm7m4jemcnrvhpq377cuvu65tua06avjg6wmtgh0gq8r7s4pe7unjj2ryj7fwahy333p5v6npnjh2r0mm3zvctrs7xnp992tmdf3sll7hp2ay0q77q33gqq3g2lzwgh5eu0h00zgsa4h9txzhlyhnl2vhr8ufces3x95dpvxw0nmp4av2p8rvue4r9c9wpqkahqx8e4h88afg7cn9mv2tcwduqkcudqx33uhfewmrhjhjafvukrt79zkusw4fhxjspkrn7expvww727q6v6qqjkk9yj46e4pdhhlwf9t25guaxnv6ppzctn3t0rd22rqm70ff9tge45tfzleuqg5rvjqss6spn9d25l0hn8cgshetv69zd4rd08v6d58tddrtgmcnx9f0vs2kcj60krf8fd5wyyfqr2frc86lnadgpspmkcudmrac8ceyaflxz936tha7y33vxgy5a9h8klym4j4c2hlpjn6jjfpqyvan6nc77d6fq6g8qp2erdy3tnkmdr5fyvcxgvgafa96q3q34dp68m9mhenc8adkx9cy8tkha0486zj4nj782ve9j5uanq8xldwj7ftzdfua4760g4u6kfurjef9nhj6yw80trsvfrylel3l3w0wfqlp42sff8xtax9pd53dfvqh4mg668fx5vukez2y7d40axrtkf7xdzr2m32ncrvskjzypzt4datet6pp6uyywkvtntv0ld2z7x5p3muhyt7g8lesd8x5f6l8jl7h92qly2j980ar5jaw8dkctykk0rgfyqfk5s076796unz6vlc9dfnqrphp0fudkq3ee5vxaf48l92d6hnwp47aafhxysjmk969xscc50rgqny7lt",
                                "certificate1qyqsqqqqqqqqqqx8dfpymp3r3j04z4l93xkwsqmcd6tstzt6gun86h0ffs5xvjdasvqway8skxcdcvgx54n638g2vjqqqa7vhcx"
                            ]
                        ],
                        [
                            "transfer_private_to_public",
                            [
                                "verifier1qygqqqqqqqqqqqx7jgqqqqqqqqq0pysqqqqqqqqqlutszqqqqqqqpcfmqyqqqqqqqzaakqqqqqqqqqqvqqqqqqqqqqqxwhzm754s3x2c62pk3tddz3unta5tsd5a8dnczp8xelekvm0nr4ll09g0suw2vnnt7qphy6tx62cpqe9gwy9su2cct2am2sp0hsw5u25evu2jz90n84k7m0trdpsjsdj562u3fwvkzmww4d9fne7ud4lcqnrqrfu3s27edjgwkqqyajnhr2hv6a6r9g50jlc07ur4s6gf5ex78p6nzm8jyxprpdfn4zn05mz2qys23splhz8mc7wmy4mqlml379cj0zmpdwjr98rt2e5gdcfa24aqhhjf0clqyxu4sv9tfgxve22cpqzjzm0yr5x5szk3kk42stcc88rms9yz5uuhk6yhq2rp20zeraxvn3my3qyqx704a6dx9fsnsdvapkqnxe3yg2uh4jnhrv9q7uhjlah5a2ussrmerdkh38t37umk60v93hs3sps8tpd9kzu9nh0z8qt2cx5prpaugcm6xumdd78cy7dxl9df7jpt6z7jvs94nnnrz8x5qdtkfmm65qrt37k389w2njfmt6ht7cyspae5ffkkdfyck3dfvt4cpnpfflutm93p56rkhqrw7753903r0ec6t20l0x2km688qywemycelneysx3cmp4n3rvqh4dn3qsuz5q0jxdz8jdrvx6zfdc35h6ymlul72tcc4r44ae825ul2603ma46lejjlqqwzx6zamwnna4mkj5tw0ectsz8dr3paq3nxsrw7g9v6wcv98ya7twsmd7lp3hyjrfg86eg33zzsqqads2nl05slqqa3l3064p70wma5e8phkaj9k2qje9rnezq3p6e0uazst88jmgfhpntn2edj3s2tnsqs3wnrya5a0m2gczlc8u97pj5rsksfem5zp9m7erzp0yt6vc7zk5wjpw96dxcyh32ymnvnja5lhagpjxmxjdae695ehv0mesru8ac8h7umhrv42kd4j8xq2phr20vcs0t58w7fe",
                                "certificate1qyqsqqqqqqqqqqy9t0542h8h5wu7eqcvqm808f5233gz3zlxjz5tgpqwmqvfml2xld4t88tt07uf9zq9rjy2728lswqqq6y45wp"
                            ]
                        ],
                        [
                            "transfer_public_to_private",
                            [
                                "verifier1qygqqqqqqqqqqq8jtsqqqqqqqqq0vhqqqqqqqqqq3tqqqqqqqqqqppklqqqqqqqqqrhckqqqqqqqqqqvqqqqqqqqqqq05lf8hs3m094rkqq0vrljf5jm9qrnherq3sz7je9ex74gsq8sw54d4r9j5y5724lk2y6hw40zf3gqdhawygecw4cwktg53ammxu9twkypfqwn5m74892vr0n5pr7qsnspn468l8rupzlc7mf2vj5cvkuqpqa3g93y0h9c4vh2t5m6u5xmzm5czgh23vt45n90qsqenexeqru4cmm84h0rvcjfks9xl5ra0sulspacljn4prv6g0nr3hggnwdv39cdek9maw9p9uvkxvun5xs9j57ucngcaj5axj0jyqgt3twa44txnqy3yjxngd2n2g23ef0c5pj86fcg95a9hg6ey92qjwcsr8wyefymtuj750fjgc5agpkp8gx2kncsruqpwuvn2dax93jgm73vl6k60ym4kq3f97p9sdvywwzh65r6az7nt6vldhdr98xqcrurgr9qyn7f27cq6mcmyxzwemtfv5xqdcqx5dyrnw8p6h3nrdxcaky4pahqp5r4el7yeau0ddnc57r2k3wakxvskgqcrymasjnmkksg9xk67yeftfs4t4clwdxv2aqpet9w267t6cyds20xehqa3pmsqwtlcm9529a00jtyq82pjcaufmyenlkkhsd0m5l6ktcf3mgg5hf5eanggv99qfa26nfp93lla7jqjrhq2ylrupes8nsn7q263n3d5yucczpf39t8ec4cfgutkau50v4k7ljpkzrsmhpc980wmern8e0tdvuh9twrdcas662zcgqp2s4cj9e32kw9sdn63ht9pppymmlqftnxfp6gcs925j7snxw7hy8j0lgdkvln8xxsvnmsx9q0l8vp2dua9fyjjchjvm9cnqzurrx053p4e68sqkcvll3j9en80udn3nrm5f2fh6z2pgz2yzsj354qk0ccpvaxl0mn5e8wufmn6r6jnnrmavs7gg6hurk2e72wl72avs9qm7dy0npj0d",
                                "certificate1qyqsqqqqqqqqqqpaxhr882htsu7ce3h235yyr2h9ssny9m2zrl6f73w0vwcz0w7mwnh0u5z8vdu27ndauaqzj0eeyuqsqdqf9qn"
                            ]
                        ],
                        [
                            "mint_public",
                            [
                                "verifier1qygqqqqqqqqqqqpq95qqqqqqqqqp2tgqqqqqqqqqefjsqqqqqqqqq8ufqqqqqqqqqp6r6qqqqqqqqqqvqqqqqqqqqqqx62m8kuaswz79d367hkm39ll2s5xxy2u03hfz7fwm76runydukeua4w8j0lj0dj7278qnqv85j8gpfdppvccc5jzv8sfcwkmmsqmkhrs9pr6kmn5ggzkpxtz8fdvhf8nqctm2c7h22wp0h94shsem8nxsp74u0vntkrjg5vty66r0llwfw6ddyjqyhxy3npn9l7jktv3evm9jvgu64sqzm4lrmcmzfgl4z526s9zgvud3s4h7fwmwn59kn2v3zlcpzfsx7tufx8mq24rglys78ek4cqe4g56m9qgrpm8g62206vhfvqzeflrmdpvzu00l2z99nsam7gfyg9s9n5usntv5j5pa4nd8pyka4wdqackysh4c4kd6plfag0adcwqgpp3tv7erersnzmwvcxnmmjdjsgc24f8rx475s3gfrqlflnnu63ulwndkd907yvhc5hctuyvflqvqcv9y2rqshv4std5yt3fdw3nc6m8jpj3cyec278dcg42wfyd5tyku8tnhnkk3ee22k6npxhr84w0qp5n5xuccqmds5ka4lgk76ka7kcrfstqezmwngwqsskdywyqp8mjztwr4nml98rjshgz43rv4k732sxgdgcezzm29qmsnuqjcz7l9dhnd5prx6tcuhg20drjce4p7la0tk58ymj5elwzrps2gyv4cumav7qqcgq5xzzyt4n434j4du95pwxncflz9s0j2ltexycdtumnrrath33kerelfrt36nm5adlae42f7tsqr5xu9kp7avqhgpm2y9fxf4cgj75mc8erj9hyu8uj8fyuspqdww2nqnk2y64scmred5vtdh34dadyqmdxf20s6kraw2nuvuf5a549veakkurmrah3p5d7dl3mplsvlfjel4xannukwg2k7a0mru2rlyjjgqn355uex8q7f6n8zy5ghrfmsu5e2zkhu9lhy62d44s54kxvcfw0eqkwnuq",
                                "certificate1qyqsqqqqqqqqqqy4yhykfh6p5t66npsdl5m3qn72k09up9sjv72f548h0hmsyxm4yqmkyfmqst3rh5lrp6maazh005qsq3scsl5"
                            ]
                        ]
                    ]
                },
                "fee": {
                    "transition": {
                        "id": "au1a2vhlhtuusg2hzf6gsyp7jznc9s3shdgy3d5tarm5m7c7zjlkvzqs0t8t9",
                        "program": "credits.aleo",
                        "function": "fee_private",
                        "inputs": [
                            {
                                "type": "record",
                                "id": "5994088862471404992470555471427837147165873579760724232844435299282896754100field",
                                "tag": "6160755401335629029969657316591171933790715177811894254514435624178729452402field"
                            },
                            {
                                "type": "public",
                                "id": "5482008905454078920356099866813754351682223762339772100201106291878649166850field",
                                "value": "8880000u64"
                            },
                            {
                                "type": "public",
                                "id": "6917511521947358752706942002944144448080966773973404236774883928558644795224field",
                                "value": "0u64"
                            },
                            {
                                "type": "public",
                                "id": "5442804308415466417820657804253368508357991485445602346527302908896134472794field",
                                "value": "4986952158022967938210233019091799793100872130383544345689365061872566736894field"
                            }
                        ],
                        "outputs": [
                            {
                                "type": "record",
                                "id": "400991271845093842909825163830135517743668842796161636062332895036169684588field",
                                "checksum": "4081000138167218295214389580972827461832780616459189922040234672111373377067field",
                                "value": "record1qyqsp3dsvjtmdkz72g42dw5v6z9z3tf3augx0cz8tjdrnakpygnw5gq9qyxx66trwfhkxun9v35hguerqqpqzqyejmucswl6v4eh9z8lelsz0umfruvr0hn4u8mrlx6pcjte49j5qug2nmtle2v824m6fqxqma79jkljnlzmx3wtlyz7tulz7u5qgyasjy7dqpg"
                            }
                        ],
                        "tpk": "759716860303487931271307046950265637197813793095929519634386591149142787649group",
                        "tcm": "1219479014284924908741399695989001212011920847723916922332228821631249375595field"
                    },
                    "global_state_root": "sr1e0jgc6v8vanlx84ceck9c8re4gwpw9j4trfu29x062zgevp66cpsr3q92p",
                    "proof": "proof1qypqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqtuma64ml0vzuqvgxzg24dpdrrs5hv8lmqaa7mys7z85legzys3cl33lu32n9am8na7nnexp8ggdcz56qz24n8ykt8z4qy64zvpp0rl0yflh3stkth3vxwelxwzwej7mpseslw56kded0zvhstgg20mtrqqq6xnvaqrdf0npahqfh3vylrlr03g9vem7v75950jqag0wsaj0gjmx5wdy0en4xu93q0h6rzu8yjqcprdxfak07tky7wuwwg0hkhyyuckf95thtfl2jm4654jhpmxjtqxavd8julv59mn6a9znwhlfshadcqvcaej5lp88f8pqjnk5lah0ua902l7fdgj62gft3ff8wzth3v89xzc4lxfwtcmct9fmzjup85zz8sxr809vxjj7jyshmw56lml2lhh5r9t4nd63dkyvuju7apqw0ftcch40vlpnq9l8eknnqklclxz2gqqv0rerk22tptz34llzg3j48sfp9pqcp3570f72zu6ke2cagtpefs9vqte9autz493mj73dvz9rq6cq2cmflfnzc6pd8eentpj2w9p54meezrkpr3p5u0p4rd5py6zd0ns2zfk72z2g3vcap6j7y34cuyuyp7z4jy6f66fpfnamctv3l58j6qmj3stv4qyy2am7shxa904ms79wue98n0zwvwwyg7x7qtn39h00cpkkt0psftmngz5hu0r8tn9jc9dnnzplkspu4fmxsxxsywkl26pv7wjzmvew2uzad3jgg0a9zu4mlsytzppkjjsdc6vxdk8qf86epsaj0gajsav4clv9qj6rwnq4h02egatqmk4f0y5s38kmcjs3y8xmagqyq7ecwlv68p5vtll8hd0xkmx85sxdsvdnnva2apvm33c55jeqcdsdm8y60lt2sd20x3lhqtrtu22q7r7tparx2sul4j2p9g9f6wp8hajq84tp77lewjpkjrca3jwnet8z32wzgskyljl2fv0xmcq248p5p8rr4h0sz6dzhl45hp4gmgvaq6jsygvmgq3wp7t0548j8zp3hvu8czf52avz7njxvufdh2szpyz24rd4p7g60kkc4d62cttk4q2cuzr2cyav37km3z4u9eutajya4pt9m2w98493rqur8s3j9tu0u78agqhzfk269a26ynzcts7q6394vv9kk9354est3ukyk9e2lhp2k7jnqgtnrg5cu4ztztm54vt2ll9ftr55vwgjkm7dr8r4nap0rs76fvzsrxv7rhddg609npr9hf7xlmwflw3pusw0cjzfssvkf4nerm40dr58kgm48xzfjsgffcw7kgjnkm6njqa2wutwct0y84zjdxpmry9kekzujf7rwvgejluzvd5rl06rfwwlanulvtutz2fq7fj462dnxh05ez8k2da5a020kcg8c6fjxah0fpfc7k8sav6vd5hdu7nypm9a2ze5qkw8rndajynte68ufw6c9wh8g606hm4rvuxhvlljmsqclqe3kejcz23qpq6lfyr76j0lx6lpwp4z839eeca8wa6ttd4chvq68h965gyqurgpw8dxryv3wcv92v4dfkqqfpdy7phu84ha9wwvtl5palrcgxzc58uf40pj57lf6quhaqnp87dcevlu3vdax8cues4mm4w9qzk2ep8cy6uxgtnjtxssy3587x3706ay6x6aqjuuywj8k79qnyg8c563skzxfave45lqh3lycp2l4vjrnhwt0wz3qgj2ne5rcrfjg3qvg92q3ggn4npyt3c09sz4fncqu207jew758mvvtn3dmh68th9ls9rv4gpdwqt7nswqyar7fmunks3lv7mf78a7exxe62aplt5fkfrhnzd6qpkdcyrqncun33zhs3xj0zhxr3vgfdm2dwg5zk054q4wtv66nv3apupqsel6amtqvypy6gahsgfpj3l4ggm3pt4zw2g855v06gdd5scquqcqqqqqqqqqqz0ld82adu6dsw0n9vu7hmsn5yz6e0p780tn475fqmrx5a25gpnpn0u8frhkjqav9xc5ldcjha3p3qgqa5qyuckkzvk7afqddukp83dqedpn0nl96fgs6m7gdwzefjnl8jm2d9d3nla4dycxrmzes7l82hqgqqdmfr95w3mnge522zx7at8ych4z3xj23z7jc7w9427jqrl86nk8qwwgdsq5a83vnl6lpw3x3t7drnyrt65dael9c9qjeyv965k7dtx09mkdunspgl6ky99hfp94fxw2xqgqxx39u8"
                }
            },
            "finalize": [
                {
                    "type": "initialize_mapping",
                    "mapping_id": "7084592150786857858540882291851052991155693334152149131666277155639624886934field"
                },
                {
                    "type": "initialize_mapping",
                    "mapping_id": "4275235026392664603333820781899699305844613514307883093573124790881595477832field"
                }
            ]
        },
    ],
    "aborted_transaction_ids": [] as any[]
}];