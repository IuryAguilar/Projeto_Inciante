const elements = {
    btn0: document.getElementById('btn0'),
    btn1: document.getElementById('btn1'),
    btn2: document.getElementById('btn2'),
    btn3: document.getElementById('btn3'),
    btn4: document.getElementById('btn4'),
    btn5: document.getElementById('btn5'),
    btn6: document.getElementById('btn6'),
    btn7: document.getElementById('btn7'),
    btn8: document.getElementById('btn8'),
    btn9: document.getElementById('btn9'),
    btnDot: document.getElementById('btnDot'),
    inversion: document.getElementById('btnInversion'),
    cleanEntry: document.getElementById('btnCleanEntry'),
    clean: document.getElementById('btnClean'),
    back: document.getElementById('btnBack'),
    division: document.getElementById('btnDivision'),
    multiplication: document.getElementById('btnMultiplication'),
    subtraction: document.getElementById('btnSubtraction'),
    sum: document.getElementById('btnSum'),
    btnCalculate: document.getElementById('btnCalculate'),
    result: document.getElementById('result')
};

let number1 = "";
let number2 = "";
let operation = "";
let insertSecondValue = false;
let finalResult;

function insert(num){
    if(!insertSecondValue){
        number1 += num;
        elements.result.textContent = number1;
    } else{
        number2 += num;
        elements.result.textContent = number2;
    };
};
function operator(op){
    if(number1 === "") 
        return;
    if(operation !== "")
        return;

    operation = op;
    insertSecondValue = true;
};

elements.btn0.addEventListener("click", () => {
    insert('0');
});
elements.btn1.addEventListener("click", () => {
    insert('1');
});
elements.btn2.addEventListener("click", () => {
    insert('2');
});
elements.btn3.addEventListener("click", () => {
    insert('3');
});
elements.btn4.addEventListener("click", () => {
    insert('4');
});
elements.btn5.addEventListener("click", () => {
    insert('5');
});
elements.btn6.addEventListener("click", () => {
    insert('6');
});
elements.btn7.addEventListener("click", () => {
    insert('7');
});
elements.btn8.addEventListener("click", () => {
    insert('8');
});
elements.btn9.addEventListener("click", () => {
    insert('9');
});
elements.btnDot.addEventListener("click", () => {
    insert('.');
});
elements.clean.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    operation = "";
    insertSecondValue = false;

    document.getElementById("result").textContent = "0";
});
elements.division.addEventListener("click", () => {
    operator('/');
});
elements.multiplication.addEventListener("click", () => {
    operator('*');
});
elements.subtraction.addEventListener("click", () => {
    operator('-');
});
elements.sum.addEventListener("click", () => {
    operator('+');
});
elements.btnCalculate.addEventListener("click", () => {
    finalResult = "";

    switch(operation){
        case "+":
            finalResult = Number(number1) + Number(number2)
        break;
        case "-":
            finalResult = Number(number1) - Number(number2)
        break;
        case "*":
            finalResult = Number(number1) * Number(number2)
        break;
        case "/":
            if(Number(number2) === 0){
                elements.result.textContent = "Erro";
                return;
            }
            finalResult = Number(number1) / Number(number2)
        break;

        default:
            return;
    };

    elements.result.textContent = finalResult;

    number1 = finalResult.toString();
    number2 = "";
    operation = "";
    insertSecondValue = false;
});
elements.inversion.addEventListener("click", () => {
    finalResult = finalResult - (finalResult * 2);
    elements.result.textContent = finalResult;
});
elements.cleanEntry.addEventListener("click", () => {
    if(!insertSecondValue){
        number1 = "";
        elements.result.textContent = number1;
    } else{
        number2 = "";
        elements.result.textContent = number2;
    };
});
elements.back.addEventListener("click", () => {
    if(!insertSecondValue){
        number1 = number1.slice(0, -1);
        elements.result.textContent = number1;
    } else{
        number2 = number2.slice(0, -1);
        elements.result.textContent = number2;
    };
});