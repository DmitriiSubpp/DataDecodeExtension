'use strict'

let encodeBtn = document.getElementById('encodeBtn');
let decodeBtn = document.getElementById('decodeBtn');

encodeBtn.onclick = function() {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');
  if (text_input.value) {  text_result.innerHTML = btoa(text_input.value); }
  else { text_result.innerHTML = 'NULL'; }
}

decodeBtn.onclick = function() {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');
  if (text_input.value) {  text_result.innerHTML = atob(text_input.value); }
  else { text_result.innerHTML = 'NULL'; }
}
