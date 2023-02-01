// Variable declerations
let displayValue = "";


let inputs =
    document.querySelectorAll(".button");
for (let button of inputs) {
    button.addEventListener('click', function (event) {
        console.log(event.target.innerText);
        displayValue += event.target.innerText;
        outputDisplay.innerText = displayValue;
    }
    )
}

let operatorInputs =
    document.querySelectorAll(".operator");
for (let operator of operatorInputs) {
    operator.addEventListener('click', function (event) {
        console.log(event.target.innerText)
        displayValue += event.target.innerText;
        outputDisplay.innerText = displayValue
    }
    )
}

let multiply = document.querySelector("#multiply"); {
    multiply.innerText = "x";

}


const equal =
    document.querySelector(".factor");
equal.addEventListener('click', function (event) {
    // console.log(event.target.innerText)
    // make clicking the equal button evaluate the expression and display the solution in the 
    // display box
    const answer = eval(outputDisplay.innerText)
    console.log(answer)
    outputDisplay.innerText = answer;
}
)

let outputDisplay =
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
    outputDisplay.innerText = "0";
}
)




// creating objects out of the operator buttons
// const add =
//     document.querySelector("#add");

// const subtract =
//     document.querySelector("#subtract")

// const multiply =
//     document.querySelector("#multiply")

// const divide =
//     document.querySelector("#divide")