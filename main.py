while True:
    if input.sound_level() > 30 and input.light_level() < 10:
        music.siren.play_until_done()
