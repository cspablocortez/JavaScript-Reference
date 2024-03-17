window.matchMedia('(prefers-color-scheme: dark').addEventListener('change', outputDarkMode) 

function outputDarkMode() {
    let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log(`Dark mode: ${darkMode}`)
}

// Come back to this if program is installed