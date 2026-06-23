const envelope =
document.getElementById("envelope");

const text =
document.getElementById("typed-text");

const startBtn =
document.getElementById("startBtn");

startBtn.style.display = "none";

const mensagem = `
Professor Daniel está morto.

Seis suspeitas.
Seis histórias.

A verdade encontra-se escondida
entre versões conflitantes.

A investigação agora está
em suas mãos.
`;

envelope.addEventListener("click", () => {

envelope.classList.add("open");

let i = 0;

function escrever() {

if(i < mensagem.length){

text.innerHTML += mensagem.charAt(i);

i++;

setTimeout(escrever, 30);

}else{

startBtn.style.display = "inline-block";

}

}

setTimeout(escrever, 1000);

},{ once:true });
