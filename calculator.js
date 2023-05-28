console.log("Calculator...");

let input = document.getElementById('input');
let output = document.getElementById('output');

let AC = document.getElementById('AC');
let DEL = document.getElementById('DEL');
let modulo = document.getElementById('modulo');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let equal = document.getElementById('equal');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let point = document.getElementById('point');

let firstOperand="";
let secondOperand="";
let operator = '+';
let isFirstOperand = false;

function isOperand(a){
    if(a==='x' || a==='/' || a==='-' || a==='+' || a==='%'){
        return true;
    }
    return false;
}

AC.addEventListener('click', () => {
    input.innerHTML = "0";
    output.innerHTML = "0";
    firstOperand = "";
    secondOperand = "";
    operator = null;
    isFirstOperand = false;
});

DEL.addEventListener('click', () => {
    let a = input.innerText;
    let b = a.charAt(a.length-1);
    a = a.substring(0,a.length-1);
    input.innerText = a;
    if(a.length===0){
        input.innerText = 0;
    }
    
    if(isOperand(b)){
        operator = null;
        isFirstOperand = false;
    }else if(isFirstOperand){
        secondOperand = secondOperand.substring(0,secondOperand.length-1);
    }else{
        firstOperand = firstOperand.substring(0,firstOperand.length-1);
    }
});

multiply.addEventListener('click', () => {
    operator = 'x';
    isFirstOperand = true;
    let a = input.innerText;
    if(isOperand(a.charAt(a.length-1))){
        a = a.substring(0,a.length-1);
    }
    a = a+"x";
    input.innerText = a;
});

divide.addEventListener('click', () => {
    operator = '/';
    isFirstOperand = true;
    let a = input.innerText;
    if(isOperand(a.charAt(a.length-1))){
        a = a.substring(0,a.length-1);
    }
    a = a+"/";
    input.innerText = a;
});

plus.addEventListener('click', () => {
    operator = '+';
    isFirstOperand = true;
    let a = input.innerText;
    if(isOperand(a.charAt(a.length-1))){
        a = a.substring(0,a.length-1);
    }
    a = a+"+";
    input.innerText = a;
});

minus.addEventListener('click', () => {
    operator = '-';
    isFirstOperand = true;
    let a = input.innerText;
    if(isOperand(a.charAt(a.length-1))){
        a = a.substring(0,a.length-1);
    }
    a = a+"-";
    input.innerText = a;
});

modulo.addEventListener('click', () => {
    operator = '%';
    isFirstOperand = true;
    let a = input.innerText;
    if(isOperand(a.charAt(a.length-1))){
        a = a.substring(0,a.length-1);
    }
    a = a+"%";
    input.innerText = a;
});


function editOperand(s){
    let a = input.innerText;
    if(a==='0'){
        input.innerText = s;
    }else{
        input.innerText = a+s;
    }
    
    if(isFirstOperand){
        secondOperand += s;
    }else{
        firstOperand += s;
    }
}


one.addEventListener('click', () => {
    editOperand('1');
});

two.addEventListener('click', () => {
    editOperand('2');
});

three.addEventListener('click', () => {
    editOperand('3');
});

four.addEventListener('click', () => {
    editOperand('4');
});

five.addEventListener('click', () => {
    editOperand('5');
});

six.addEventListener('click', () => {
    editOperand('6');
});

seven.addEventListener('click', () => {
    editOperand('7');
});

eight.addEventListener('click', () => {
    editOperand('8');
});

nine.addEventListener('click', () => {
    editOperand('9');
});

zero.addEventListener('click', () => {
    editOperand('0');
});

point.addEventListener('click', () => {
    editOperand('.');
});

equal.addEventListener('click', () => {
    let a = Number(firstOperand);
    let b = Number(secondOperand);
    let res = 0;
    if(operator === null){
        res = "No operator";
        output.innerText = res;
        return;
    }
    switch(operator){
        case '+':
            res = a+b;
            break;
        case '-':
            res = a-b;
            break;
        case 'x':
            res = a*b;
            break;
        case '/':
            res = a/b;
            break;
        case '%':
            res = a%b;
            break;
        default:
            res = "Invalid operator";
            break;
    }
    output.innerText = res;
});