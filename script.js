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

function equate (equation){
    let replaced;
    for(let i = 0; i<equation.length - 1; i++){
        if(equation[i] == 'x' || equation[i] == '÷'){
            replaced = findOperation(equation[i],equation[i-1],equation[i+1])
            equation.splice(i-1,3,replaced);
            if(equation.length == 1){
                return equation[0];
            }
        }
    }
    let inital = findOperation(equation[1],parseInt(equation[0]),parseInt(equation[2]));
    if(equation.length>3){
        for(let i = 3; i<equation.length -1; i++){
            if(equation[i] == '+' || equation[i] == '-'){
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
            if(button.innerHTML == 'AC'){
                holder = '';
                temp = '';
                equation.textContent = '';
                answer.textContent = '';
            }
            temp += holder;
            equation.textContent += holder;
        });
});
}
display();