





let billInput = document.querySelector(".bill-input");
let peopleInput = document.querySelector(".people-input");
const tipInput = document.querySelectorAll(".tip-child");
const form =  document.querySelectorAll(".clear-default");
const displayAmount =  document.querySelector(".display-tip-amount");
const displayTotal =  document.querySelector(".display-total-people");
const resetButton = document.querySelector(".reset-button");


let billValue;
let peopleValue;
let tipAmount;
let tipAmountPerPerson;
let total;
let totalNumberPerPerson;


form.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })
    
})

tipInput.forEach((input) => {
    input.addEventListener("click", () => {
        billValue = parseFloat(billInput.value);
        peopleValue = parseFloat(peopleInput.value);
        if(input.value === "5%" && billValue != 0 && isNaN(billValue) === false && peopleValue != 0 && isNaN(peopleValue) === false){

            tipAmount = (5/100) * billValue;
            tipAmountPerPerson = tipAmount/peopleValue;
            displayAmount.textContent = tipAmountPerPerson.toFixed(2);
            total = billValue + tipAmount;
            totalNumberPerPerson = total/peopleValue;
            displayTotal.textContent = totalNumberPerPerson.toFixed(2);


        }else if(input.value === "10%" && billValue != 0 && isNaN(billValue) === false && peopleValue != 0 && isNaN(peopleValue) === false){

            tipAmount = (10/100) * billValue;
            tipAmountPerPerson = tipAmount/peopleValue;
            displayAmount.textContent = tipAmountPerPerson.toFixed(2);
            total = billValue + tipAmount;
            totalNumberPerPerson = total/peopleValue;
            displayTotal.textContent = totalNumberPerPerson.toFixed(2);


        } else if(input.value === "15%" && billValue != 0 && isNaN(billValue) === false && peopleValue != 0 && isNaN(peopleValue) === false){

            tipAmount = (15/100) * billValue;
            tipAmountPerPerson = tipAmount/peopleValue;
            displayAmount.textContent = tipAmountPerPerson.toFixed(2);
            total = billValue + tipAmount;
            totalNumberPerPerson = total/peopleValue;
            displayTotal.textContent = totalNumberPerPerson.toFixed(2);


        } else if(input.value === "25%" && billValue != 0 && isNaN(billValue) === false && peopleValue != 0 && isNaN(peopleValue) === false){

            tipAmount = (25/100) * billValue;
            tipAmountPerPerson = tipAmount/peopleValue;
            displayAmount.textContent = tipAmountPerPerson.toFixed(2);
            total = billValue + tipAmount;
            totalNumberPerPerson = total/peopleValue;
            displayTotal.textContent = totalNumberPerPerson.toFixed(2);


        } else if(input.value === "50%" && billValue != 0 && isNaN(billValue) === false && peopleValue != 0 && isNaN(peopleValue) === false){

            tipAmount = (50/100) * billValue;
            tipAmountPerPerson = tipAmount/peopleValue;
            displayAmount.textContent = tipAmountPerPerson.toFixed(2);
            total = billValue + tipAmount;
            totalNumberPerPerson = total/peopleValue;
            displayTotal.textContent = totalNumberPerPerson.toFixed(2);


        } else if(input.type=== "number" && billValue != 0 && isNaN(billValue) === false && peopleValue != 0 && isNaN(peopleValue) === false){
            if(input.value != 0){
            console.log(input.value);
            tipAmount = (input.value/100) * billValue;
            tipAmountPerPerson = tipAmount/peopleValue;
            displayAmount.textContent = tipAmountPerPerson.toFixed(2);
            total = billValue + tipAmount;
            totalNumberPerPerson = total/peopleValue;
            displayTotal.textContent = totalNumberPerPerson.toFixed(2);
            }
        }else if(peopleValue === 0){

        }
    })
})


resetButton.addEventListener()





















// let x;
// let y;

// form.forEach((form) => {
//     form.addEventListener("submit", (e) => {
//         e.preventDefault()
//         let billInput = document.querySelector(".bill-input");
//         let peopleInput = document.querySelector(".people-input");
        
//         billInput.addEventListener("keyup", (e) => {
//             e.preventDefault();
//             // console.log(billInput.value);
//             x = billInput.value
//         })
        
//         console.log(x);
    
    
//         peopleInput.addEventListener("keyup", (e) => {
//             // console.log(peopleInput.value);
//             y = peopleInput.value
//         })
        
//         console.log(y)
//     })
    
// })





// console.log(someObject)








// function calc(){


// // peopleInput.addEventListener("change", (e) => {
// //     console.log(e.target.value);
// //     console.log(typeof(parseFloat(e.target.value)))
// // })


// // displayAmount.textContent  = billInput + peopleInput;
// // console.log(displayAmount.textContent)
// }

// calc();
















// resetButton.addEventListener("click", ()=> {
//     function calcTip(){
//         console.log(result)
        
//     }
    
//     console.log(calcTip())
// })












// const paragraph = document.querySelector(".paragraph");

// console.dir(paragraph.innerText);
// console.dir(paragraph.textContent);
// console.dir(paragraph.innerHTML);
// console.dir(paragraph.outerHTML);


// // paragraph.textContent = paragraph.textContent + "you got this"

// paragraph.insertAdjacentText("afterbegin", "I see you there")






