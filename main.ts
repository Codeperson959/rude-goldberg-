input.onSound(DetectedSound.Loud, function () {
    hummingbird.setPositionServo(FourPort.One, 0)
    basic.pause(500)
    hummingbird.setPositionServo(FourPort.One, 45)
})
hummingbird.startHummingbird()
