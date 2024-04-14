class carritoCompra {
  constructor() {
    this.productos = [];
  }
  agregarProducto(producto) {
    this.productos.push(producto);
  }
  calcularTotal() {
    let total = 0;
    for (let producto of this.productos) {
      total += producto.precio * producto.quantity;
    }
    return total;
  }
  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    const descuento = (total * porcentaje) / 100;
    return total - descuento;
  }
}

module.exports = carritoCompra;
