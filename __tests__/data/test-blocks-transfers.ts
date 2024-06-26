export const Blocks = [
    {
        "block_hash": "ab1qutk3nptf9k7vl5nnxtxkw0mtuwlda6ke8ljnw5r7pm2fweqjcpslkpxpv",
        "previous_hash": "ab13qn43rrrg8gypqtckjk5ns4vwl49842z2rge6a5pcppla8mtsvyqlsl5p9",
        "header": {
            "previous_state_root": "5501477808718013461257222192987772178891042690264904023322978590958196595879field",
            "transactions_root": "5055199952957356733429343023066185839512539857110370772188778532073251323073field",
            "finalize_root": "2347499756727239097527357730627929185508370696360031054030113664724940109165field",
            "ratifications_root": "2347499756727239097527357730627929185508370696360031054030113664724940109165field",
            "coinbase_accumulator_point": "0field",
            "metadata": {
                "network": 3,
                "round": 2593,
                "height": 2593,
                "total_supply_in_microcredits": 1499999886286133,
                "cumulative_weight": 6853856072,
                "cumulative_proof_target": 0,
                "coinbase_target": 3561551,
                "proof_target": 27825,
                "last_coinbase_target": 3552283,
                "last_coinbase_timestamp": 1687407655,
                "timestamp": 1687407668
            }
        },
        "transactions": [
            {
                "status": "accepted",
                "type": "execute",
                "index": 0,
                "transaction": {
                    "type": "execute",
                    "id": "at1t4l8tf4knhtt6m03ggsm9yxw0xyfrs92tlzvmdfmw070wsdzyyrqsg8dh6",
                    "execution": {
                        "transitions": [
                            {
                                "id": "as1zrkl5rxas95t2nx0ph7s2af2032th8p7rjacwkte8jrpst5x7yxss94alx",
                                "program": "credits.aleo",
                                "function": "transfer_private",
                                "inputs": [
                                    {
                                        "type": "record",
                                        "id": "6483628371757783060775107718123858286361638754258194309710416735499754712387field",
                                        "tag": "3158831274966632342524008550618271966633459965349315729807022429704242590154field"
                                    },
                                    {
                                        "type": "private",
                                        "id": "3049165966102252734341264085252735308294090050791261963800286470125480266142field",
                                        "value": "ciphertext1qgqfdd6jdrlwfyf90u2csyysxtw220qmt0ghge25fx2m27fle9jkqpy6ydv2dlsszhxryw9d44al2mjvyxhjpxzrkh9y5nee4x8s6frxq5x2rgxp"
                                    },
                                    {
                                        "type": "private",
                                        "id": "7125876280879831488840415960540721366691169001605989441897322759070037464669field",
                                        "value": "ciphertext1qyqxsd4y84ekptk575ljgm3wp4yfhftmej363h3pz7xam07kv5ckqqqaytxgh"
                                    }
                                ],
                                "outputs": [
                                    {
                                        "type": "record",
                                        "id": "2108987006511653200472527815084494782198063362502389263516543510834737215160field",
                                        "checksum": "656140025398329150477150464100021949104815320484399944187023725401552589437field",
                                        "value": "record1qyqspac7caf9fewuqd9jntpzufw8z9tqax3g5d3juqmwat8jsc9kw2sjqyxx66trwfhkxun9v35hguerqqpqzq9jxa7arpwl9j6tcqz7wg4fz2tx2g6ceh2zakh90y5d7587t64nqc3pl88et2sg8dv56ht2eaw60e7mulunzw5d4ke69lgcxwgw262qww8s528"
                                    },
                                    {
                                        "type": "record",
                                        "id": "1760468440977103802801991764974207854822653079583659260746165114871108906600field",
                                        "checksum": "5156907462195543330016648091535066671319206708010606643621685836125601802444field",
                                        "value": "record1qyqsp9l4k8zrsedxrvt9u0utv5pn4wdqu2d3p0azn05rdm227fayxpcrqyxx66trwfhkxun9v35hguerqqpqzq9jvx9dzxxns07tc3eypt0cqmqxwvcr4twd2q2h3qh5kwkphspepg7kzmttmpucq704pl9kplddyuvdtrcve8y7x4hf82tgmqqgn2csyj68frj"
                                    }
                                ],
                                "tpk": "3336901232134605567614152398705853064207370421202489564747100799257958170752group",
                                "tcm": "5737956875946192925359457087585720431819111935187726215911580965787276509171field"
                            }
                        ],
                        "global_state_root": "ar1kfu4wzv6deggfq8vvgewhf8n4hekxgv75q5v0ccc34e93470zs9s2y0h7z",
                        "proof": "proof1qqpqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqpxpcp7lyuc9xktdsu5ejzlteaxymza0cre3acqy7z9n5mnu0vq8rmqagxwk2etnwe88sf92lmq3gpwhurtm8y72uc60a3dughp7qm082p6443pksy4g69r4wn82s8a73hzvvc2v0lsr505vuugameeapqqt435htvjrw03278tyvjmu8mjeuhrs8j8juvqnwl53fypswsamykm3yrnjjgx8xkarhet37na5xkqq6vmhmtc3srg32zhvkp4xwyzl5hpjplnjsh7nk7ywnrx98lfwa5xxpqw23ehjg4zcyu6hwjq2eu6qvv3txz3lhsajqen0xzmext3jzn4yzezsws98v7rdhh4ert45e5km6e603fdzy5f4ny42apzyq33cqc8r0e9tufgzgmyg2wfd2lh88j23gy842xcl3cdsx372guq7uu8kq5nvne2r8dz2cnqrf8ymzxgsczqw7vepkcjykgcprf0qw4tp3en5m9seszc388qxknplfkdsaksnj2lz5xf82nqrc4yhjgp78uqkg27qzvc93a023gwryze32842ywvqu884cj5s9q8h0vuvdjajadh646j4vga69nzw5fx0s04c4ycvafkcqrmked8g2kvr9em2xppnr6s3cffv7hy2ld80v9vvpxucpe2t65nzrs0n6r70480h5jns75xc4unnqptv2x7cjl7fylpnq5k69ufzxr4p4yahsp7gsvp06lu897lq2vk5n8q82jagc3ga9qgdut78vp2s2q83lrtm5498jm0y6x8xhyjs6k57ak0f7ggkqj5ynpvcv6vsk6mkayv64u074ne0jnmvk2ymuzrxmaqpxs8mvpluqgqqjlqufe7xw84lry47hzm5rdkd0y954yz5wzgnv39wf40w46ltdusz6nnr566ww92q739pqscm520mh05z45twk0vavgpj5al25qnzljcr5wusgklwsena9fuxf4ug3jt2anhuaekvk4nqqjagul5ad92vnlnw409qmd6sggkzry2jey95y05080xqgyk65vhqh95k838u7n0e3rsd0t28rcxngrxa3m9tsspsvr4egdq3cvjq0k9kv0734j230qq6skxc60cl57hf8c67ef9su7hxgsuqc603x8ay6sxff80mrq285rrt37ncjw972aqn8djdc2ekn4tsezr8y2yd0ckw69kw0h5nwdj6tzlpp9ayjfpxgxqd7kgj9cmt8ttzf9h8ltqp96dmym86z29eexqf458hxec0w8wzmqxx7f85dhh0e7c37f8062pt05e59gnwxxhhzdtgzk4eg76t7wh7stn28wasus8p8yq4leuc2025qnp0qpcsfjrt6wy9xgqc76w6w9ecxnsrf2qr6ctwkhx5m2m9vpdx76yh8svy644wuxjam0pxv870tucqeard8cna2us4zew8zqr2a2vnk9fn3kg4ulvst8mzwp99sa7xk6phkl5ye274zhl29f796esfvzmjeygwf9jxsfd8ptgjkrr7jmwgrqs6zpsxxj3f2gzgju27smsn40x8rfk04fynv04ms5usunqzfumls435yydv2cxtjacdg4urfj6uejwde8mjckykcm4lus7xgh73nxxsqhtuwg22ruxpcexcpeh5rahj6ka7huktlxdyp3rukcyptnchzgc8qyqqqqqqqqqqqy4xugxmeerfgkc4zwu0lphu8rfe3nnaamm8jkjwuxnehp3ey5yru2jc4rdj7zxz6qaj8f7d4lyd2zafqm9g7w2gmve3rr75dd8hlurgqmjgq2dacdm8t2pzeju83lgkt5ghatxcxhm3r6vk7y2mtgmzgqy4q7mj8e86gmjz8u8ckw96thyx27xe52y00r73t2zdrjuq8ncj3p6g2pdfej6a5esh6p3qpphpdz6u2z3qr2a7jlwnyg2qms4rxm2g3feapx00877l32gu5j4rg83kkxktpaa7gm9gvq0p3acvg76jx3sqsyqqqqqqqqqqqzq4wcmqhzdwqyazvlpd8as7l77esez2t0fvj4wxt676h3xplq8sgdq6usym3k7khf9sfenys52nsqq0d2yxhs5yswayrjd2vkcjvxzhvkurluvjzw7sydel545s4x3zuplpxkyq078r3vws0gav3y5vyhdn8zmvuyawhmpr67v22ypf5ppsv95qr9hlxu0996ztdz90s06te0qgqqqvplx84"
                    },
                    "fee": {
                        "transition": {
                            "id": "as1hksqkmy9cpkpl72vrfvn5l3fg8r8zfdafr4tv6sd5xe79f8g5qzqptf29n",
                            "program": "credits.aleo",
                            "function": "fee",
                            "inputs": [
                                {
                                    "type": "record",
                                    "id": "3830514163883342162829965687556759187040361780340925159955377079710027188903field",
                                    "tag": "6254990225630355736277304894752204323716362108965872985660846014330344777581field"
                                },
                                {
                                    "type": "public",
                                    "id": "8289436618681000562934209639458572590468517408157913239413461124571572386141field",
                                    "value": "5187u64"
                                },
                                {
                                    "type": "public",
                                    "id": "7314563592334660562231680326375781537623943814194392288674634075518287896166field",
                                    "value": "7700961920986684168328395674988248252838261521954350643451374176468860773982field"
                                }
                            ],
                            "outputs": [
                                {
                                    "type": "record",
                                    "id": "6287541632902835881171962594080627824032970786087102320285333331753177383597field",
                                    "checksum": "4784556134382225362207731426574647261286379598483974364489267318911946489222field",
                                    "value": "record1qyqspl2tmwup4vtcxg3354p3rgr0zp74u4fw07ngemmngnlem524qxcqqyxx66trwfhkxun9v35hguerqqpqzqytdv42p68g2w6scmtzfqsxhn5fazwke376ekg5rm9jqnwnudx9ppuhc8fm37a9626pzzwhhranawausuw9kckl8lqd43hn4cgpx2ksk7rvhtv"
                                }
                            ],
                            "tpk": "715460383664187467687343895258167932687949775191856661250535455537328813699group",
                            "tcm": "6704266336155763191775549923980011457495325433301393454468292966936540193122field"
                        },
                        "global_state_root": "ar1q0zgw5ujte93pznq3n5thuemtq3l54xmumdekf0thr3kpv2v0gpqqukkd0",
                        "proof": "proof1qqpqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqqdwpr90cd08ekqprwtat6cs4regwgapjm8yjj68g2qwm0xmjq8qnpr6vuddalcez4zduw9kt53wcqqdngdnsv7l980svd90zwxwypvj6h2j37hz6t0a8nu66tjqskfy3rc2rlagry8pzfg8qxrgm9xhqsqcnp8fcsprwek7pvqplt0x77vkuc5cfssq8qk4av6tdtw3gegf402fs9v2fg7lg5rspwzlfv0zfmqwpt73f55rgzsp048zwj645tqkwpvv3ed0fwflwfeexqutldsef9leqvsvrzfsrv4d0d9ac7ut7nsq8ku7rzlp6nrdan8e25qc5fha85cu30afmzqrwputwvjzhzthwfe4j0mtuvzuvvemntkal0yuyz3cpsp8k2r2wc35s3y6y7nylamyxa4ckh3cjqgkcpwsjzcg3upn3fcvm5ulsvr5sae4lj6s7vqks7syqqqg0wf5y8dwsldy0ctw4twa26dufygx9t67sjxm6tvutn4smu0km3ucgflw8mf4xn5umnhnre3gtyqq3sw48yeshxvkmjr3su9u7509usn6xulc8ycgywdu3n3j3attjwr5q2swuw4ne2e84yf6q2lhe39uqsa2gm48hzx8sd25jxps9hl8ega82ha0syg8qek5g7vnz8ylfguzypc6hqqw77ypdhngvjpczjx4czkunvfuk5fy5888uk4ecuj4u4tzacgv22j3mem35gk6nv8h22jzzmj7j4exkwrjxyv5ftztjxc2fq8rtf4awkwrvpv0835hg37w8xlujdr3sg8c67u0mzyew00xk5fhrtrwcpz0xk6wu6g5tvk6kw5wcjq0y36nvqj76wyl05wyds8rzqlg4t4h2anef6zg0hq5qgflzrw7fsj7vz2m3jfn3l6sl7vv2egtm5jqzqwuk25e3ze04w7k3ytch530pjjmgzcdjwgknkemhlgmknrh9znrkswlshm3k0t8ls6kd26tc9tsq8cnn5yqv3k9q8u5wsq03s86lrjfaa9eecusde7e5jxkspms6fltwvjhzgay35ptwldgel80rpkygr77g02y5nfpshwv5a6hgsmv7m5njm5vr0pvz8sc7hhkcqmmc3z00a8xj9jylwnt6l0gdtn9ffze3qprv0ccwpllzptluxh5mf72rf4y576vlwns3vm7ghuhr2wzavyjvuh023ujtahz7v3tem22d3nj5hq2u3fp2nyu9uw4vl0xpx0ryzenranwnsafrmn4n58agd0c4rtk8p0mlk4tvx2yp87253h0de2zjhzdkft03tlljen787rsr74y5fn6spj6tu2kghnz25qeg7se7e6rxhvdefrv0gwsd2mafvgash7gphyqvqgllnx5rgv4uh59wvh67rna3dn0c46eqy0rhlnuz73sucnd4wsfr5g6qtpupdytc8chyskfxepfmda9slm0t5ctzfkxwxrevs9nvvy86rrql2n29f4nyrqkjmslz9d4f5je0pglrcvzct2uxul0ycnk7p0sspxquweqf6f07jy3d7l5u69ck732zewmat2evxupdm4dzd9dqp48npnaj85vjhlgljq6awyuwfxzu4k4axlrmqfqtzut80vs36jcsegncywz0rw5cfpzycs6fjf9rqn44rrw9qw9q62vz9q4l34kalcyqyqqqqqqqqqqqgj6h7z94fd0sctfkckffqt2dey4vgpn9zf92dxsuay2yeajm6sgf35geuglqheu6aycr878xw70n6ly24nhh64we5ve880xrw5hu5qrsndqranrr04n5ffz6kyz38xxuc9fmt5cumgq3fxs7wx30tfrlp7lg5wp85zktpnceg9jkavsz27f4gmlguc5gd2qxcandrj58lnzqmqsju9g4w6cpj4chxh7npzzzxrvwyrltvrfjq9ch0hyly0tmwmcwxmf4sf0teax8qc0cfdau5ehk9yxsf9wj79scn8u2qavkgykw4ugqyqqqqqqqqqqq32t0hrnu7mtmcrckhcj7w2z0a2x47hewn50f2naw2fdk5c7sndwly4hjzdjlqarwdvukseuvuaesqqw7k3gqe4aaw97z3glmp3lkps2hj9hlu07yxjztggajh59ky85mp3xh46s0qcpnvyr4lr856rt0xpduglkxq2s2lf3kjdzxmecrpp0w6p8r45ntl243ghzsh543d7efhqgqqqr5u9h2"
                    }
                },
                "finalize": [] as any[]
            }
        ],
        "ratifications": [] as any[],
        "signature": "sign19sxaj4vxgen5kz5gqsx745pdfhqpadx4e62jlnryxmckqpc9l5qxe6k3tjvmay3jdc5acrhgtz5p88aeudv8zt3sugw8wry3qsztsqm7rawvssddfv078wthdpqynfu3jh5qeruups7t7vyls3jxccnypxa5z55an3zwd9em29wrjxmpyymwflclchtzhr62hwthyumkge2qg94vv5x"
    }
];
