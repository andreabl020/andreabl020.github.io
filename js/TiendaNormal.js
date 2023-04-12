const produtos=[
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"},
{nombre:"",precio:0,imagen:"../imagenes/productosNormales/"}
];

const resultsContainer = document.createElement("ul");
results.forEach(product => {
  const li = document.createElement("li");
  li.textContent = `${product.name} - ${product.category}`;
  resultsContainer.appendChild(li);
});
document.body.appendChild(resultsContainer);