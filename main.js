let inputs =
    document.querySelectorAll(".button");
for (let button of inputs) {
    button.addEventListener('click', function (event) {
        console.log(event.target.innerText)
    }
    )
}

