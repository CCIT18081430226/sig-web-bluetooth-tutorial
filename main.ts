bluetooth.onBluetoothConnected(function () {
    basic.showString("OK")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("OFF")
})
basic.showString("Hi!")
bluetooth.startAccelerometerService()
bluetooth.startLEDService()
