let Temperature = 0
basic.forever(function () {
    basic.showNumber(input.temperature())
    Temperature = input.temperature()
    if (Temperature < 20) {
        Temperature = 20
    } else if (Temperature > 45) {
        Temperature = 45
    }
    pins.servoWritePin(AnalogPin.P1, pins.map(
    Temperature,
    20,
    45,
    0,
    180
    ))
})
