

function agregarCompra(producto, precio) {
    const dataLocal = JSON.parse(localStorage.getItem('compras'));
    console.log({dataLocal})
    const lista = dataLocal || [];
    lista.push({
        producto,
        precio
    })
    localStorage.setItem('compras', JSON.stringify(lista));
    alert(`Se registró en su carrito ${producto} $ ${precio}`);
}

function vaciarCarrito() {
    localStorage.clear();
    agregarListaCompras();
    mostrarOnoDescuento();
}

function agregarListaCompras() {
    const carrito = document.getElementById('carrito');
    if(carrito) {
        const dataLocal = JSON.parse(localStorage.getItem('compras')) || [];
        let html = '';
        let sumaTotal = 0;
        dataLocal.forEach(elemento => {
            html += `<li>${(elemento.producto)}: $ ${(elemento.precio)}.00</li>`;
            sumaTotal += elemento.precio;
        });
        carrito.innerHTML = html;

        const totalCarrito = document.getElementById('totalCarrito');
        const totalCarritoAntesDeDescuento = document.getElementById('totalCarritoAntesDeDescuento');
        totalCarritoAntesDeDescuento.innerHTML =  sumaTotal;
        totalCarrito.innerHTML =  sumaTotal - (dataLocal.length >= 3 ? sumaTotal*0.1 : 0 );

    }

}

function mostrarOnoDescuento() {
    const carrito = document.getElementById('carrito');
    if(carrito) {
        const dataLocal = JSON.parse(localStorage.getItem('compras')) || [];
        const descuentoHTML = document.getElementById('descuento');
        if(dataLocal.length >= 3) {
            let sumaTotal = 0;
            dataLocal.forEach(elemento => {
                sumaTotal += elemento.precio;
            });
            descuentoHTML.innerHTML = 'Descuento 10%: S/.'+sumaTotal*0.1;
        } else {
            descuentoHTML.innerHTML = '';
        }
    }
}

agregarListaCompras()
mostrarOnoDescuento()
