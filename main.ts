let Start_of_timer_ = 0
basic.forever(function () {
    if (input.lightLevel() <= 50) {
        Start_of_timer_ = input.runningTime()
        while (input.runningTime() - Start_of_timer_ <= 20000) {
            basic.showIcon(IconNames.Target)
            basic.showIcon(IconNames.Diamond)
        }
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})
