// add event listeners to all buttons
let allButtons = document.querySelectorAll('.buttons span')
for (let item of allButtons) {
    item.addEventListener('click', buttonClicked)
}

function buttonClicked (event) {
    // make button click variable
    let buttonValue = event.target.innerHTML
    
    // make a readOut variables
    let readOut = document.querySelector('.readOut')
    let readOutValue = readOut.innerHTML

    // Making sure operators don't repeat
    if (isNaN(buttonValue) && isNaN(calculator.previousButton)) {
        return
    }
    // check if read out needs to be cleared
    if (calculator.clearReadOut === true) {
        readOut.innerHTML = ''
        calculator.clearReadOut = false
        readOut.innerHTML += buttonValue
        calculator.previousButton = buttonValue
    // check if button is equals
    }else if (buttonValue === '=') {
        calculator.checkOperationType(readOutValue)
        calculator.previousButton = buttonValue
    } else {
        // add button clicked to readOut
        readOut.innerHTML += buttonValue
        calculator.previousButton = buttonValue
    }
    
}
// make calculator object
const calculator = {
    // object has properties of current value, clear read out, and previous button clicked
    currentValue: 0,
    clearReadOut: false,
    previousButton: null,
    // object has methods of add, subtract, multiply, divide, equals, check operation type, update readout
    addValues: function(readOutString) {
        let stringArray = readOutString.split('+')
        let total = 0
        for (i = 0; i < stringArray.length; i++) {
            total += Number(stringArray[i])
        }
        this.updateReadOut(total)
    },
    subtractValues: function(readOutString) {
        let stringArray = readOutString.split('-')
        let total = stringArray[0]
        for (i = 1; i < stringArray.length; i++) {
            total -= Number(stringArray[i])
        }
        this.updateReadOut(total)
    },
    checkOperationType: function(readOutString) {
        if (readOutString.includes('+')) {
            this.addValues(readOutString)
        }else if (readOutString.includes('-')) {
            this.subtractValues(readOutString)
        }
    },
    updateReadOut(output) {
        document.querySelector('.readOut').innerHTML = output
        this.clearReadOut = true
    }
    
}

// user presses number
    // readout updates
// user presses operator
    // need validation so operators don't repeat
        // readout updates
// user presses number
    // readout updates
// user presses equals
    // math happens
        // readout updates