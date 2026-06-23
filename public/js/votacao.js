function votar(nome){

    const modal = document.getElementById("resultadoModal");
    const titulo = document.getElementById("resultadoTitulo");
    const texto = document.getElementById("resultadoTexto");

    if(nome === "Mia"){

        titulo.innerHTML = "✅ Acusação correta!";

        texto.innerHTML = `
        Você descobriu que Mia matou o Professor Daniel.

        <br><br>

        <strong>Motivo:</strong> Endividada e desesperada para manter sua fonte de renda, Mia acreditava que o Professor Daniel estava roubando sua cartela de clientes.

        <br><br>

        Convencida de que ele era o responsável por seus problemas financeiros, ela decidiu eliminá-lo para recuperar seus clientes e tentar reconstruir sua carreira.

        <br><br>

        Parabéns, detetive! Sua atenção aos detalhes permitiu desvendar o caso e revelar a verdadeira assassina do Professor Daniel.

        <br><br>

        <strong>Caso solucionado.</strong>
        `;

    }else{

        titulo.innerHTML = "❌ Investigação inconclusiva";

        texto.innerHTML = `
        Sua acusação não corresponde aos fatos.

        <br><br>

        O verdadeiro assassino ainda está entre os suspeitos.
        `;
    }

    modal.style.display = "flex";
}

function fecharModal(){
    document.getElementById("resultadoModal").style.display = "none";
}