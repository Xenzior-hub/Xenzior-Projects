let homeCountEl = document.getElementById("home-count-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0
let resetHomeScore = 0
let resetGuestScore = 0

function plusoneHome() {
    homeScore += 1
    homeCountEl.textContent = homeScore
}

function plustwoHome() {
    homeScore += 2
    homeCountEl.textContent = homeScore
}

function plusthreeHome() {
    homeScore += 3
    homeCountEl.textContent = homeScore
}

function resetHome() {   
    homeCountEl.textContent = resetHomeScore
    homeScore = 0
}

function plusoneGuest() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function plustwoGuest() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function plusthreeGuest() {
    guestScore += 3
    guestEl.textContent = guestScore
}

function resetGuest() {   
    guestEl.textContent = resetGuestScore
    guestScore = 0
}