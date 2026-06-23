const container =
document.getElementById("envelope-container");

const text =
document.getElementById("typed-text");

const button =
document.getElementById("startBtn");

button.style.display = "none";

const mensagem = `Querido telespectador,

Se você está lendo esta carta,
significa que o Professor Daniel está morto.
Há seis suspeitas, e cada uma delas tem sua própria versão dos acontecimentos.

A partir deste momento,
a investigação está em suas mãos.
Analise os depoimentos,
examine as pistas,
conecte os fatos e
questione tudo o que encontrar.

Descubra quem matou Daniel.`;

container.addEventListener("click", () => {

    container.classList.add("open");

    let i = 0;

    function escrever(){

        if(i < mensagem.length){

            text.innerHTML += mensagem.charAt(i);

            i++;

            setTimeout(escrever,25);

        }else{

            button.style.display = "inline-block";

        }
    }

    setTimeout(escrever,1000);

},{once:true});