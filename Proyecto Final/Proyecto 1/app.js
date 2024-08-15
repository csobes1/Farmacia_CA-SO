/* Historia 1*/

var productosFarmaceuticos = [];

function agregarProductoFarmaceutico(nombre, descripcion, precio, cantidad) {
    
    const producto = {
        id: productosFarmaceuticos.length + 1, 
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad
    };


    productosFarmaceuticos.push(producto);


    console.log(`Producto ${nombre} agregado correctamente.`);
}


agregarProductoFarmaceutico('Ibuprofeno', 'Medicamento antiinflamatorio', 5.99, 100);
agregarProductoFarmaceutico('Acetaminofen', 'Medicamento para fiebre', 8, 100);
agregarProductoFarmaceutico('Trimetroprin', 'Medicamento para infecciones', 12, 100);

/* Historia 2*/

var proveedores = [];

function agregarProveedor(nombre, direccion, telefono, email) {

    const proveedor = {
        id: proveedores.length + 1, 
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email
    };

    proveedores.push(proveedor);

    console.log(`Proveedor ${nombre} agregado correctamente.`);
}

agregarProveedor('PharmaCorp', '123 Calle Principal, Ciudad', '555-1234', 'contacto@pharmacorp.com');
agregarProveedor('PharmaOne', '321 Calle Principal, Ciudad', '123-1234', 'contacto@pharmaone.com');

/* Historia 3*/

var clientes = [];

function agregarCliente(nombre, direccion, telefono, email) {

    const cliente = {
        id: clientes.length + 1, 
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email
    };

    clientes.push(cliente);

    console.log(`Cliente ${nombre} agregado correctamente.`);
}

agregarCliente('Juan Pérez', '456 Calle Secundaria, Ciudad', '555-5678', 'juan.perez@email.com');
agregarCliente('Luis Lopez', '456 Calle Secundaria, Ciudad', '123-5678', 'luis.lopez@email.com');
agregarCliente('carlos Gomez', '456 Calle Secundaria, Ciudad', '432-5678', 'carlos.gomez@email.com');

/* Historia 4*/

function calcularVentaConProductosExistentes(productosVendidos) {
    let totalVenta = 0;

    productosVendidos.forEach(productoVendido => {
        const producto = productosFarmaceuticos.find(p => p.id === productoVendido.productoId);

        if (!producto) {
            console.log(`Producto con ID ${productoVendido.productoId} no encontrado.`);
            return;
        }

        const subtotal = producto.precio * productoVendido.cantidad;
        totalVenta += subtotal;

        console.log(`${productoVendido.cantidad} unidades de ${producto.nombre} a $${producto.precio.toFixed(2)} cada uno: Subtotal $${subtotal.toFixed(2)}`);
    });

    console.log(`Total de la venta: $${totalVenta.toFixed(2)}`);
    return totalVenta;
}

const productosVendidos = [
    { productoId: 1, cantidad: 3 }, 
    { productoId: 2, cantidad: 2 }  
];

calcularVentaConProductosExistentes(productosVendidos);

