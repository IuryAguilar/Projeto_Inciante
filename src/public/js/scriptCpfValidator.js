const elements = {
    userCPF: document.getElementById("cpfI"),
    result: document.getElementById("result"),
    validateBtn: document.getElementById('validateBtn')
};

function validate(){
    const oldCPF = elements.userCPF.value.trim();
    let newCPF = "";

    if (oldCPF === ""){elements.result.textContent = "Digite um CPF."; return;};

    for(let i = 0; i < oldCPF.length; i++){
        if (oldCPF[i] >= "0" && oldCPF[i] <= "9"){newCPF += oldCPF[i]};
    };

    if (newCPF.length != 11){elements.result.textContent = "CPF inválido."; return;};

    const firstDigit = newCPF[0];
    let contador = 0;

    for (let i = 0; i < newCPF.length; i++){
        if (newCPF[i] == firstDigit){contador++;};
    };

    if (contador === 11){elements.result.textContent = "CPF inválido."; return;};

    if (calculateDigit(newCPF,newCPF.slice(0,9), 10, 9) === false || calculateDigit(newCPF,newCPF.slice(0,10), 11, 10) === false) {
        elements.result.textContent = "CPF inválido.";
        return;
    };

    elements.result.textContent = "CPF válido!";
};

function calculateDigit(fullcpf, cpfParcial, inicialWeight, digitIndex){
    let residue = 0;

    for (let i = 0; i < cpfParcial.length; i++){
        residue += (Number(cpfParcial[i]) * inicialWeight);
        inicialWeight--;
    };

    residue = residue % 11;

    if (residue < 2){
        if (Number(fullcpf[digitIndex]) !== 0){ return false;};
    } else {
        let total = 11 - residue;
        if (Number(fullcpf[digitIndex]) !== total){return false;};
    };

    return true;
};

elements.userCPF.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validate();
    };
});
elements.validateBtn.addEventListener("click", () => {
    validate();
});