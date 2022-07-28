'use strict'

const count = document.querySelector('.count');
const input = document.querySelector('.input');

input.addEventListener('keyup', function(){
    count.textContent = input.value.length;
});