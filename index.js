let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let saveRow = 1

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = saveRow + " (" + count + ")" + ", "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    saveRow += 1
}
