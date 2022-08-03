function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function divide (a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}

function findOperation(a,b,c){
    if(a == '+'){
        return add(b,c);
    }else if(a == '-'){
        return subtract(b,c);
    }else if(a == '÷'){
        return divide(b,c);
    }else{
        return multiply(b,c);
    }
}

// let first;
// let operator;
// let temp = '';
// let holder = '';
// function display(){
//     const buttons = document.querySelectorAll('button');
//     const display = document.querySelector('#display');
//     buttons.forEach(button => {
//         button.addEventListener('click', ()=>{
//             holder = button.innerHTML;
//             console.log(temp);
            // if(button.innerHTML == '+' || button.innerHTML == '-' || button.innerHTML == '÷' || button.innerHTML == 'x'){
            //     first = temp;
            //     operator = button.innerHTML;
            //     temp = '';
            //     holder = '';
            // }
//             temp += holder;
//             display.textContent = temp;
//             if(button.innerHTML == '='){
//                 let second = temp.slice(0,-1);
//                 display.textContent = findOperation(operator,Number(first),Number(second));
//                 temp = findOperation(operator,Number(first),Number(second));
//             }
//         });
//     });
// }

function equate (equation){
    // let ans;
    // let inital = findOperation(equation[1],parseInt(equation[0]),parseInt(equation[2]));
    // for(let i = 2; i<equation.length; i++){
        // if(equation[i] == '+' || equation[i] == '-' || equation[i] == '÷' || equation[i] == 'x'){
        //     ans = findOperation(equation[i],inital,parseInt(equation[i+1]))
        //     intital = ans;
        //     console.log(ans);
        // }
    // }
    // return ans;
    let inital = findOperation(equation[1],parseInt(equation[0]),parseInt(equation[2]));
    if(equation.length>3){
        for(let i = 3; i<equation.length -1; i++){
            if(equation[i] == '+' || equation[i] == '-' || equation[i] == '÷' || equation[i] == 'x'){
                inital = findOperation(equation[i],inital,parseInt(equation[i+1]));
        }
    }
}
    return inital;
}

let holder = '';
let temp = '';
let ans = '';
function display(){
     const buttons = document.querySelectorAll('button');
     const equation = document.querySelector('#equation');
     const answer = document.querySelector('#answer');
     buttons.forEach(button => {
        button.addEventListener('click',()=>{
            holder = button.innerHTML;
            if(button.innerHTML == '+' || button.innerHTML == '-' || button.innerHTML == '÷' || button.innerHTML == 'x'){
                holder = ` ${holder} `;
            }
            if(holder == '='){
                let equation = temp.split(' ');
                holder = '';
                ans = equate(equation);
                answer.textContent = ans;
            }
            temp += holder;
            equation.textContent += holder;
        });
});
}
display();