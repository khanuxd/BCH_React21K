let form = document.querySelector('form');

let firstColor = document.querySelector('#color1');
let secondColor = document.querySelector('#color2');
let text = document.querySelector('p');

let direction = document.querySelectorAll('input[name="direction"]');

const setGradient = (event) => {
    event.preventDefault();
    let selectedValue;

    for (const v of direction) {
        if (v.checked) {
            selectedValue = v.value;
        }
    }

    console.log('clicked');
    console.log(firstColor.value);
    console.log(secondColor.value);
    console.log(direction);
    console.log(selectedValue);

    document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${firstColor.value}, ${secondColor.value})`;
    text.textContent = `background-Image: linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
};

form.addEventListener('submit', setGradient);