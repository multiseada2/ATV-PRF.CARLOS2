let produtos = {
    data: [
        {
            productName: "Mustang GT",
            categoria: "Muscle",
            preco: "300.000,000",
            imagem: "mustang.jpg",
            ano: "2022",
        },
        {
            productName: "Lamborguini Urus",
            categoria: "Super",
            preco: "4.900.000,00",
            imagem: "urus.png",
            ano: "2019",
        },
        {
            productName: "Hilux SRX",
            categoria: "Caminhonete",
            preco: "325.348,00",
            imagem: "hilux.png",
            ano: "2022",
        },
        {
            productName: "Dodge Challenger",
            categoria: "Muscle",
            preco: "290.000,000",
            imagem: "dodge.jpg",
            ano: "2021",
        },
        {
            productName: "Ônix Lt AT Turbo",
            categoria: "Popular",
            preco: "87.234,00",
            imagem: "onix.jpg",
            ano: "2022",
        },
        {
            productName: "BMW I8",
            categoria: "Super",
            preco: "890.000,00",
            imagem: "i8.jpg",
            ano: "2022",
        },
        {
            productName: "HB20 Comfort",
            categoria: "Popular",
            preco: "89.999,00",
            imagem: "HB20.jpg",
            ano: "2020",
        },
        {
            productName: "MClaren P1",
            categoria: "Super",
            preco: "8.000.000,00",
            imagem: "mcp1.jpg",
            ano: "2024",
        },
    ],
};

for (let i of produtos.data) {
    let card = document.createElement("div");

    card.classList.add("card", i.categoria, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("imagem-container");

    let imagem = document.createElement("img");
    imagem.setAttribute("src", i.imagem);
    imgContainer.appendChild(imagem);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let nome = document.createElement("h5");
    nome.classList.add("product-nome");
    nome.innerText = i.productName.toUpperCase();
    container.appendChild(nome);

    let ano = document.createElement("h6");
    ano.innerText = "Ano: " + i.ano;
    container.appendChild(ano);

    let preco = document.createElement("h6");
    preco.innerText = "R$" + i.preco;
    container.appendChild(preco);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}


function filterProduct(value) {

    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {

        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });


    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {

        if (value == "Todos") {
            element.classList.remove("hide");
        } else {

            if (element.classList.contains(value)) {

                element.classList.remove("hide");
            } else {

                element.classList.add("hide");
            }
        }
    });
}


document.getElementById("search").addEventListener("click", () => {

    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-nome");
    let cards = document.querySelectorAll(".card");


    elements.forEach((element, index) => {

        if (element.innerText.includes(searchInput.toUpperCase())) {

            cards[index].classList.remove("hide");
        } else {

            cards[index].classList.add("hide");
        }
    });
});


window.onload = () => {
    filterProduct("Todos");
};
