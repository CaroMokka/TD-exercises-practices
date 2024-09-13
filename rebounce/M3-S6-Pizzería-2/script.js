$(() => {
  let itemSeleccionados = [];

  let pedido = $("#pedido tbody");
  function mostrarPedido() {
    $("#pedido tbody").html("");
    let suma = 0;
    for (const item of itemSeleccionados) {
      suma += item.valor;
      console.log("valor", item.valor);
      console.log("total", suma);
      pedido.append(` 
                <tr>
                    <td>${item.nombre}</td>
                    <td>${item.valor}</td>
                </tr>
            `);
    }
    let totalPedido = $("#total-pedido");
    totalPedido.html(`$${suma}`);
  }

  $(document).on("click", ".checked", function () {
    const item = $(this).val();
    const precio = parseInt($(this).data("precio"));

    const producto = {
      nombre: item,
      valor: precio,
    };
    itemSeleccionados.push(producto);
    console.log(itemSeleccionados);
    mostrarPedido();
  });
});
