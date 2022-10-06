input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Umbrella)
    pump.startDuration(Pump.RIGHT, 60, 4)
    basic.clearScreen()
})
