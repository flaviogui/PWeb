let cervejas = [
    {
        name: "Guiness",
        alcohol: "10%",
        style: "Red Ale",
        ibu: "35"
    },
    {
        name: "Desperados",
        alcohol: "6%",
        style: "English IPA",
        ibu: "17"
    },
    {
        name: "Becks",
        alcohol: "5%",
        style: "Imperial Stout",
        ibu: "60"
    }
 ]
 
 const carregarTabela = (cs) => {
    const tbody = document.getElementById("cervejasBody");
    const tabela = document.getElementById("cervejasTable");
 
    tabela.style.display = "block"; 
 
    const linhas = cs.map((item) => {
        return `<tr><td>${item.name}</td><td>${item.alcohol}</td><td>${item.style}</td><td>${item.ibu}</td></tr>`;
    });
 
    tbody.innerHTML = linhas.join("");

    const elemento = document.getElementById(elementoId);
    elemento.innerHTML = "";
    elemento.appendChild(tabela);
 }
 
 let botao = document.getElementById("botaoCarregar");
 botao.addEventListener("click", () => carregarTabela(cervejas));