const padKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']

const allPads = document.querySelectorAll('.box')


const keys = document.querySelectorAll('.box')

keys.forEach(res => {
    res.addEventListener('click', () => playSound(res))
});

function playSound(res) {
    const noteAudio = document.getElementById(res.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.play();
    res.classList.add('active')
    noteAudio.addEventListener("ended", () => {
        res.classList.remove('active')
    })
}

document.addEventListener("keydown", e => {
    // prevent of Repeading
    if (e.repeat) return

    const key = e.key;
    const padKeysIndex = padKeys.indexOf(key)
    if (padKeysIndex > -1) playSound(allPads[padKeysIndex])
})
