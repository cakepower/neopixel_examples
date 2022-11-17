input.onButtonPressed(Button.A, function () {
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
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 8, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
strip.showRainbow(1, 360)
