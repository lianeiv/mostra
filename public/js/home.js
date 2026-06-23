const envelope = document.getElementById("envelope");
const container = document.getElementById("envelope-container");
const typedText = document.getElementById("typed-text");
const startBtn = document.getElementById("startBtn");

const texto = `Querido telespectador,

Se você está lendo esta carta, significa que o Professor Daniel está morto. Há seis suspeitas, e cada uma delas tem sua própria versão dos acontecimentos.
A partir deste momento, a investigação está em suas mãos.

Descubra quem matou Daniel.`;

let aberto = false;

envelope.addEventListener("click", () => {

    if(aberto) return;

    aberto = true;

    container.classList.add("open");

    typedText.innerHTML = "";

    setTimeout(() => {

        let i = 0;

        function escrever(){

            if(i < texto.length){

                typedText.innerHTML += texto.charAt(i);

                i++;

                setTimeout(escrever,20);

            }else{

                startBtn.classList.add("show");

            }
        }

        escrever();

    },500);

});