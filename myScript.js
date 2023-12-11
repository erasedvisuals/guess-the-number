let tip = document.getElementsByClassName("tip")
let number = document.getElementById("number")
let score = document.getElementsByClassName("score")
let highscore = document.getElementsByClassName("highscore")
let check = document.getElementsByClassName("check")
let input = document.getElementsByTagName("input")
/* console.log(check)
console.log(tip)
console.log(number)
console.log(score[1].innerHTML)
console.log(highscore) */

// extract random number
function rnd() {
    return Math.floor(Math.random() * 19 + 1)
} let guess = rnd()
// glowing-red and text shake animation
function wrong(i) {
    document.getElementById("sep").classList.add('wrong')
    number.classList.add('wrong')
    tip[i].classList.add('wrong-text')
    number.innerHTML = 'X'
    // rimuove le classi ad animazione terminata, così da poterle riaggiungere
    setTimeout(() => {
        document.getElementById("sep").classList.remove('wrong')
        number.classList.remove('wrong')
        tip[i].classList.remove('wrong-text')
        number.innerHTML = '?'
    }, 520)

}
// disable all inputs exept for restart
function disable(i){
    input[i].disabled = true
    input[i].classList.remove("border-neon-cyan")
    check[i].disabled = true
}

// for con 0 e 1 dove 0 sta per comportamento con schermo xs e 1 lg
for (let i = 0; i <= 1; i++) {
    if (score[i].innerHTML <= 0){
        disable(i)
    }
    check[i].addEventListener('click', run)
    function run() {
        let value = input[i].value
        if (value < 1 || value > 20) {
            wrong(i)       
            tip[i].innerHTML = "Insert a valid number"
            tip[i].classList.replace("text-white", "text-neon-r")
            //sep wrong   
        } else if (value > guess) {
            wrong(i)
            tip[i].innerHTML = "Too high"
            score[i].innerHTML = score[i].innerHTML - 1
            tip[i].classList.replace("text-white", "text-neon-r")
            //sep-wrong animation
        } else if (value < guess) {
            wrong(i)
            tip[i].innerHTML = "Too low"
            score[i].innerHTML = score[i].innerHTML - 1
            tip[i].classList.replace("text-white", "text-neon-r")
        } else {
            document.getElementById("sep").classList.add('correct')
            number.classList.add('correct')
            // tip text changes
            tip[i].innerHTML = "Correct, want to play again?"
            tip[i].classList.replace("text-white", "text-neon-g")
            tip[i].classList.replace("text-neon-r", "text-neon-g")
            //mostra il numero
            number.innerHTML = guess
            //aggiorna score
            highscore[i].innerHTML = score[i].innerHTML
            score[i].innerHTML = 20
            //disabilita tutto in modo da forzare il play again
            disable(i)
        }
        if (score[i].innerHTML <= 0){
            tip[i].innerHTML = "You lost, try again"
            disable(i)
        }
    }
    document.getElementsByClassName('play-again')[i].addEventListener('click', ()=>{window.location.reload()})
}

