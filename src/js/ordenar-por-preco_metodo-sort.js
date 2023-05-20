let BTNprecoOrdenado = document.getElementById ("filtrar_livros_preco");

BTNprecoOrdenado.addEventListener ("click", ordenarPreco);

function ordenarPreco () {
    let livrosOrdenados = arrayDeLivros.sort ((a, b) => a.preco - b.preco);
    vitrineDeLivros (livrosOrdenados);
}