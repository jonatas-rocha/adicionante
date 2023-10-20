const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;


function clicarAdd(){
    
    count += 1;
    updateValue();

};

function clicarMinus() {
    if (count > 0) {
        count -= 1;
        updateValue();
    }
};

function clicarReset() {
    count = 0;
    updateValue();
};

resetButton.addEventListener('click', clicarReset);

document.addEventListener('mouseup', () => clearInterval(intervalId));