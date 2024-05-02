import htmx from 'htmx.org'

htmx.onLoad(() => {
    // Au chargement de la page
    if (localStorage.getItem('theme')) {
        if (localStorage.theme === 'dark') {
            document.getElementById('light').classList.add('hidden')
            document.querySelector('html').classList.add('dark')
        } else {
            document.getElementById('dark').classList.add('hidden')
        }
    } else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById('light').classList.add('hidden')
            document.querySelector('html').classList.add('dark')
        } else {
            document.getElementById('dark').classList.add('hidden')
        }
    }

    // Au click sur le bouton
    const lightModeSelector = document.getElementById('light-mode-selector')
    if (!lightModeSelector.classList.contains('initialized')) {
        lightModeSelector.classList.add('initialized')

        const lightMode = () => {
            localStorage.theme = 'light'
            document.querySelector('html').classList.remove('dark')
            document.getElementById('light').classList.remove('hidden')
            document.getElementById('dark').classList.add('hidden')
        }

        const darkMode = () => {
            localStorage.theme = 'dark'
            document.querySelector('html').classList.add('dark')
            document.getElementById('light').classList.add('hidden')
            document.getElementById('dark').classList.remove('hidden')
        }

        lightModeSelector.addEventListener('click', () => {
            if (localStorage.getItem('theme')) {
                if (localStorage.theme === 'dark') lightMode()
                else darkMode()
            } else {
                if (!window.matchMedia('(prefers-color-scheme: dark)').matches) darkMode()
                else lightMode()
            }
        })
    }
})