let cervejas = []

   //cs é um array de cervejas
   const carregarDiv = cs => {
      const div = document.getElementById("cervejasDiv")
      const itensHtml = cs.map(({ name, alcohol, ibu, style }) => `<div>${name} -- ${alcohol} -- ${ibu} -- ${style}</div>`)
      div.innerHTML = `${itensHtml.join("\n")}`
   }

   async function carregarCervejas() {
      try {
         let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
         cervejas = await res.json()
         carregarDiv(cervejas)
         document.getElementById("errorText").innerHTML = "";
      } catch (err) {
         document.getElementById("cervejasDiv").innerHTML = "";
         document.getElementById("errorText").innerHTML = "Fudeu..."
      }
   }

   let botao = document.getElementById("botaoCarregar")
   botao.addEventListener("click", () => carregarCervejas())