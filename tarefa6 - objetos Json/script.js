let cervejas = [
   {
       name: "Guiness",
       alcohol: "10%"
   },
   {
       name: "Desperados",
       alcohol: "6%"
   },
   {
       name: "Becks",
       alcohol: "5%"
   }
]

const carregarTabela = (cs) => {
   const tbody = document.getElementById("cervejasBody");
   const tabela = document.getElementById("cervejasTable");

   tabela.style.display = "block"; 

   const linhas = cs.map((item) => {
       return `<tr><td>${item.name}</td><td>${item.alcohol}</td></tr>`;
   });

   tbody.innerHTML = linhas.join("");
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarTabela(cervejas));