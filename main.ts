// Radio Code 0 refers to "Jerningham": We will display a J
// 
// Radio Code 1 refers to "Hume": We will display a H
// 
// Radio Code 2 refers to "Stobo": We will display a S
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        list.push("J")
    } else if (receivedNumber == 1) {
        list.push("H")
    } else if (receivedNumber == 2) {
        list.push("S")
    }
})
input.onButtonPressed(Button.A, function () {
    list.shift()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
    list = []
})
let list: string[] = []
radio.setGroup(1)
basic.forever(function () {
    if (list.length == 0) {
        basic.showString("Server Idle")
    } else {
        basic.clearScreen()
        basic.showString("" + (list[0]))
    }
})
