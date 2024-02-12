import * as elements from "github-favorites/Temporizador/js/Timer/elements.js";
import * as actions from "github-favorites/Temporizador/js/Timer/actions.js";
import state from "github-favorites/Temporizador/js/Timer/state.js";
import { updateDisplay, canAddOrSub } from "github-favorites/Temporizador/js/Timer/timer.js";
import { buttonPress } from "github-favorites/Temporizador/js/Timer/sounds.js";

export function registerControls() {
    elements.controls.addEventListener('click', event => {
        const action = event.target.dataset.action

        if (typeof actions[action] != 'function') {
            return
        }

        actions[action]()
    })
}

export function setMinutes() {
    elements.minutes.addEventListener('focus', () => {
        elements.minutes.textContent = ''
    })

    elements.minutes.onkeydown = event => {
        if (event.key == 'Enter') {
            elements.minutes.blur()
        }
        return /^\d$|Backspace/i.test(event.key)
    }

    elements.minutes.addEventListener('blur', event => {
        const time = event.currentTarget.textContent

        state.minutes = time > 60 ? 60 : time
        state.seconds = 0

        buttonPress.play()
        updateDisplay()

        canAddOrSub(Number(state.minutes))
        elements.minutes.removeAttribute('contenteditable')
    })
}