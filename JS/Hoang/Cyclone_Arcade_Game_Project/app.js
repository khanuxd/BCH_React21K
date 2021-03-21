// create a number of bulbs and store them in an array;

const numberOfBulbs = 50;
const delay = 50;

const chosenBulb = 30;

let counter = 0;
let bulbArray = [];

// turn them all off by default

while (counter < numberOfBulbs) {
    const newBulb = document.createElement('div');
    newBulb.className = 'bulb';
    document.getElementById('bulbs').appendChild(newBulb);
    bulbArray[counter] = false;
    counter++;
}

// select the first one to turn on

counter = 0;
document.getElementsByClassName('bulb')[counter].classList.add('active');
bulbArray[counter] = true;

document.getElementsByClassName('bulb')[chosenBulb].classList.add('chosen');

// switch off the previous one and turn on the next bulb after a specified time interval
// when reaching the end of the array, start again form the first bulb

document.getElementById('start-btn').addEventListener('click', () => {
    const speedRange = document.getElementById('speed').value;
    blinkingSpeed = speedRange ? speedRange : delay;

    const bulbCycle = setInterval(()=>{
        document.getElementsByClassName('bulb')[counter].classList.remove('active');
        bulbArray[counter] = false;
    
        if (counter<numberOfBulbs-1) {
            counter++;
        } else {
            counter=0;
        }
        
        bulbArray[counter] = true;
        document.getElementsByClassName('bulb')[counter].classList.add('active');
    
    }, speedRange);

// add a button to stop the interval upon click

    document.getElementById('stop-btn').addEventListener('click', ()=>{
        clearInterval(bulbCycle);
        let winningStatus = document.querySelector('p');
        if(document.querySelector('.active.chosen') && counter === chosenBulb) {
            winningStatus.innerText = 'You Won!';
        } else {
            winningStatus.innerHTML = 'NO WIN! click \'START\' & Play again!';
        }
    })
})


const arrangeBulbsInACircle = nodes => {
    const radius = '22em';
        start = -90;
        $els = [...nodes];
        numberOfEls = $els.length;
        slice = 360 / numberOfEls;
    $els.forEach((el, index) => {
        const rotate = slice * index + start;
        const rotateReverse = rotate * (-1);
        el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    })
}
arrangeBulbsInACircle(document.getElementsByClassName('bulb'));