var currentNumberWrapper = document.getElementById ('currentNumber')
var currentNumber = 0

var buttonLess = document.getElementById ('subtrair')
var buttonPlus = document.getElementById ('somar')

buttonLess.addEventListener ('click', function () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber

    if (currentNumber < 0) {
        currentNumberWrapper.classList.add ('negative')
    } else {
        currentNumberWrapper.classList.remove ('negative')
    }
})

buttonPlus.addEventListener ('click', function () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber

    if (currentNumber >= 0) {
        currentNumberWrapper.classList.remove ('negative')
    } else {
        currentNumberWrapper.classList.add ('negative')
    }
})
