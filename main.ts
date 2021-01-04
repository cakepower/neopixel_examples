let strip = neopixel.create(DigitalPin.P11, 8, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
strip.showRainbow(1, 360)
basic.forever(function () {
    for (let index = 0; index < 50; index++) {
        for (let index2 = 0; index2 <= 7; index2++) {
            strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(100)
        }
        for (let index3 = 0; index3 <= 7; index3++) {
            strip.setPixelColor(index3, neopixel.colors(NeoPixelColors.Black))
            strip.show()
            basic.pause(100)
        }
    }
})
