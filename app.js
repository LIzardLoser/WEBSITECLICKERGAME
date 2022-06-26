'use strict'

const btn = document.querySelector("#ClickButton");
var clicks = 0;

btn.addEventListener('click', AddClicks);

function AddClicks() {
    const Count = document.getElementById("Count");
    clicks+=1;
    console.log(clicks);
    Count.innerHTML = clicks;
}

function AddMoreClicks(num) {
    const Count = document.getElementById("Count");
    clicks+=num;
    Count.innerHTML = clicks;
    return "added " + num + " more clicks";
}

const Name = document.querySelector("#Name");

Name.addEventListener('input', function()
{
    if(document.querySelector("#Name").value == "ryliegh" || document.querySelector("#Name").value == "Ryliegh") {
        const Count = document.querySelector("#Count");
        Count.innerHTML = "I Love You";
        console.log("I Love You Ryliegh");
        document.getElementById("Name").value = "";
    }
});