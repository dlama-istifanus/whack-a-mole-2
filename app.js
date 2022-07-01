const startBtn = document.getElementById('start');
const body = document.getElementById('body');

const play = () => {
    let moles = document.querySelectorAll('#mole');
    let molesArr = Array.from(moles);
    let score;
    let points = 0;
    
    let start = setInterval(function(){
        let beep = molesArr[Math.floor(Math.random() * molesArr.length)];

        
        setTimeout(() => {
            beep.style.top = '280px';
        }, 1510)
        
        beep.style.top = '100px';

    }, 1500);

    molesArr.forEach((mole) => {
        mole.addEventListener('click', () => {
            score = document.querySelector('#score h1');
            points++
            score.innerHTML = points;
            
        });
    });

    setTimeout(() => {
        let score = document.querySelector('#score h1');
        score.innerHTML = '0';
        clearInterval(start);
        alert('Your time is up! Click on start button to restart');
    }, 50000);

};

startBtn.addEventListener('click', play);