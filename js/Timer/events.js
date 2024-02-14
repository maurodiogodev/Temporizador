import * as elements from "./Timer/elements.js";
import * as actions from "./Timer/actions.js";
import state from "./Timer/state.js";
import { updateDisplay, canAddOrSub } from "./Timer/timer.js";
import { buttonPress } from "./Timer/sounds.js";

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