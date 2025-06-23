async function carregarDados() {
    try {
        const resposta = await fetch("data.json");
        const dados = await resposta.json();

        // Sobre
        document.getElementById("sobre-texto").textContent = dados.sobre;

        // Projetos
        const containerProjetos = document.getElementById("projetos-carousel");
        dados.projetos.forEach(projeto => {
            const div = document.createElement("div");
            div.className = "min-w-[300px] bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between";
            div.innerHTML = `
                <h3 class="text-xl font-semibold mb-2">${projeto.nome}</h3>
                <p class="mb-4 flex-grow">${projeto.descricao}</p>
                ${projeto.link ? `<a href="${projeto.link}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">Ver no GitHub</a>` : ""}
            `;
            containerProjetos.appendChild(div);
        });

        // Navegação do carrossel
        const scrollAmount = 320;
        document.getElementById("next").addEventListener("click", () => {
            containerProjetos.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
        document.getElementById("prev").addEventListener("click", () => {
            containerProjetos.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        // Habilidades
        const listaHabilidades = document.getElementById("habilidades-lista");
        dados.habilidades.forEach(habilidade => {
            const li = document.createElement("li");
            li.textContent = habilidade;
            li.className = "bg-gray-800 rounded-md p-4 text-center shadow-sm";
            listaHabilidades.appendChild(li);
        });

    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    carregarDados();
});
