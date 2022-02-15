let a12 = parseFloat(document.getElementById('a12').value);
let a11 = parseFloat(document.getElementById('a11').value);
let a13 = parseFloat(document.getElementById('a13').value);
let a21 = parseFloat(document.getElementById('a21').value);
let a22 = parseFloat(document.getElementById('a22').value);
let a23 = parseFloat(document.getElementById('a23').value);
let a31 = parseFloat(document.getElementById('a31').value);
let a32 = parseFloat(document.getElementById('a32').value);
let a33 = parseFloat(document.getElementById('a33').value);
let b11 = parseFloat(document.getElementById('b11').value);
let b12 = parseFloat(document.getElementById('b12').value);
let b13 = parseFloat(document.getElementById('b13').value);
let b21 = parseFloat(document.getElementById('b21').value);
let b22 = parseFloat(document.getElementById('b22').value);
let b23 = parseFloat(document.getElementById('b23').value);
let b31 = parseFloat(document.getElementById('b31').value);
let b32 = parseFloat(document.getElementById('b32').value);
let b33 = parseFloat(document.getElementById('b33').value);
let c11 = document.getElementById('c11');
let c12 = document.getElementById('c12');
let c13 = document.getElementById('c13');
let c21 = document.getElementById('c21');
let c22 = document.getElementById('c22');
let c23 = document.getElementById('c23');
let c31 = document.getElementById('c31');
let c32 = document.getElementById('c32');
let c33 = document.getElementById('c33');


document.getElementById('answer-btn').addEventListener('click', function (e) {
    debugger
    let a12 = parseFloat(document.getElementById('a12').value);
    let a11 = parseFloat(document.getElementById('a11').value);
    let a13 = parseFloat(document.getElementById('a13').value);
    let a21 = parseFloat(document.getElementById('a21').value);
    let a22 = parseFloat(document.getElementById('a22').value);
    let a23 = parseFloat(document.getElementById('a23').value);
    let a31 = parseFloat(document.getElementById('a31').value);
    let a32 = parseFloat(document.getElementById('a32').value);
    let a33 = parseFloat(document.getElementById('a33').value);
    let b11 = parseFloat(document.getElementById('b11').value);
    let b12 = parseFloat(document.getElementById('b12').value);
    let b13 = parseFloat(document.getElementById('b13').value);
    let b21 = parseFloat(document.getElementById('b21').value);
    let b22 = parseFloat(document.getElementById('b22').value);
    let b23 = parseFloat(document.getElementById('b23').value);
    let b31 = parseFloat(document.getElementById('b31').value);
    let b32 = parseFloat(document.getElementById('b32').value);
    let b33 = parseFloat(document.getElementById('b33').value);
    let c11 = document.getElementById('c11');
    let c12 = document.getElementById('c12');
    let c13 = document.getElementById('c13');
    let c21 = document.getElementById('c21');
    let c22 = document.getElementById('c22');
    let c23 = document.getElementById('c23');
    let c31 = document.getElementById('c31');
    let c32 = document.getElementById('c32');
    let c33 = document.getElementById('c33');

    c11.value = parseFloat(((a11 * b11) + (a12 * b21) + (a13 * b31)));
    c12.value = (a11 * b12) + (a12 * b22) + (a13 * b32);
    c13.value = (a11 * b13) + (a12 * b23) + (a13 * b33);
    c21.value = ((a21 * b11) + (a22 * b21) + (a23 * b31));
    c22.value = ((a21 * b12) + (a22 * b22) + (a23 * b32));
    c23.value = ((a21 * b13) + (a22 * b23) + (a23 * b33));
    c31.value = ((a31 * b11) + (a32 * b21) + (a33 * b31));
    c32.value = ((a31 * b12) + (a32 * b22) + (a33 * b32));
    c33.value = ((a31 * b13) + (a32 * b23) + (a33 * b33));


})