var restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn"),
    // get the highScores list and turn it back into an object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("score-list");

    // sort scores from high to low
    highScores.sort(function (a,b){
        return b.score - a.score
    })

    // display the scores
    for (var i = 0; i < highScores.length; i++) {
        var newLi = document.createElement("li")
        newLi.textContent = highScores[i].name + " - " + highScores[i].score
        scoreList.appendChild(newLi)
    }


// click handlers for restart and clearing scoreboard
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartBtn.addEventListener("click", function () {
    history.back();
});