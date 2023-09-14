let sorvetes = ["Haagen Dazs", "Ben & Jerrys", "Sorvelândia"];

        const carregarTabela = () => {
            let tbody = document.querySelector("#tabelaSorvetes tbody");

            let sorvetesHtml = sorvetes.map((nome) => {
                return `<tr><td>${nome}</td></tr>`;
            });

            tbody.innerHTML = sorvetesHtml.join("");
        }

        const ordenarSorvetes = () => {
            sorvetes.sort(); // ordena o array de cervejas em ordem alfabética

            carregarTabela(); // atualiza a tabela após a ordenação
        }

        const embaralharSorvetes = () => {
            sorvetes.sort(() => {
                return 0.5 - Math.random(); // retorna valores aleatórios 
            });

            carregarTabela(); // atualiza a tabela após o embaralhamento
        }

        let botaoCarregar = document.getElementById("botaoCarregar");
        botaoCarregar.addEventListener("click", carregarTabela);

        let botaoOrdenar = document.getElementById("botaoOrdenar");
        botaoOrdenar.addEventListener("click", ordenarSorvetes);

        let botaoEmbaralhar = document.getElementById("botaoEmbaralhar");
        botaoEmbaralhar.addEventListener("click", embaralharSorvetes);
