const tohex = document.querySelector('.tohex');
tohex.onclick = toHex;
const torgb = document.querySelector('.torgb');
torgb.onclick = toRGB;
const rtxt = document.querySelector('.rtxt');
rtxt.type = 'text';
const gtxt = document.querySelector('.gtxt');
gtxt.type = 'text';
const btxt = document.querySelector('.btxt');
btxt.type = 'text';
const hextxt = document.querySelector('.hextxt');
hextxt.type = 'text';
const p = document.querySelector('.p');

function toHex() {
    var r = +rtxt.value;
    var g = +gtxt.value;
    var b = +btxt.value;
    var rhex = r.toString(16);
    var ghex = g.toString(16);
    var bhex = b.toString(16);
    var hex = 'Hex: #' + rhex + ghex + bhex;
    p.innerHTML = hex;
}

function toRGB() {
    var hex = +hextxt.value;
    var rhex = hex.charAt(0) + hex.charAt(1);
    var ghex = hex.charAt(2) + hex.charAt(3);
    var bhex = hex.charAt(4) + hex.charAt(5);
    var rgb = 'RGB: ' + rhex + ', ' + ghex + ', ' + bhex;
    p.innerHTML = rgb;
}
