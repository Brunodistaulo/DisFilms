const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test("Agregar producto incrementa el tamaño del carrito", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 50, quantity: 1 });
    expect(carrito.productos.length).toBe(1);
  });

  test("Calcular total sin productos devuelve 0", () => {
    expect(carrito.calcularTotal()).toBe(0);
  });

  test("Calcular total con productos devuelve el valor correcto", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 50, quantity: 2 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 30, quantity: 1 });
    expect(carrito.calcularTotal()).toBe(130);
  });

  test("Aplicar descuento reduce el total correctamente", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 50, quantity: 2 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 30, quantity: 1 });
    expect(carrito.aplicarDescuento(10)).toBe(117);
  });

  test("Aplicar descuento de 0% no cambia el total", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 50, quantity: 2 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 30, quantity: 1 });
    expect(carrito.aplicarDescuento(0)).toBe(130);
  });

  test("Aplicar descuento mayor al total devuelve 0", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 50, quantity: 1 });
    expect(carrito.aplicarDescuento(110)).toBe(0);
  });
});
