// @ts-nocheck
export const Blocks = [
    {
        "block_hash": "ab1e3jd7cgh06m29s3cae5l67yazh4mcv7dlrhwrsv5wxq9ry8jlgyq4329y5",
        "previous_hash": "ab1ypufxp5l5yuljg7z8vxsp4gkww5htn0uym6auhy867uk8tp465ys5cfgqu",
        "header": {
            "previous_state_root": "sr1uttn24vdhw5dgp45ydytqfx05nztp8mwgqdd48f2pd0a2dwcqyqq8fwc2v",
            "transactions_root": "4656245508482026082055321488759975939438589795317196813737171132445498050598field",
            "finalize_root": "3225605742796112859476537469450016541609727632072775173353785032862124355585field",
            "ratifications_root": "4710405186992022735262004958522644990224161834463249249031636047654518734485field",
            "solutions_root": "0field",
            "subdag_root": "308277931444090174281050535489487948918699886848020127761847149893266807013field",
            "metadata": {
                "network": 3,
                "round": 1900470,
                "height": 926657,
                "cumulative_weight": 1460175928160716,
                "cumulative_proof_target": 3690987109,
                "coinbase_target": 4294967295,
                "proof_target": 33554432,
                "last_coinbase_target": 4294967295,
                "last_coinbase_timestamp": 1702417499,
                "timestamp": 1702420843
            }
        },
        "authority": {},
        "ratifications": [],
        "transactions": [
            {
                "status": "accepted",
                "type": "execute",
                "index": 2,
                "transaction": {
                    "type": "execute",
                    "id": "at1jpxpr6f808l23aw7mxp3f5azpp0x5na4haqu630m0889qzamvvyswu0qfx",
                    "execution": {
                        "transitions": [
                            {
                                "id": "au1d85cxn0x0rvkzpt04ygg5px44yptwjanx2aydc3q8nvx9q8pv5gsqn7awp",
                                "program": "privacy_pride_nft_test13.aleo",
                                "function": "add_nft",
                                "inputs": [
                                    {
                                        "type": "public",
                                        "id": "8379744909746089904539072619191198541807004556155630836662687023151347159679field",
                                        "value": "{\n  data1: 68051203934329215081013893164492747376u128,\n  data2: 121424956763700u128\n}"
                                    },
                                    {
                                        "type": "public",
                                        "id": "2114013634496382084270640888475175492486762427189547837813487035748114488347field",
                                        "value": "0scalar"
                                    }
                                ],
                                "outputs": [
                                    {
                                        "type": "future",
                                        "id": "6911600091866743736773044090956919174575294571176553704203842092107413724324field",
                                        "value": "{\n  program_id: privacy_pride_nft_test13.aleo,\n  function_name: add_nft,\n  arguments: [\n    6281613818945482350858479786592172389901697546857156772235332030476616928837field\n  ]\n}"
                                    }
                                ],
                                "tpk": "2151998249494208757004571130038133285864343219695163355603712692301562214418group",
                                "tcm": "6037631137699759888705803364317987286298990974016207280955897584298463746125field"
                            }
                        ],
                        "global_state_root": "sr1mjxm38q9vyt2y62qaxm639kf8xu3tx46d3wvr3m6llgpzqc3mv8q06k348",
                        "proof": "proof1qyqsqqqqqqqqqqqpqqqqqqqqqqqygvfe66av8wp46stlcgl93nzujd4fa33hv6m0eu4mufu8zxhs0hmlrzmyj6zyqqjh5vt2cwujd5uqq9a2zcfmd3f5uzmnh9ps359e3v45lhvf6ykatdy9s9yx63rlatmpan77crwlkquld0alwdfluvjk3qyfwv90xfs3r8l2tycg6kaktut82dwfur5f946mxmd9nqxyqyxwkpkx024eqpvxhmr33rr22xpnxqqv89g2kt4g3n73nc9mjf2y53n50vtw6t885emekr7xcqpvc0lq0tkrp3pl4r3c3vjqwk8rugdjl8vp43l8ns5yheum2ranre085ucf5pd9vvhr3svx45pjc07t478h0r7e3n5uvlf24qfrkch3tz8n02rcr4mswfvt3qe56m3v70ea7s27y02l7waql4ssvuqjzk4dzntw3q4tkash94q59wjxv3gd0lejg65vqyefhcyg8ezymd5kuj2c9e4hdvzr3pfrj9caxq84usngsrkkvc6hpgcxjend0a6aslals6aa9jf6nqf86x3z4f253g7kkrwgg2fj2ce35zpp949j4aek8546vp5ftx32lg56h0gpwyg8k5l2m3ru3n4kxkqr3cnmmudamxdmt0zs8lpcw76llplq6a9l8q3qwu2vxxjq3xg8uqd9lr3putay648nrzj3v5k76dsqdfy4v4rqw0zgrw9hf58tkmy5lppev678yh9thncknlwnqjsh0cyswd8ayrfh2kv4z4drc0y8m0scec7g2dg830tf85stta73qhtzxyqr5s2wh6927nwxe463vjnc204n65h0etls6ljpzfny5mwpf6unqgzjp4ggtu45fau0vkezz50ywvxe222qcah80u86gzugxmu5mxnpqqeqeazaypxrtqxw8m2q58vauwr5q5y6696erc3cca3rrqzlqfcdacmf24dc4rj3wv2sdps0ar2aswsrq7zch7fg7w6td5pztk2swup2ushhnr8wua40jng2vyd7rpcrmwcrzhjjjdkxg3249652v73djpgse9t645d9s8hxm3wzcrcvnpch0qdsecv270xznydaf6uh9xv0z2nhdj02qpqxcnefzcujq2kdu7u6jxp0tfls422jrwlkhqcun02ql0gf34zd0ua6va3v2utdlscastcsfys0whz07vxelvpzexyagmcyqvqqqqqqqqqqql4wlg3uxufh30ppsrsfasyh7lpwsxfnq3gvw840mrd9kzctkr2p0j72hx92kx8x4z777lckq6gqsyq2nj3zauj5cgqc9syefh76f87pa2pmvy8e0h0jl5xf30g9gvx4tsppyj5dam27jlwclzv9xeumn0gqqxzhvkev9fpqws7g97he6wuvwl6zpa9hz70hl0x4zxkkh57s6v9sat6t85jp4335f2cm7594epc3me924uvwmtl7xzxhpdt3zhpfdljurfalmtvap4g32y2qrugz3rfuqqqqvg0q6d"
                    },
                    "fee": {
                        "transition": {
                            "id": "au1xc3u0acfwge3gep8huk6dh9xjqpjjzztsfq0x5jg8pag40y6xggqmucxm7",
                            "program": "credits.aleo",
                            "function": "fee_private",
                            "inputs": [
                                {
                                    "type": "record",
                                    "id": "5917295029404642359215923353376107342514090326168305351542920969653942760619field",
                                    "tag": "2997982358586324403097960107627572323218555379218467654799807283725836799458field"
                                },
                                {
                                    "type": "public",
                                    "id": "54449455044193058951006998851649098483005598711873907403885273721547133415field",
                                    "value": "6500000u64"
                                },
                                {
                                    "type": "public",
                                    "id": "5357103640029416242333816663085146131957289079239323270248706511811792429220field",
                                    "value": "0u64"
                                },
                                {
                                    "type": "public",
                                    "id": "6948531098054507137079688557646063010598389493569205113239877978056633734428field",
                                    "value": "5331656242189760765191300226607491998601349148654097292567079071929833955442field"
                                }
                            ],
                            "outputs": [
                                {
                                    "type": "record",
                                    "id": "6327821591997902996220110259879026221057260458855926417501646645346000862117field",
                                    "checksum": "1471585035238050165459724432452211228933664214701515818756757460351005404862field",
                                    "value": "record1qyqsq8havehfunqkswfpjxx6jsr47pfrluv6ldfyf4cwnwjuvd7p65s0qyxx66trwfhkxun9v35hguerqqpqzqq834p4cvfefv2sj955pmknducsnu8maak0y5wr7yrpu8rykhhwpdxlxaar4fuqxrqdwfv03q0qjmjp80gk6vrdct6tk57qqdcaz8x3ql284h2"
                                }
                            ],
                            "tpk": "8156441937064281472602954515418956496361856403118031740561675737861989787715group",
                            "tcm": "6559882053435220711104639417879802686994237541607001446407612039275385977078field"
                        },
                        "global_state_root": "sr1krhmvlrf6pfls035yu8v8ft4fzuzlfjs7q7uphpeqfl3l48j35gqfe2gq4",
                        "proof": "proof1qypqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqd274a6pmf8wmnrdt7qrs50paqy748875qxngkmz0rh4np7708h2as7alz748n3rugdcu8cuztyuszmcq2k6k65p2pvx9duzl5tqqf3prxzwjlc3cvzsu27xgplch56jl0v42sv487da6ht2vl90fntvesqq5utqy7grqpw4l9965u6gl2fq5ny7w7kn0utkcvscl6q2p6knncqa5qel9eglsg4takcgns0q8c9qp42ztsnxauxx0zvcqn9z026n5sp64wvkd6f2nx80848xvzcudyw7ge65twxf8qmy6eh0v8fhaw98qrdatzdlqrzcvgzp8z667t6uaqlnjlvu9hnxurswxdszrg9mn68k06hcj8az3t3t8wj8nehvj6ynnqpssahlx50gwqpdf75889e9vjss4vrgjr9ghfgrsnkewexq4mr5mpmd220zhxv4ust7hedejw3tasqzgjwx8c22c5gu4d7yjcpkkd7jgdqqgq0kpg8s2dnn9h7gghpj0m8pe3jz3ceykfry03zz6lnaqukqtjhks0ejl9je628vjkruptkt5lj0etr9pmjwvxarch7ka8g4s53r8l9dvx3spjzzeaqd3nxlgh2yp5q3l4w2dp8n4209952xfdwlc75hacxkl6gr9h03lxj4ew4mg8a504wjyh57yr87gwuxzxrfw7cccrql30pne4xfpr6mz2t7y2q8g46nqt5s8leth9p0tmy2jalp2de4sly90043mj6jft5h7c3460zazqy7j5dng64xekjqyeqryefhz24yl0q55r4y0j8pptcgz6ad5sljs5ds6h7j0f3ajxrgeu7l5zx6fyqzut87ke0s7swg3c95v6ryp6lt3k28xvyw3kjk9zwsay3vxtychpn6lducj40npxj49tu7rl77x9zqeh2zm0rc6nl6uxuxuz89vyxfedkmw0mz6kyqt7dazpcsjv72cttlzpd7kwhz9y2qpudmrkuew78sqg5697m0lp2ax06gwl04xe7d5y8g9w33lnm3qay7v20n2y6sftqy59qctmy3qksgdjqagp6yjeuwgfjln3y7slr5u5zq3dshvfltw2ygn9dkd9um77dz75k4t94txthc2zl9w5rv0yqgef8n48an3vsw7p4edfcyhkn39aa49q7g57l9f29cxaxghhdty6maad5593q74rkdss9zpm47rusegxskvrmtncmgwqlq9f0xuejc2mxppv7z7cg2tehqffflflm5ggh6zpe9mxzf0edft38ktukqgvhupsqerjl2lyraf7gpve6rfy77lk53xs6y33kgz7rxqnjytymay5k3sexp88g79ng3jqql3fj7glvzgeqcuce9qvaqny05pf5qklremjp9y66klz5xg5rmxzqf9h93zmwmjchdj78hc0pntwjq06r2yfndnze3runpafakncp3q2ghnazvr8vynr8kjtfe0xyfdrz2a2dkk8f2mk3cyz8mu3gh08mcrqjq4plrwp3kctvfgtzdqfehc2wuj2xtgumqlwputhxnxa4t8xvydcctg5p5uehy5e330lt2myg5jkgp2d5xmpf50mae68ke5p2a2qrh6q6jvewc8k8mdl4hkhl3e6jp62pd27hmes9r988sq7r9my85pqu3mlp7fld7uqc4uuvnwxlv95a3r0t795nqk4wzdp9krfy3s5juswz6m2qgpcshvtyq2ttlusvvlvm29hx37vqwqzevqr8jmmvcm9fcw253j7xqh7806xm55qp8jrcxg8d7tt8n6dal876yf7z0ch2ew8ggyue3gwa3gztc549lk28epk99aundancsfsnpsnrpdzquy737sup20ex8zeu9vz3vznyt4caa2hwhqmqrg6zfqt6nuef885mr6s8sgqgf86rc9y9ktcwl0d8rwv96puhfwmretrsluxqp4wymsmqxrn57svqcqqqqqqqqqqqq7yyztnux8cjevrcvjmwp9rvdn2c9hz3d8vewkye8r3sjn5jn20h82vzp5wn6j5pjhv03vzwh4uqqqcxxvg4lypw6rcsc95ej9zpsyc6u0tc6d6yts2985t3du2aku78tcm3g5fjqxxkpqw8x9f6py8crgqqv9cak43yskk82xayn45ljvaac99xfugplgxzkqhxttxgpf5psxpj2wv06yxdcq834j48pu4jcglqvfvc337kkvdkvwmesjlsrjtjh24mv4mnsgpk9ncz70c3qa6kwguqgqcxmqwp"
                    }
                },
                "finalize": [
                    {
                        "type": "update_key_value",
                        "mapping_id": "5264704658190629202445256019375053055338182447064535659155959073486993525427field",
                        "index": 0,
                        "key_id": "4854965077011467425191858432157137048835354049546615391113793427442201899320field",
                        "value_id": "8117665008304420543483143830088391481323169830354034994549202009327021789144field"
                    },
                    {
                        "type": "update_key_value",
                        "mapping_id": "4233591138471949602282894354468374952551988876321338820172589469564923903965field",
                        "index": 0,
                        "key_id": "7699237525995483032337105117673950102919753606893834941188370762668290861971field",
                        "value_id": "3198635398772289994482600896445550540397327191420988851527981433501191899387field"
                    },
                    {
                        "type": "update_key_value",
                        "mapping_id": "5264704658190629202445256019375053055338182447064535659155959073486993525427field",
                        "index": 0,
                        "key_id": "5198336283103057094269315065092902062855910763131298248881029924361664946850field",
                        "value_id": "70247819161673662043818102968877517322696056509613670176726243987625013884field"
                    }
                ]
            },
        ],
        "aborted_transaction_ids": [] as any[]
    }
]