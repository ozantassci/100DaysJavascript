'use strict'

// Erişeceğimiz elementleri değişkenlere atıyoruz

const number = document.querySelector('.number');
const btnGenerate = document.querySelector('.generate');
const choose = document.querySelector('.choose');
const btn10 = document.querySelector('.ten');
const btn100 = document.querySelector('.oneh');




// * Rastgele 1-10 ve 1-100 arası sayı oluşturacak fonksiyonları değişkenlere atıyoruz.

const generateNumber10 = function(){
    const randomNumber = Math.trunc(Math.random() * 10) + 1;
    number.textContent = randomNumber;
    
// Math.random(), 0 ile 1 arasında ondalık sayı üretir.
// Bu nedenle 1-10 arasında bir sayı olmasından dolayı 10 ile çarptım.
// 10 değerini de alabilmesi için de 1 ekledim.
// Math.trunc() metotunu da ondalık sayılardan kurtulmak için kullandım.    
}


const generateNumber100 = function () {
    const randomNumber = Math.trunc(Math.random() * 100) + 1;
    number.textContent = randomNumber
}


// Tıklama ile gerçekleştirilecek bir event oluşturuyoruz
btnGenerate.addEventListener('click', function(){
    // Generate butonuna tıklandığında display'i none olan sınıfların
    // gözükmesi ve seçeneklerin kullanıcıya sunulması ve tekrar gizlenebilmesi için:
    choose.classList.toggle('hidden');

    //Seçenekler açıkken generate butonunun kapatma butonuna dönüşmesi ve
    //kapatıldığuında rastgele oluşturulan sayının sıfırlanması için gereken koşul:
    if(choose.classList.contains('hidden')){
        btnGenerate.textContent = 'Generate...';
        number.textContent = 0
    } else {
        btnGenerate.textContent = 'Close';
    }
})

btn10.addEventListener('click', generateNumber10);

btn100.addEventListener('click', generateNumber100);