import state from "./state.js"
import * as sounds from "./sounds.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    sounds.buttonPress.play()
    timer.countdown()
}

export function set() {
    elements.minutes.setAttribute('contenteditable', true)
    elements.minutes.focus()
    sounds.kitchenTimer.pause()
    sounds.buttonPress.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPress.play()
}

export function addMinutes() {

    sounds.kitchenTimer.pause()

    if (!state.canAdd) {
        return
    }

    sounds.buttonPress.play()
    timer.addFive()
}

export function subMinutes() {

    if (!state.canSub) {
        return
    }
    sounds.buttonPress.play()
    timer.subFive()
}

export function rainSound() {
    state.isRainSoundOn = elements.controls.querySelector('.ph-cloud-rain').classList.toggle('playing')

    if (!state.isRainSoundOn) {
        sounds.rainSound.pause()
        return
    }

    sounds.rainSound.play()
}

export function forestSound() {
    state.isForestSoundOn = elements.controls.querySelector('.ph-tree').classList.toggle('playing')

    if (!state.isForestSoundOn) {
        sounds.forestSound.pause()
        return
    }

    sounds.forestSound.play()
}


export function shopSound() {
    state.isShopSoundOn = elements.controls.querySelector('.ph-storefront').classList.toggle('playing')

    if (!state.isShopSoundOn) {
        sounds.shopSound.pause()
        return
    }

    sounds.shopSound.play()
}

export function flameSound() {
    state.isFlameSoundOn = elements.controls.querySelector('.ph-fire').classList.toggle('playing')

    if (!state.isFlameSoundOn) {
        sounds.flameSound.pause()
        return
    }

    sounds.flameSound.play()
}