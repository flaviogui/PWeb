const carregarDiv = (cervs) => {
    const div = document.getElementById("meu amor");
    const cervejasHtml = cervs.map(item => `<h1>${item}</h1>`);
    div.innerHTML = `${cervejasHtml.join("\n")}`;
 }
 
 let botao = document.getElementById("botaoCarregar");
 botao.addEventListener("click", () => {
    const cervejas = ["Guiness", "Desperados", "Becks"];
    carregarDiv(cervejas);
 });
 