let isDark = true

const toggleBtn = document.getElementById('toggle-mode')

toggleBtn.addEventListener('click', event => {
    document.documentElement.classList.toggle('light')

    const mode = isDark ? 'light' : 'dark'

    event.currentTarget.querySelector('span')
        .textContent = `${mode} modo ativado!`

    isDark = !isDark
})