const suspeitas = [
{
nome:"Rosalinda",
id:"A-6/007",
identificacao:"Tesoura",
foto:"images/rosalinda.jpg"
},
{
nome:"Cecília",
id:"C-7/001",
identificacao:"Lenço Branco",
foto:"images/cecilia.jpg"
},
{
nome:"Malu",
id:"M-4/040",
identificacao:"Veneno",
foto:"images/malu.jpg"
},
{
nome:"Mia",
id:"J-3/007",
identificacao:"Corda",
foto:"images/mia-placeholder.jpg"
},
{
nome:"Jordana",
id:"J-1/070",
identificacao:"Em investigação",
foto:"images/jordana-placeholder.jpg"
},
{
nome:"Beatriz",
id:"B-2/002",
identificacao:"Em investigação",
foto:"images/beatriz.jpg"
}
];

const container = document.getElementById("suspeitas");

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px,1fr))";
container.style.gap = "30px";
container.style.padding = "40px";

suspeitas.forEach(s => {

container.innerHTML += `
<div style="
background:white;
padding:20px;
border:1px solid #ddd;
box-shadow:0 0 20px rgba(0,0,0,.05);
">

<img
src="${s.foto}"
style="
width:100%;
height:350px;
object-fit:cover;
">

<h2 style="margin-top:15px;">
${s.nome}
</h2>

<p>
<strong>ID:</strong> ${s.id}
</p>

<p>
<strong>Identificação:</strong>
${s.identificacao}
</p>

</div>
`;

});