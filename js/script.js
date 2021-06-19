const button = document.querySelector("button");
const body = document.body;
const spanElement = document.querySelector(".color");
// const arrayColors = [
//     "#46B4B4",
//     "#39CD47",
//     "#DFD12F",
//     "#2977BE",
//     "#7022C7",
//     "#9A22C7",
//     "#35DA91"
// ]
// function changeColorBackground(){
//     const randomNum = getRandomNumber();
//     body.style.backgroundColor = arrayColors[randomNum];
//     spanElement.innerHTML = arrayColors[randomNum]
// }

// function getRandomNumber(){
    //     return Math.floor(Math.random() * arrayColors.length);
    // }
    
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
button.addEventListener("click",changeColorBackground);

function changeColorBackground(){
    let hexColor = "#";
    for(let index = 0; index < 6; index++){
        hexColor += hex[getRandomNumber()];
    }
    spanElement.innerHTML = hexColor;
    body.style.backgroundColor = hexColor;
}

function getRandomNumber(){
    console.log(Math.random() * hex.length)
    return Math.floor(Math.random() * hex.length)
}


