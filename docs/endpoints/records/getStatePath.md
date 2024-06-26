# getStatePath

## Description

Returns state path for a specific record commitment.

## Method Parameters

- `<empty>`

## Returns

- **`result`** - *`string`*: Bech 32 string representation of corresponding state path (prefix: `path`).

## Example

### Request

```bash
curl --location --request POST 'https://testnet3.aleorpc.com' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getStatePath",
    "params": {
      "commitment": "2855275417726114851517553745542581483962194733481247281100772190297829698731field"
    }
}'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "path1qyema57606uwqjj0huw8pu2kfeu2z2acv3gexw76s42jymys5wrq6tgd9qqqqqqqqr3mfsyffcl9u5wvl9jt2hnxw5lhw52p8c453ltjt0jnp9zh0s5py4z6yj7n422a2efpah0hu92c8f82w479ca2lmus6lh57heums2gp6yjum0m62mz4v68vptupeczun4d03g8m8me3gkvnnjhqtd3l2vqu8p5spjp9eng3755lt3g9t5sn7vm7y98ee7wyhmqdvyp0r4xh2r3d8d3c8v5ve8a7e9l9am7rjvzz952w7e7exhf96jev4u3a7tcdpnvtvgckzpd62f7ardwfaqm3xla8h6lv3q0y55yy9gxdkg2f2yrs2la6ttgdw48xp0ssyvtzsp6zf8m3m785f0d00p99x959xp9nf7qzjtcj7prpja4x2qa3jpyamwg3mt8kmjkee3g04apntfll582kuvq346jjacfkmcdrs3ug8mu5dlyjvcfaa47l7ce6vlcq4wa22jnx7p2zgc4undw94lpluyhpnnd7urr3zakh307lund3r49zyvfgy9mrphp0u6p6kqkmcm4sxcrweljsv3vayjcmk2vl37xr5fkqr9v9pttq673qnn63l7uzue62tkgtf6ngdqp8fca07hz648xa7a59eedxaes3rpv0f2kq2m2pvfnsytsxwxrc0nzv8fx3nel4yydaxhekqtcyzqyvugf6snydydcva4h9apwqaumfmdp94at4z5l37xmpflu4z9n9vzqgzacvr5ak703sfw6p8mp7ajjxqy4fzsksuddjljmkpdrmvsxpqaam6uvwauljct64ht47lv6h3rrhwudcj8hjrav3s7vvlk4h2dnspznz5045rud0wd6yafycjagcvz05zyajsjpp3p73vd3wel8xn6szru9gpluc57kh8dlm3v8d3c39sxfecsder36jfk7zjgg6hde20u9flu5eatue2etm0twwdty505y39s4qs498t0ktk847d2ymfgelyrlaqqg6lhpvazgfagtqx2pnap94rsykdtclusu2m0zddgqk35lhzyuu6caw8kzkmlxmcfpfzduxljqdfsm6pe7x6lr3fwntcdyfpwesclwwsa7c80aa3xlvgrnm2ghfh8pnn20cuzjys3ve6awmwueg8rg0ss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyu0t93w25s6z6rx5hksh4x7fjsr6wezjylfvaa8xn06yqc8sfqygrdtt6z44280u0v2cayu85rq2kpvqc2ydqvjwmsh3fr8aypg4gup5r6s4004nf6tnxdas0nz99xxlh4f38w27nc8zedeqk50eqaxnvqgqsqqqqqqqqqqptzjzuk4naks3p535wxrr4h89sc29de3vpk7vy9vpmfa6pyakuqtq2zmet893ve4r8l4xw242u336ce4hct47v8a96celcvcwq73ts4zundgvx3n36wq585gd60uu3qdd0wuwjkqsnwtu7ee8syn9259ctqxk9uf0teenkyel2qjcjaa3jgppj9743g49vq8rxe9j0ve9cj06ssqqqqqqqqqqqqq422mferjgjm0yv6lyzwc6cjduwtmugnrrz0t0hke39sryztv9sxgz8xdqylx8nqmhcmudvfl69d0jpsj9lspq5zvhwd7qtf27f6vq2xqyunfxmdl7e45dvksw28xul2x23kg8ma3ju5zvsnkdlzcu7xsygg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqgza6xz0jhypc42mhk55qz64agm240zfly32hf2uft0praxqng8sxqqqqqqqqqqqqq48z9pvykn7gdeav3qj37m43m4rf45mn3s6sjfct04w20uks7ws9ss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqgqgqqrtcxdn3kahk4m94th0zjtz5ycfu9p4ylhjxgpfr2u56jfhwydxs7ryu6qfsj2y3dz08wahkqtz3jjuc3clvscjvlmz5uus686xq6ucycgh4wu8wmj0s4ljnj20zww6ymtxgz8xfphqsat0v9egtsv7a5vrsxqqqqqqqqqqq7e0z32ttf8tre0t9lzlnqr7r6rgxl76tdlh6ppdtkypj3842svgy2y9q8yy0pnvkxzl7tgs8dnrj69axd7sfjcu24cvq396sezd9uzflv9aaf7vd69k76ugpw8h0c02sdjxura0mn6pqqxj27jfp6selqxzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyqyps82mv63g0ulfm42tw4ek8gwfkx2lwj6uzdmgs8pnek2xjd9fsw5qxspjjle"
}
```
