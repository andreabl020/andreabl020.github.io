const baseDeDatos = [
    {
      id: 1,
      imagen: "",
      nombre: "1",
      Categoria: "",
      puntosFuertes: "",
    },
    {
        id: 2,
        imagen: "",
        nombre: "2",
        Categoria: "",
        puntosFuertes: "",
    },
    {
        id: 3,
        imagen: "",
        nombre: "3",
        Categoria: "",
        puntosFuertes: "",
    },
    {
        id: 4,
        imagen: "",
        nombre: "4",
        Categoria: "",
        puntosFuertes: "",
    },
    {
        id: 5,
        imagen: "",
        nombre: "5",
        Categoria: "",
        puntosFuertes: "",
    },
    {
        id: 6,
        imagen: "",
        nombre: "6",
        Categoria: "",
        puntosFuertes: "",
    }
];

const DOMitems = document.querySelector("#items");

function renderizarPersonajes(){
    const miSection = document.createElement("section");
    miSection.classList.add("personaje");

    baseDeDatos.forEach((producto)=>{
        const miNodoCardBody = document.createElement("div");
        miNodoCardBody.classList.add("productos");

        const miNodoImg = document.createElement("img");
        miNodoImg.classList.add("img");
        miNodoImg.setAttribute("src", producto.imagen);

        const miNodoTitle = document.createElement("h5");
        miNodoTitle.textContent = producto.nombre;

        const miNodoCategoria = document.createElement("h5");
        miNodoTitle.textContent = producto.Categoria;

        const miNodoPuntosFuertes = document.createElement("p");
        miNodoTitle.textContent = producto.puntosFuertes;

        miNodoCardBody.appendChild(miNodoImg);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoCategoria);
        miNodoCardBody.appendChild(miNodoPuntosFuertes);

        miSection.appendChild(miNodoCardBody);
    });

    DOMitems.appendChild(miSection);

    renderizarPersonajes();
}