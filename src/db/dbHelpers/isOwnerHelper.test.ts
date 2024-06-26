import { getIsOwnerParams } from "./isOwnerHelper";

describe('isOwnerHelper', () => {
  it('should return the proper is owner params', () => {
    const ciphertext = "record1qyqspf8z9eekgc5n8y0crj888m0ntz84psy3mrvhfp9sy2ea462em9qpqgqkzscqqgpqq5q752ylzzgduf0umw4hqafac3d6ev66feeydq4yqu9cj0e5ynqwhskrr53e4y2a3tazl7vfp94rczxzreqmxs6e4lsuvl2hu470myxqzcjrqqpqyqxyxjxxlp0a6m25sma5vgjn49ztqf3wvu0cx09q3ptjf59k4aarz9sl3flmy4lxsejs46h3nhrtap4m4tn3sck3lydeldlhfyg50vqslc83g4w0qmgepzdv5du8dyu0x2vq23j6w6f427qwhwfeewk8qagy4pgcyl";
    const expected = {
      nonceX: '2016750155015946223571715434844209788877821160354888560725125885865243308512',
      nonceY: '7938258504081803823154387393255182575777893538346777035427539472279181610416',
      isOwnerPublic: false,
      recordOwnerX: '714893823728468600675761918309323693241003493725267011110794200968812487332'
    };

    const foo = getIsOwnerParams(ciphertext);
    expect(getIsOwnerParams(ciphertext)).toEqual(expected);
  })
})