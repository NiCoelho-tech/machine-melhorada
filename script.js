const code = document.querySelector(".code");
const terminalPopup = document.getElementById("big-terminal-popup");
const terminal = document.getElementById("big-terminal");
const terminalText = document.getElementById("terminal-text");

function showPopup() {
  document.getElementById("terminal-popup").style.display = "block";
  const terminalText = document.getElementById("terminal-text");
  terminalText.textContent = "";

  const messages = [
    "Estabelecendo conexão...",
    "Conectado.",
    "Autenticando usuário...",
    "Usuário autenticado.",
    "Estabelecendo comunicação segura...",
    "Recuperando dados...",
    "Decodificando o número...",
    "Verificando base...",
    "Realizando conversão...",
    "Finalizando processo...",
  ];

  let index = 0;

  const interval = setInterval(() => {
    if (index < messages.length) {
      terminalText.textContent += messages[index] + "\n";
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("terminal-popup").style.display = "none";
        showBigPopup();
      }, 1000);
    }
  }, 500);
}

function convert() {
  showPopup();
}

showBigPopup = () => {
  document.getElementById("big-terminal-popup").style.display = "block";
  terminal.focus();
  i = 0;
  code.innerHTML = "";
};

let codeMessages = [
  "function displayResult() {",
  "    const inputNumber = document.getElementById('input-number').value;",
  "    const selectBase1 = document.getElementById('select_base1').value;",
  "    const selectBase2 = document.getElementById('select_base2').value;",
  "",
  "    const decimalValue = parseInt(inputNumber, selectBase1);",
  "",
  "    if (isNaN(decimalValue)) {",
  "        document.getElementById('conversion-result').textContent = 'Número inválido!';",
  "        return;",
  "    }",
  "    console.log(`Valor decimal: ${decimalValue}`);",
  "",
  "    if (selectBase1 === selectBase2) {",
  "        document.getElementById('conversion-result').textContent = `O número já está na base ${selectBase1}: ${inputNumber}`;",
  "        return;",
  "    }",
  "",
  "    const convertedValue = decimalValue.toString(selectBase2).toLocaleUpperCase();",
  "",
  "    document.getElementById('conversion-result').textContent = `Resultado: ${convertedValue}`;",
  "    console.log(`Valor convertido: ${convertedValue}`);",
  "}",
  "",
  "displayResult();",
];
// Limpa o terminal antes de começar
let i = 0;
function typeWrite() {
  const textoArray = codeMessages;

  function type() {
    if (i < textoArray.length) {
      code.innerHTML += textoArray[i] + "<br>";
      terminal.scrollTop = terminal.scrollHeight;
      i++;
    } else {
      setTimeout(() => {
        terminalPopup.style.display = "none";
      }, 1000);
    }
    displayResult();
  }
  type();
}

terminal.addEventListener("keyup", (e) => {
  typeWrite(code);
});

function displayResult() {
  const inputNumber = document.getElementById("input-number").value;
  const selectBase1 = document.getElementById("select_base1").value;
  const selectBase2 = document.getElementById("select_base2").value;

  const decimalValue = parseInt(inputNumber, selectBase1);

  if (isNaN(decimalValue)) {
    document.getElementById("conversion-result").textContent =
      "O número digitado é inválido.";
    return;
  }

  console.log(decimalValue);

  if (selectBase1 === selectBase2) {
    document.getElementById(
      "conversion-result"
    ).textContent = `O número já está na base ${selectBase1}: ${inputNumber}`;
    return;
  }

  const convertedValue = parseInt(inputNumber, selectBase1)
    .toString(selectBase2)
    .toLocaleUpperCase();

  document.getElementById(
    "conversion-result"
  ).textContent = `Resultado da conversão: ${convertedValue}`;

  console.log(convertedValue);
}
