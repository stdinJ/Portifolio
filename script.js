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
            div.className = "min-w-[300px] bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition";
            div.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${projeto.nome}</h3>
        <p class="mb-4">${projeto.descricao}</p>
        ${projeto.link ? `<a href="${projeto.link}" target="_blank" class="text-blue-400 hover:underline">Ver no GitHub</a>` : ""}
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
            listaHabilidades.appendChild(li);
        });

    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
}

// Formulário
document.addEventListener("DOMContentLoaded", () => {
    carregarDados();

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Mensagem enviada! (Simulação)");
    });
});
