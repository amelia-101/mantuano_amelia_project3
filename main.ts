while (true) {
    if (input.soundLevel() > 30 && input.lightLevel() < 10) {
        music.siren.playUntilDone()
    }
    
}
