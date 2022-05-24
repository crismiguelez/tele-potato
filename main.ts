radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(potato)
    if (potato > 0) {
        potato = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    potato = randint(5, 10)
})
let potato = 0
potato = -1
radio.setGroup(184)
basic.forever(function () {
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("A D F C5 D G C E ", 500)
    }
    if (potato < 0) {
        basic.clearScreen()
    }
    if (potato > 0) {
        basic.showIcon(IconNames.Square)
        potato += -1
    }
})
