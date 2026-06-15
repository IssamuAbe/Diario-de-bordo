const form = document.getElementById("entryForm");
const lista = document.getElementById("listaEntradas");

let entradas =
    JSON.parse(localStorage.getItem("entradas")) || [];

function salvarEntradas() {
    localStorage.setItem(
        "entradas",
        JSON.stringify(entradas)
    );
}

function renderizarEntradas() {
    lista.innerHTML = "";

    entradas.forEach((entrada, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <h3>${entrada.titulo}</h3>
            <p>${entrada.descricao}</p>
            <small>${entrada.data}</small>
            <br>
            <button class="remover" onclick="removerEntrada(${index})">
                Remover
            </button>
        `;

        lista.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo =
        document.getElementById("titulo").value;

    const descricao =
        document.getElementById("descricao").value;

    const data =
        document.getElementById("data").value;

    entradas.push({
        titulo,
        descricao,
        data
    });

    salvarEntradas();
    renderizarEntradas();

    form.reset();
});

function removerEntrada(index) {
    entradas.splice(index, 1);

    salvarEntradas();
    renderizarEntradas();
}

renderizarEntradas();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.js")
        .then(() => {
            console.log("Service Worker registrado.");
        });
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();

    deferredPrompt = e;

    const installBtn =
        document.getElementById("installBtn");

    installBtn.style.display = "block";
});

document
    .getElementById("installBtn")
    .addEventListener("click", async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;

        deferredPrompt = null;

        document.getElementById(
            "installBtn"
        ).style.display = "none";
    });