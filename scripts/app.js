function getRadioValue() {
    let rate = document.getElementsByName('rate');

    for (let i = 0; i < rate.length; i++) {
        if (rate[i].checked) {
            localStorage.setItem('rate', rate[i].value);
        }
    }

}

let rate = localStorage.getItem('rate');
console.log(rate);

document.getElementById('rate').innerHTML = rate;