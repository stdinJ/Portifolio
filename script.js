async function carregarDados() {
    try {
        const resposta = await fetch("data.json");
        const dados = await resposta.json();

        // Preencher "Sobre mim"
        document.getElementById("sobre-texto").textContent = dados.sobre;

        // Preencher Projetos
        const containerProjetos = document.getElementById("projetos-container");
        dados.projetos.forEach(projeto => {
            const div = document.createElement("div");
            div.className = "bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition";
            div.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${projeto.nome}</h3>
        <p class="mb-4">${projeto.descricao}</p>
        ${projeto.link ? `<a href="${projeto.link}" target="_blank" class="text-blue-400 hover:underline">Ver no GitHub</a>` : ""}
      `;
            containerProjetos.appendChild(div);
        });

        // Preencher Habilidades
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

// Disparar após carregar o DOM
document.addEventListener("DOMContentLoaded", carregarDados);

// Simular envio de formulário
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada! (Simulação)");
});
