'use strict'

let encodeBtn = document.getElementById('encodeBtn');
let decodeBtn = document.getElementById('decodeBtn');
let replaceBtn = document.getElementById('replaceBtn');
let copyBtn = document.getElementById('copyBtn');
let menu = document.getElementById('menu');


// смена названий кнопок при выборе 'compare'


encodeBtn.onclick = function() {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');

  if (menu.value == 'base64') text_result.value = btoa(text_input.value);
  if (menu.value == 'url') text_result.value = encodeURI(text_input.value);
}

decodeBtn.onclick = function() {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');

  if (menu.value == 'base64') text_result.value = atob(text_input.value);
  if (menu.value == 'url') text_result.value = decodeURI(text_input.value);
}

replaceBtn.onclick = function () {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');
  if (text_input.value && text_input.value)
    [text_result.value, text_input.value] = [text_input.value, text_result.value];

}

clearBtn.onclick = function () {
  let text_input  = document.getElementById('inp');
  let text_result = document.getElementById('res');
  text_result.value = text_input.value = '';
}

copyBtn.onclick = function () {
  let text_input  = document.getElementById('inp');
  text_input.value = "function in development!";
}
