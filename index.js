
let homeScoreEl = document.getElementById("homers")
let guestScoreEl = document.getElementById("guest")
let homeScore = 0
let guestScore = 0

function addPoints(){
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function addPoints2(){
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function addPoints3(){
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function addPoints4(){
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function addPoints5(){
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function addPoints6(){
    guestScore += 3
    guestScoreEl.innerText = guestScore
}

     