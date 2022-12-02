const password = document.getElementById("password")
const password_confirm = document.getElementById("password-confirm")

function replaceClass(toRemove, toAdd) {
    password.classList.remove(toRemove)
    password.classList.add(toAdd)
    password_confirm.classList.remove(toRemove)
    password_confirm.classList.add(toAdd)
}

function matchPasswords() {
    if (password.value === password_confirm.value) {
        replaceClass("error", "matching")
        const not_matching = document.querySelector(".pw-no-match")
        const form_column = document.querySelector(".form-column")
        form_column.removeChild(not_matching)
    } else {
        replaceClass("matching", "error")
        let not_matching = document.querySelector(".pw-no-match");
        if (not_matching === null) {
            not_matching = document.createElement("div")
            not_matching.classList.add("pw-no-match")
            not_matching.innerText = "* Passwords do not match"
            const form_column = document.querySelector(".form-column")
            form_column.appendChild(not_matching)
        }
    }
}

password.addEventListener("input", matchPasswords)
password_confirm.addEventListener("input", matchPasswords)
