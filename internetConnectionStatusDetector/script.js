'use strict'

const image = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgColor = document.getElementById('main');


const setColor = function () {
    bgColor.classList.add('online')
}


const connectionStatus = async function(){
    try {
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Gates_June_2015.png?time=' + new Date().getTime());
        image.src = '/images/online.png'
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;

    } catch (error) {
        statusDisplay.textContent = 'OOPS!!! Your internet connection is down.';
        image.src = '/images/offline.png'
        bgColor.classList.remove('online');
    }
};

setInterval(async () => {
    const result = await connectionStatus();
    if(result){
        statusDisplay.textContent = 'You are ONLINE, Connection looks good.';
        setColor();
    }
}, 5000);

window.addEventListener('load', async (event) =>{
    if (connectionStatus()){
        statusDisplay.textContent = 'You are ONLINE !';
    } else {
        statusDisplay.textContent = 'You are OFFLINE !';

    }
});
  




