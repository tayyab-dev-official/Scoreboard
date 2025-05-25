let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

let homeScore = 0
let guestScore = 0

console.log(homeScoreEl)
console.log(guestScoreEl)

function homePlusOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore 
}

function homePlusTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore 
}

function homePlusThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore 
}

function guestPlusOne(){
    console.log('plusOne clicked')
    guestScore += 1
    guestScoreEl.textContent = guestScore 
}

function guestPlusTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore 
}

function guestPlusThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore 
}


function resetScores(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}