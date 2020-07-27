function faireQuelqueChose () {
    y += 1
    x += 1
    if (y == 5) {
        while (y != 0) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
        }
    } else if (x == 5) {
        while (x != 0) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
        }
    } else {
    	
    }
}
let x = 0
let y = 0
let liste = [0, 1, 2, 3, 4]
y = 0
basic.forever(function () {
    for (let x of liste) {
        led.plot(x, y)
    }
    basic.pause(200)
    for (let x of liste) {
        led.unplot(x, y)
        faireQuelqueChose()
    }
})
