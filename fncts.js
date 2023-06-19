const randomBtn = document.getElementById("randomJokeButton")
const jokesPlace = document.getElementsByClassName("jokePlace")

randomBtn.addEventListener('click', function(){
    console.log("Click !")
    fetch("https://exam-back-tpiquet.onrender.com/random")
    .then(response => response.json())
    .then(data => {
        jokesPlace[0].innerHTML = `<div class="joke-q">${data.question}</div>`
        jokesPlace[0].innerHTML += `<div class="joke-a">${data.answer}</div>`
    })
})