// @ts-nocheck
export const Blocks = [
  {
    "block_hash": "ab1t9zgs3gz7clrqqchrparkhacplemy3uvz2r40wghvj90u0mury9snpfrcn",
    "previous_hash": "ab13yrzz97882u5jlpc2ws74wx35z7ycfmju3ql2ss0uxaqak36zc9qf7r9mq",
    "header": {
        "previous_state_root": "7607058908371492575906976871836502765366840517498785967054762887671436153116field",
        "transactions_root": "3803227048338514175477902107849162132257428614819784688786971410411667489804field",
        "finalize_root": "2347499756727239097527357730627929185508370696360031054030113664724940109165field",
        "ratifications_root": "2347499756727239097527357730627929185508370696360031054030113664724940109165field",
        "coinbase_accumulator_point": "0field",
        "metadata": {
            "network": 3,
            "round": 184342,
            "height": 184342,
            "total_supply_in_microcredits": 1499842577992595,
            "cumulative_weight": 195813619735604,
            "cumulative_proof_target": 0,
            "coinbase_target": 955553777,
            "proof_target": 7465264,
            "last_coinbase_target": 953066985,
            "last_coinbase_timestamp": 1689716766,
            "timestamp": 1689716779
        }
    },
    "transactions": [
        {
            "status": "rejected",
            "type": "execute",
            "index": 0,
            "transaction": {
                "type": "fee",
                "id": "at1n959gzm0hasdnzr67qlwmgkw8tx00xx3v3fl7gvsglq700hcpv8sw66mtk",
                "fee": {
                    "transition": {
                        "id": "as1a59z8upv52u49458fs99wcl8n34rgnj0dyx3tpu98ewzgzrm2crsmv4ucx",
                        "program": "credits.aleo",
                        "function": "fee",
                        "inputs": [
                            {
                                "type": "record",
                                "id": "3097343268796078143698386869679997617626767850806109061967517545692642556407field",
                                "tag": "3018441743481641294803638109234523465748963089488158938731051937438931311790field"
                            },
                            {
                                "type": "public",
                                "id": "5283561658344433379530820592302062550613538726617801722800989324496535242209field",
                                "value": "4250000u64"
                            },
                            {
                                "type": "public",
                                "id": "5486670903932821891380613492976508117843794853622716518341240664476835547856field",
                                "value": "674480196671979631335748024858689967655275236528440079152318578871928191457field"
                            }
                        ],
                        "outputs": [
                            {
                                "type": "record",
                                "id": "6548021632076388450077470702465747200485123582517045223735691247650830807941field",
                                "checksum": "8426123292902378129093747638382588972326569865701998255390486918701368631784field",
                                "value": "record1qyqspreskespj5lrpdekaacqa0fgqn7m8pe059pr45tulqtf99qyukqpqyxx66trwfhkxun9v35hguerqqpqzqyrp4573z5zgrarcxmvs4ac56353hdchl5vp4flmfwd3uufvgemp0dm5etegkgps5usxfqdyx77rsgrnj3xy64ajwsv9qcly4za7zssktlrdym"
                            }
                        ],
                        "tpk": "7306731657793332172404896170281419550735304792563727311483913895883906918074group",
                        "tcm": "1267032765158503568216819278465338715828631146204820194918628221001727659476field"
                    },
                    "global_state_root": "ar1dt5rka737dkqwsdc8vm4hv7nqa998megw9er4fvvv3j304ygnc9sr472hh",
                    "proof": "proof1qqpqqqqqqqqqqqqpqqqqqqqqqqqqzqqqqqqqqqqqmkryqjxka2jd06crxyd9vrmflp208mmfa837k4qhepwmaq32uj0jrf57d4pq4cqkwlqtxlkjgfqcprkq9nenscgnsnas98406znzgt9yas0nz4edl6rtwcge54nm29k0ylq5jgqag2sf5y6jpjd7q9nvqx7gkkk6ta0l06yjgpq3pat9vkmymgj53wy2gtdp92zxzss0p0hphkshrdrp4x7gcuyh8maesftq8q06j2s74tvw62v8ude02lamtvsa2fd0dquvydplh7f3d659n50a2798jdn4ekkf7k9q0z9k28vf6yqr6rf5vzs5g4tcnurhqs5du8m9gd9qj5c9jvs27km7gj7ewugmsrvghq0mjg9l9jgsmx2nln2f9tgqmcsd2gtjkxlvzfpw6e6mme7m0dxvz0l5n730tfj6nlaparh8e56ydfmj4ds0w7cpsx3lalzwfj8szqdvnktlduhn6e6pckvd5txywewarrl08evpm5rnqa5ds2v680d79005tmwcslpktpxuhae6z8gpcwqy4pvjjfggyg2cw00cr72ptcp7tm7uha8kqkaj0zcnwua93fzqtnxvea7q42h997lukl90g9sn4d5qtmxhs5ancdfn3wnsu0k85xru90yuwxr87xus9ecyfawlxjfdm0r9fypvcx3dex0hz23g03am0l8gq4t33ez4lhh5yaq3rzhn6atkegge0cze9ywgpnjjtthukyymhzjc8j9my3swt2sw2vz0cmnfwyyrs84exwzgqlraxdqj8qxyd27l9tlheven8eh072wz7lmlx4reknhc5lpzg8ea96hcuupeva8nx4xreqygfvt9ke83jzm78vtd7cuc22pqlpcdgcr4ljpm9zd3ey28jwywwzd4hyadyy8z2jcsf9p36rcxz7qgkwpwqzd45srvf5m56jh3645wdu5cf9jzsl9na94azswnjhr49v9zc48gupl6lm7lagjw3uu9jecql846tw54uaztaj24w0uyh2xmtjtgcez5pr2dm36r7wlklzpzyz6ayu80hu20rlz5ls7e5u93ly5crhdxhhx44m9ywst3gyphqrjajdn969l586mezjxqtg3nn3xpg6rzl6tglrfh2244u07c8y3dmyvhqz2q343tqph7m6hxx3t0pmu9xlfr7sugfazfjs5sak69umuh899k00ghndwg949xs4su86nx8lfnnq0kugpc920dugd60c6w8gxu49kykzfff8pepksw550wpj2pyyczqj6t2n57g7ul8zq3c42agh4eswevml5sez86y7gdh768d5y2lh7qax0tf9ra8fr8emuy45nj867gvdh2mrtq45nsggf43sjyrv6jp6s2zaawar2txzy4rwstehl9m50rqluc0zta5ywtgu5ua2gx4w5ssv85pchng5zdnmlhfcxtjzpkcyjstjpfsf04zt6k8p8nxkgcju49qzn0xhh8vg7rrn344mntqneskdhkwlrnkzjl8xmktltgymhyzx4up9t8gwr0p0sr5d6qs9kk34n2kr6d3znzkmq40tjvy4wxe8gxx9ss048rp6hn7gd5kz2djczvefd0dcmzra4lsxwd4m4m7zh3jf80jdst7uc2nwzzpkahlasxcnw2e7460gj59dwjj84elx2elwckczs2l5zsyqqqqqqqqqqqtaghepngg57juwsnt60730xlcm08gtw7l8ptfg2x7ns0e98ym58x4nazpl8a8528djxnm3h8dz79uzag2v8jd5u6ujlrzwp0jt4v7pnuw78jxdaewv26099u72nj8ky9w44fvysu5gc02hypc3mzvjp2qd0jpg5sdcdx24apk2a2ss4vfjuxsmx7rau748zm0q72tjggtz0snwal29yc7ur0mu2ll628km8jqxlnxa956xeydu3mx2q3ccsnmtcd42jpas3jegmwrchs42a4ahm504phcnt5l45drk4sdwrrf45w2vgsyqqqqqqqqqqqhm2lp2anncrdmasdskut9n53p2ax6nxjn806ae3xmym52dnceykc27ng5ez33dr7lfyfv62vt4qczqwsf6l2frsrmgvjzlpw6eqja0dx23t4lj7epch62fl35lfe2w0vqlpsxjdqyw53m4psdlmehng2y35xen4ajl43ens7s53sc76xuyyj8s6zl9j4r3ua724amrg7lp4zkqgqqqds3vg4"
                }
            },
            "rejected": {
                "type": "execution",
                "execution": {
                    "transitions": [
                        {
                            "id": "as140392ke9h95r54f26gdpv65rgd80m44vtqs4r9h9n05m8rm9nq8sfte2vt",
                            "program": "privacy_pride_nft_v3.aleo",
                            "function": "mint",
                            "inputs": [
                                {
                                    "type": "public",
                                    "id": "7340461224227229017901843537269481054731359032068185346765350413543722740053field",
                                    "value": "{\n  data1: 69390816523831200609174761217431532144u128,\n  data2: 121424956763701u128\n}"
                                },
                                {
                                    "type": "public",
                                    "id": "7748337789401830850156103262143747837973337546966901551553700417518673044658field",
                                    "value": "0scalar"
                                }
                            ],
                            "outputs": [
                                {
                                    "type": "record",
                                    "id": "6001468303247951737131843992569758410176722567121272366125927688922723638572field",
                                    "checksum": "7895364736348286021930044114628943083977072494011058205260400101377867395939field",
                                    "value": "record1qyqsquxjuzyyzxdl5u0d5gntkcae2z20dj86qyhn8guhyeknfp25upgvqgzxgct5v9psqqszqzetj4aceygnu2xs6qec7vt8fuwfpcuzrtrvezr2d5zcyt9xre9sfeg8lz0pvm7gd85fm8cyrj7ml3qddqqvmpn32zlv0ucjmufzdzg2qajkg6t5d9hkuscqqgpqqmvkecenuqcjv58gxnvzjyd3lkf9ylk6f3gg2r4t977a493wvqs85pf0qpxasluufftlk9kwg7jeak8r0v02fwmj57mpxv30rq8x2vxkmryk3lpu3dm58zru2vfmhdg2k2kevwmfhr6mhsq0uvdz3k8njzqmkze9r"
                                }
                            ],
                            "finalize": [
                                "aleo1erwvjl82ltqfaz6455mrqrvuawntjn2666z6a0v5fus9tsna0yqsczzcml",
                                "3017626230365776949572611091140042588851681158522951022511252959770072239462field"
                            ],
                            "tpk": "4789396658993166780747555030294668270424467394670162864853338546832790811690group",
                            "tcm": "1044778264168550999747685114262060811958433095415615692166666520622547673680field"
                        }
                    ],
                    "global_state_root": "ar18rtwn23fcessp77htcmzu8f9enfkqgn9rctukjhe6h5kqkeltuxqt8lcyh",
                    "proof": "proof1qqqsqqqqqqqqqqqpqqqqqqqqqqqqaeu30p4jgmw267jk4t5jwwj242kevu98hpjzmlryjpkcwxe2mma30nv80ef7r9tdve8de7a0swvp4mkp9948denjq3l909hhlq6ra690f8vp6w3z4s4y3kpnldxuxzjhudw58a3uqnfw4ndppe0a6fncq50wpr8t3qxk8xfryleyvlrxwm09g233y287vq256hdqzhcjp07u77jx3keqt8kq70yl7evy7a3fsqqn2naud648yjrx5zyluyg072y35xt6dcnm5sa4yplp0f42tynhckmchateka7h690ddd4vk9mqztgpcy8lqth3h0aua24k8fvkvle9z4pef44p2ypzhf8jyfsuwer2ytmvqttjgclwmlezrwalrecldu0szfqnkefntxhv06njsmsglfgcwf7sxyk978zxletgu8zkth7656z8sh6zywlsa9fahwd2fj3j5ym4qzkdyuc8sjn95xe70kfu9dj77pq78ktv7klagve2x4rhdeahmekddaegfd8q028027l5xas695w3jqtsnhtfu83vrd57tqfec964r7fsc042uua4jwy8rqragaxxugs67zs2mhpfxgmcs83j7ws40fkca5qqzcj30ktq76t4rch2ad4d6ng5w497j7cx9xdcv9f5lnmm7kh02k22eqnx6m64ynygxupc4az66t5q6a3zm3wa6mdk5x6wjtsa69nlpvyj6jav9v3sa0xjslxg7as5mp6rxugqkdy6l273948v6w8vmgdszp5psmz2y4l9t06zt4t34cwyx4putlcqeyhudrzt2djeg0cgd3qsttrl8a95le0mq9rwq4hms9xhvh8ajsnwpr5vuwmwj0phwskp2yf2veyumjdw38829h0jlk0l3gjdejw8pxymy94s0zuqenfnz2evuq2gdp7n6h78z8mgnrpt35qdc7tlr4lwlls4cwda3qmpfldpl3l3pgejmmptv5af3ujj34ga7cl66xrkhjvegfvq906fa6adpxvvj74sqqgqqqqqqqqqqrc40kd55t73lqzkwr3df9tqzfwy4t4n4ssthgmyenrysmh24hgsz4r6gutzas3fc620lp4k9k4dzhzhgjd5ta86gprq74wr3v7vuygjp2pgvy99p44zwpajqnr5zh7amva5dyv7ycuk69vugpd6t4l7xqgsyqqqqqqqqqqqq3rec549s6cg3xty5njh8khha2el9u2ffwwrl8zrhxgvvq6gdpkwl2cfrcwgqfq2k8wpdvr6v23szqw6fkr4d95je9z86p3637n0gdpjpeun87rg5u9lt22mm6j6xa99q96e5nd6gd0qns9tn3nyz5036lm69zt25su2f5njazdcez3v594gkvmkj7ntn4edmejhv67sxjywkqqqqq9d6h65"
                }
            }
        }
    ],
    "ratifications": [],
    "signature": "sign147cv5590ny4q0rzluds37wxl06sf0gvkxxaucnfyqhqc34tpuypsdc7xfpx6cqkmhzx7shr04x3vn8fy3yvy26fmjkf0l0rw7w0wxqr7rawvssddfv078wthdpqynfu3jh5qeruups7t7vyls3jxccnypxa5z55an3zwd9em29wrjxmpyymwflclchtzhr62hwthyumkge2qggdlee0"
}
];