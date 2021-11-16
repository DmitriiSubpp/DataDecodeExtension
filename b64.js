let plaintext = document.getElementById('pl');
let b64       = document.getElementById('base64');
let res_b64   = document.getElementById('b64Result');
let res_pt    = document.getElementById('ptResult');

plaintext.oninput = function(){
    res_b64.innerHTML = btoa(plaintext.value);
}

b64.oninput = function(){
    res_pt.innerHTML = atob(b64.value);
}
