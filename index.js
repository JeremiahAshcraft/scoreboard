// javascript

// Home and Guest scoreboards and counters //

const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
let scoreHome = 0;
let scoreGuest = 0;

// Grabs empty p tag with home-place and guest-place classes. //

const homePlace = document.querySelector(".home-place")
const guestPlace = document.querySelector(".guest-place")

// Selects all buttons //

const allButtons = document.querySelectorAll(".score-button")

// Each button selected individually //

const homeOne = document.getElementById("one-point-home")
const homeTwo = document.getElementById("two-point-home")
const homeThree = document.getElementById("three-point-home")
const guestOne = document.getElementById("one-point-guest")
const guestTwo = document.getElementById("two-point-guest")
const guestThree = document.getElementById("three-point-guest")

// Selectors and variables for game timer and restart button //

const gameTimer = document.getElementById("game-timer")
const startGame = document.getElementById("start")
const resetGame = document.getElementById("reset")
let timeInterval
let minutes
let seconds

// Blinking Effect: Creates blinking effect for buttons. //

const blinkButton = [
    {transform: 'scale(0)'}, 
    {transform: 'scale(.75)'},
    {transform: 'scale(0)'},
    {transform: 'scale(.75)'},
    {transform: 'scale(0)'},
    {transform: 'scale(1)'}
];

const blinkTiming = {
    duration: 1000,
    iterations: 1
}

// Gives each point buttons functionallity and animations. //

allButtons.forEach(function (e, index) {
    
        e.addEventListener('click', function() {
            
            // Adds score for each button //
            
            if (index === 0) {
                scoreHome += 1
                homeScore.textContent = scoreHome
            } else if (index === 1) {
                scoreHome += 2
                homeScore.textContent = scoreHome
            } else if (index === 2) {
                scoreHome += 3
                homeScore.textContent = scoreHome
            } else if (index === 3) {
                scoreGuest += 1
                guestScore.textContent = scoreGuest
            } else if (index === 4) {
                scoreGuest += 2
                guestScore.textContent = scoreGuest
            } else if (index === 5) {
                scoreGuest += 3
                guestScore.textContent = scoreGuest
            }
            
            // Displays who is in 1st place and when the score is tied. //
            
            if (scoreHome > scoreGuest) {
                homePlace.textContent = "1st Place"
                guestPlace.textContent = ""
            } else if (scoreHome < scoreGuest) {
                guestPlace.textContent = "1st Place"
                homePlace.textContent = ""
            } else {
                homePlace.textContent = "Tie"
                guestPlace.textContent = "Tie"
            }
        })
        

        
        // Adds Blinking Effect //
        
        allButtons.forEach(function (i) { 
            
            i.addEventListener('click', function() {
            i.animate(blinkButton, blinkTiming)
        
        })
    
        // Creates color flash when three point buttons are clicked for Home and Guest. I tried using a single function to apply this effect but still haven't figured out how, so I'm just keeping them seperate for now.//
    
        homeThree.addEventListener("click", function() {
            homeThree.classList.remove("score-button")
            homeThree.offsetWidth = homeThree.offsetWidth
            void homeThree.offsetWidth
            homeThree.classList.add("score-button")
        
        })   
        
        guestThree.addEventListener("click", function() {
            guestThree.classList.remove("score-button")
            guestThree.offsetWidth = guestThree.offsetWidth
            void guestThree.offsetWidth
            guestThree.classList.add("score-button")
        })  
        
    })
})

// Starts game timer. //

startGame.addEventListener("click", function() {

    const startTime = 15
    let time = startTime * 60
    timeInterval = setInterval(countDown, 1000)

    function countDown() {

        minutes = Math.floor(time / 60)
        seconds = time % 60

        if (seconds < 10 ) {
            seconds = '0' + seconds;
        } 

        gameTimer.textContent = minutes + ':' + seconds
        time--

        if (minutes === '00' && seconds === '00') {
            clearInterval(timeInterval)
        }

    }
})

// Stops and resets game. //

resetGame.addEventListener('click', function() {
    clearInterval(timeInterval)
    
    gameTimer.textContent = '00:00'
    scoreHome = 0
    scoreGuest = 0
    homeScore.textContent = '0'
    guestScore.textContent = '0'
    homePlace.textContent = ""
    guestPlace.textContent = ""
})

