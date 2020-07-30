function deplacer_diode_sur_colonne (colonne: number) {
    for (let ligne = 0; ligne <= 4; ligne++) {
        if (led.point(colonne, ligne)) {
            prochaine_ligne = ligne + direction[colonne]
            if (prochaine_ligne >= 4) {
                direction[colonne] = -1
            } else if (prochaine_ligne <= 0) {
                direction[colonne] = 1
            }
            led.unplot(colonne, ligne)
            led.plot(colonne, prochaine_ligne)
            break;
        }
    }
}
let prochaine_ligne = 0
let direction: number[] = []
direction = [1, 1, 1, 1, -1]
led.plot(0, 0)
led.plot(1, 1)
led.plot(2, 2)
led.plot(3, 3)
led.plot(4, 4)
basic.forever(function () {
    for (let colonne_boucle = 0; colonne_boucle <= 4; colonne_boucle++) {
        deplacer_diode_sur_colonne(colonne_boucle)
    }
    basic.pause(100)
})
