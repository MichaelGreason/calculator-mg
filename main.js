// Variable declerations
let displayValue = "";


let inputs =
    document.querySelectorAll(".button");
for (let button of inputs) {
    button.addEventListener('click', function (event) {
        console.log(event.target.innerText);
        displayValue += event.target.innerText;
        output.innerText = displayValue;
    }
    )
}

let operatorInputs =
    document.querySelectorAll(".operator");
for (let operator of operatorInputs) {
    operator.addEventListener('click', function (event) {
        console.log(event.target.innerText)
    }
    )
}

let equal =
    document.querySelector(".factor");
equal.addEventListener('click', function (event) {
    console.log(event.target.innerText)
}
)

let output =
    document.querySelector("#output");

// const fullDisplay = []
// for (let part of inputs) {
//     {
//         part.addEventListener('click', function (event) {
//             console.log(event.target.innerText);
//             let buttonValue = event.target.innerText;
//             fullDisplay.push(buttonValue);
//             output.innerText = fullDisplay.join('');
//         }
//         )
//     }
// }

let clear =
    document.querySelector(".clear");
clear.addEventListener('click', function (event) {
    console.log(event.target.innerText)
    displayValue = "";
    output.innerText = displayValue;
}
)


// creating objects out of the input buttons
const add =
    document.querySelector("#add");

const subtract =
    document.querySelector("#subtract")

const multiply =
    document.querySelector("#multiply")

const divide =
    document.querySelector("#divide")