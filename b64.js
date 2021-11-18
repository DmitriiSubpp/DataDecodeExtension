'use strict'

let encodeBtn = document.getElementById('encodeBtn');
let decodeBtn = document.getElementById('decodeBtn');
let replaceBtn = document.getElementById('replaceBtn');

encodeBtn.onclick = function() {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');
  if (text_input.value) {  text_result.value = btoa(text_input.value); }
  else { text_result.value = 'NULL'; }
}

decodeBtn.onclick = function() {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');
  if (text_input.value) {  text_result.value = atob(text_input.value); }
  else { text_result.value = 'NULL'; }
  text_input = text_result = '';
}

replaceBtn.onclick = function () {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');
  if (text_input.value && text_input.value) {  [text_result.value, text_input.value] = [text_input.value, text_result.value]; }
  else { text_result.value = text_input.value = 'NULL'; }
}

clearBtn.onclick = function () {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');
  text_result.value = text_input.value = '';
}
copyBtn.onclick = function () {
  alert("function in development!")
  //let text_input  = document.getElementById('inp');
  //let text_result = document.getElementById('res');
  //text_result.value = text_input.value = '';
}
