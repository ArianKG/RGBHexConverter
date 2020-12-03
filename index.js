function rgb_to_hex() {
    var r = +rtxt.value;
    var g = +gtxt.value;
    var b = +btxt.value;
    var rhex1 = r.toString(16);
    var ghex1 = g.toString(16);
    var bhex1 = b.toString(16);
    var hex1 = "Hex: #" + rhex1 + ghex1 + bhex1;
    p.innerHTML = hex1;
}

function hex_to_rgb() {
    var hex2 = hextxt.value;
    var rhex2 = hex2.charAt(0) + hex2.charAt(1);
    var ghex2 = hex2.charAt(2) + hex2.charAt(3);
    var bhex2 = hex2.charAt(4) + hex2.charAt(5);
    var rgb = "RGB: " + rhex2 + ", " + ghex2 + ", " + bhex2;
    p.innerHTML = rgb;
}
