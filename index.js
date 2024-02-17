var btns = document.querySelectorAll("button");
console.log(btns);

// detecting mouse click
for (let btn=0; btn<btns.length; btn++){
    btns[btn].addEventListener("click", function() {
        var letter = this.textContent;

        makeSound(letter);
        buttonAnimation(letter);
        
    })
}

// detecting keyboard press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    
    switch (key) {
        case 'w':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case 'a':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case 'j':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case 'k':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(buttonInnnerHTML);

    }
}

function buttonAnimation(key) {
    var selector = "."+key
    var activeButton = document.querySelector(selector);
    activeButton.classList.add("pressed");

    setTimeout (()=>{
        activeButton.classList.remove("pressed");
    },100)
}

