"use strict";
//*Öncelikle değişkenlerimizi tanımlıyoruz

// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');
//*3 ayrı eventListener yerine parent elemente tek bir eventListener eklemek için buttonları içeren dive ulaşıyoruz bu durumda yukarıda tanımladığımız 3 button değişkenine gerek kalmıyor.
const buttons = document.querySelector('.buttons');
const count = document.querySelector('.count');

//*Tek eventListener ile 3 olay oluşturmak / event delegation in JS/
buttons.addEventListener("click", (e) => {
    //! target özelliği, eventi tetikleyen öğeyi döndürür. Eventi tetikleyen öğe classList.contain('') ile şu class'ı içeriyorsa koşul içerisindeki komutu yap
    if(e.target.classList.contains('add')){
        count.textContent++;
        setColor();
    }
    if(e.target.classList.contains('subtract')){
        count.textContent--;
        setColor();
    }
    if(e.target.classList.contains('reset')){
        count.textContent = 0;
        setColor();
    }
})

//*Sayılar eksi veya artı değerdeyken alacakları renk özelliği
function setColor() {
    if(count.textContent > 0){
        count.style.color = "#25D366";
    } else if(count.textContent < 0){
        count.style.color = "#E50914";
    } else{
        count.style.color = "#DCD7C9"
    }
}



//=========================  ALTERNATIVE  ===========================

// const btnSubtract = document.querySelector(".subtract");
// const btnReset = document.querySelector(".reset");
// const btnAdd = document.querySelector(".add");
// const counterApp = document.querySelector(".count");

// const setColor = function(){
//     if(counterApp.textContent < 0){
//         counterApp.style.color = '#e50914'
//     } else if (counterApp.textContent > 0){
//         counterApp.style.color = '#25d366'
//     } else {
//         counterApp.style.color = '#bcd7c9'
    
//     }
// }

// btnAdd.addEventListener("click", function () {
//   counterApp.textContent++;
//   setColor()
// });
// btnSubtract.addEventListener("click", function () {
//   counterApp.textContent--;
//   setColor()
// });
// btnReset.addEventListener("click", function () {
//   counterApp.textContent = 0;
//   setColor()
// });

